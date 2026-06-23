import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

type LeadEmailPayload = {
  id: number;
  createdAt: string | Date;
  name: string;
  email?: string;
  phone: string;
  company?: string;
  flooringType: string;
  areaSqm: number;
  projectSector?: string;
  finishStyle?: string;
  metalInlays?: string;
  underfloorHeating?: boolean;
  estimatedPrice: number;
  leadType: string;
};

const DEFAULT_LEAD_RECIPIENT = 'aidigidotdev@gmail.com';

function cleanValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : value;
}

function getLeadEmailRecipients() {
  return (process.env.LEADS_EMAILS || process.env.leads_emails || process.env.LEAD_EMAILS || DEFAULT_LEAD_RECIPIENT)
    .split(/[,;\n]/)
    .map((email) => email.trim())
    .filter((email, index, emails) => email && emails.indexOf(email) === index);
}

function isValidEmail(email?: string) {
  return !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(value: string | Date) {
  return new Date(value).toLocaleString('en-AE', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Dubai',
  });
}

function formatMoney(value: number) {
  return `${Number(value || 0).toLocaleString('en-AE')} AED`;
}

function getLeadRows(payload: LeadEmailPayload) {
  return [
    ['Lead ID', String(payload.id)],
    ['Received', formatDate(payload.createdAt)],
    ['Lead Type', payload.leadType],
    ['Name', payload.name],
    ['Email', payload.email || 'Not provided'],
    ['Phone', payload.phone],
    ['Company / Project', payload.company || 'Not provided'],
    ['Flooring Type', payload.flooringType],
    ['Area', `${payload.areaSqm} sqm`],
    ['Project Sector', payload.projectSector || 'General'],
    ['Finish Style', payload.finishStyle || 'Standard'],
    ['Metal Inlays', payload.metalInlays || 'None'],
    ['Underfloor Heating', payload.underfloorHeating ? 'Yes' : 'No'],
    ['Estimated Price', formatMoney(payload.estimatedPrice)],
  ];
}

function formatLeadTextEmail(payload: LeadEmailPayload) {
  return [
    'New A H T E flooring lead received',
    '',
    ...getLeadRows(payload).map(([label, value]) => `${label}: ${value}`),
  ].join('\n');
}

function formatLeadHtmlEmail(payload: LeadEmailPayload) {
  const rows = getLeadRows(payload)
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e8e4d8;color:#6b665d;font-size:13px;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e8e4d8;color:#171717;font-size:13px;font-weight:600;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join('');

  return `
    <div style="margin:0;padding:24px;background:#f5f3eb;font-family:Arial,Helvetica,sans-serif;color:#171717;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e1ddd2;border-radius:12px;overflow:hidden;">
        <div style="padding:22px 24px;background:#171717;color:#ffffff;">
          <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#b8b09e;">A H T E Flooring</div>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.25;">New Website Lead</h1>
        </div>
        <div style="padding:22px 24px;">
          <p style="margin:0 0 16px;color:#5f5a50;font-size:14px;line-height:1.6;">
            A new lead was submitted from the website. Details are below.
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e8e4d8;border-radius:8px;overflow:hidden;">
            ${rows}
          </table>
        </div>
      </div>
    </div>
  `;
}

async function sendLeadEmail(payload: LeadEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM;
  const recipients = getLeadEmailRecipients();

  if (!apiKey || !from || recipients.length === 0) {
    return { status: 'skipped' as const, recipients };
  }

  const emailBody: Record<string, unknown> = {
    from,
    to: recipients,
    subject: `New website lead: ${payload.flooringType} - ${payload.name}`,
    text: formatLeadTextEmail(payload),
    html: formatLeadHtmlEmail(payload),
  };

  if (isValidEmail(payload.email)) {
    emailBody.reply_to = payload.email;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailBody),
  });

  if (!response.ok) {
    throw new Error(`Lead email failed with status ${response.status}: ${await response.text()}`);
  }

  return { status: 'sent' as const, recipients };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name: rawName,
      email: rawEmail,
      phone: rawPhone,
      company: rawCompany,
      flooringType: rawFlooringType,
      areaSqm: rawAreaSqm,
      projectSector: rawProjectSector,
      finishStyle: rawFinishStyle,
      metalInlays: rawMetalInlays,
      underfloorHeating,
      estimatedPrice: rawEstimatedPrice,
      leadType: rawLeadType
    } = body;

    const name = cleanValue(rawName) as string;
    const email = cleanValue(rawEmail) as string | undefined;
    const phone = cleanValue(rawPhone) as string;
    const company = cleanValue(rawCompany) as string | undefined;
    const flooringType = cleanValue(rawFlooringType) as string;
    const areaSqm = Number(rawAreaSqm);
    const projectSector = cleanValue(rawProjectSector) as string | undefined;
    const finishStyle = cleanValue(rawFinishStyle) as string | undefined;
    const metalInlays = cleanValue(rawMetalInlays) as string | undefined;
    const estimatedPrice = Number(rawEstimatedPrice);
    const leadType = cleanValue(rawLeadType) as string;

    // Validation
    if (!name || !phone || !flooringType || !Number.isFinite(areaSqm) || !Number.isFinite(estimatedPrice) || !leadType) {
      return NextResponse.json(
        { error: 'Missing required fields (name, phone, flooringType, areaSqm, estimatedPrice, leadType)' },
        { status: 400 }
      );
    }

    const insertQuery = `
      INSERT INTO leads (
        name,
        email,
        phone,
        company,
        flooring_type,
        area_sqm,
        project_sector,
        finish_style,
        metal_inlays,
        underfloor_heating,
        estimated_price,
        lead_type
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id, created_at;
    `;

    const values = [
      name,
      email || null,
      phone,
      company || null,
      flooringType,
      areaSqm,
      projectSector || 'General',
      finishStyle || 'Standard',
      metalInlays || null,
      underfloorHeating || false,
      estimatedPrice,
      leadType
    ];

    const result = await query(insertQuery, values);
    const newLead = result.rows[0];

    let emailNotification: Awaited<ReturnType<typeof sendLeadEmail>> | { status: 'failed' } = { status: 'skipped', recipients: [] };

    try {
      emailNotification = await sendLeadEmail({
        id: newLead.id,
        createdAt: newLead.created_at,
        name,
        email,
        phone,
        company,
        flooringType,
        areaSqm,
        projectSector,
        finishStyle,
        metalInlays,
        underfloorHeating,
        estimatedPrice,
        leadType
      });
    } catch (emailError) {
      console.error('Lead saved, but email notification failed:', emailError);
      emailNotification = { status: 'failed' };
    }

    return NextResponse.json({
      success: true,
      message: 'Lead registered in PostgreSQL database.',
      lead: {
        id: newLead.id,
        createdAt: newLead.created_at
      },
      emailNotification
    });
  } catch (error: any) {
    console.error('API Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to write lead to database', details: error.message },
      { status: 500 }
    );
  }
}
