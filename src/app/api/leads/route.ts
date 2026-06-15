import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
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
    } = body;

    // Validation
    if (!name || !phone || !flooringType || areaSqm === undefined || !estimatedPrice || !leadType) {
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

    return NextResponse.json({
      success: true,
      message: 'Lead registered in PostgreSQL database.',
      lead: {
        id: newLead.id,
        createdAt: newLead.created_at
      }
    });
  } catch (error: any) {
    console.error('API Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to write lead to database', details: error.message },
      { status: 500 }
    );
  }
}
