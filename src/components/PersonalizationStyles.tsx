"use client";

import { usePersonalization } from "../context/PersonalizationContext";
import { useEffect } from "react";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 90, g: 90, b: 64 };
}

export default function PersonalizationStyles() {
  const { primaryColor, fontFamily } = usePersonalization();
  const rgb = hexToRgb(primaryColor);
  const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

  // Dynamically load Google Font if it's not Inter
  useEffect(() => {
    if (fontFamily === "Inter" || !fontFamily) return;

    const fontId = `google-font-${fontFamily.replace(/\s+/g, "-").toLowerCase()}`;
    if (document.getElementById(fontId)) return;

    const link = document.createElement("link");
    link.id = fontId;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, "+")}:wght@300;400;500;600;700;800;900&display=swap`;
    document.head.appendChild(link);
  }, [fontFamily]);

  const css = `
    :root {
      --color-primary: ${primaryColor};
      --color-primary-rgb: ${rgbString};
      --font-family-custom: ${fontFamily === "Inter" ? 'var(--font-sans)' : `'${fontFamily}', sans-serif`};
    }

    /* Override all Tailwind classes referencing #5A5A40 */
    .text-\\[\\#5A5A40\\] {
      color: var(--color-primary) !important;
    }
    .hover\\:text-\\[\\#5A5A40\\]:hover {
      color: var(--color-primary) !important;
    }
    .bg-\\[\\#5A5A40\\] {
      background-color: var(--color-primary) !important;
    }
    .hover\\:bg-\\[\\#5A5A40\\]:hover {
      background-color: var(--color-primary) !important;
    }
    .border-\\[\\#5A5A40\\] {
      border-color: var(--color-primary) !important;
    }
    .hover\\:border-\\[\\#5A5A40\\]:hover {
      border-color: var(--color-primary) !important;
    }
    .bg-\\[\\#5A5A40\\]\\/10 {
      background-color: rgba(var(--color-primary-rgb), 0.1) !important;
    }
    .shadow-\\[\\#5A5A40\\]\\/15 {
      box-shadow: 0 4px 6px -1px rgba(var(--color-primary-rgb), 0.15), 0 2px 4px -2px rgba(var(--color-primary-rgb), 0.15) !important;
    }

    /* Apply Custom Font family globally */
    body, html, h1, h2, h3, h4, h5, h6, p, span, a, button, input, select, textarea, div {
      font-family: var(--font-family-custom) !important;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
