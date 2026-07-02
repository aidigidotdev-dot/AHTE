import { Instagram, Linkedin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "https://ahteflooring.ae/" },
  { label: "About Us", href: "https://ahteflooring.ae/about-us/" },
  { label: "Blogs", href: "https://ahteflooring.ae/blogs/" },
  { label: "Contact Us", href: "https://ahteflooring.ae/contact-us/" },
];

const SERVICE_LINKS = [
  { label: "Microtopping", href: "https://ahteflooring.ae/service/microtopping/" },
  { label: "Terrazzo Flooring", href: "https://ahteflooring.ae/service/terrazzo-flooring/" },
  { label: "Decorative Flooring", href: "https://ahteflooring.ae/service/decorative-flooring/" },
  { label: "Kitchen Flooring", href: "https://ahteflooring.ae/service/kitchen-flooring/" },
  { label: "Epoxy Flooring", href: "https://ahteflooring.ae/service/epoxy-flooring/" },
  { label: "Microconcrete", href: "https://ahteflooring.ae/service/microconcrete/" },
  { label: "Car Parking", href: "https://ahteflooring.ae/service/car-parking/" },
  { label: "Sports Flooring", href: "https://ahteflooring.ae/service/sports-flooring/" },
  { label: "Exposed Aggregate", href: "https://ahteflooring.ae/service/exposed-aggregate/" },
  { label: "Stone Carpet", href: "https://ahteflooring.ae/service/stone-carpet/" },
  { label: "Concrete Polishing", href: "https://ahteflooring.ae/service/concrete-polishing/" },
];

const footerLinkClass =
  "inline-block text-sm leading-relaxed text-[#111111] transition-opacity hover:opacity-60";

export default function MainWebsiteFooter() {
  return (
    <footer className="w-full bg-[#fbf8ef] px-5 py-[60px] lg:py-[90px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-6">
          <a href="https://ahteflooring.ae/" className="block max-w-[160px]">
            <img
              src="https://ahteflooring.ae/wp-content/uploads/2026/06/logo-scaled.png"
              alt="A H T E Flooring LLC"
              className="h-auto w-full"
            />
          </a>
          <p className="m-0 text-sm font-normal leading-[1.6] text-[#111111]">
            AHTE Flooring LLC is a premium flooring company based in Dubai, UAE, specializing in
            Terrazzo Flooring, Epoxy &amp; PU Coatings, Self-Leveling Systems, Industrial Flooring,
            Heavy-Duty Floors, Sports Flooring, and Car Parking Flooring - delivering world-class
            results across every project.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Address
            </h2>
            <p className="m-0 text-sm leading-[1.6] text-[#111111]">
              Warehouse 2, 364-11A ST, AI Quoz Ind 1st, PO BOX: 8854, Dubai U.A.E
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Call
            </h2>
            <div className="flex flex-col text-sm leading-[1.6] text-[#111111]">
              <a href="tel:+971501920298" className="transition-opacity hover:opacity-60">
                +971 50 1920298
              </a>
              <a href="tel:+971529234069" className="transition-opacity hover:opacity-60">
                +971 52 9234069
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Email
            </h2>
            <div className="flex flex-col text-sm leading-[1.6] text-[#111111]">
              <a href="mailto:hafeez@ahteflooring.ae" className="transition-opacity hover:opacity-60">
                hafeez@ahteflooring.ae
              </a>
              <a href="mailto:namish@ahteflooring.ae" className="transition-opacity hover:opacity-60">
                namish@ahteflooring.ae
              </a>
              <a href="mailto:info@ahteflooring.ae" className="transition-opacity hover:opacity-60">
                info@ahteflooring.ae
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ahte_flooring_llc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A H T E Flooring on Instagram"
              className="text-black transition-opacity hover:opacity-60"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-h-t-e-flooring-llc-945936220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A H T E Flooring on LinkedIn"
              className="text-black transition-opacity hover:opacity-60"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <FooterMenu title="Quick Links" links={QUICK_LINKS} />
        <FooterMenu title="Our Services" links={SERVICE_LINKS} />
      </div>
    </footer>
  );
}

function FooterMenu({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">{title}</h2>
      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={footerLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
