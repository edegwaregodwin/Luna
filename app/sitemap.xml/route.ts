import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://thelunainitiative.org";

  // Define your static URLs with priority
  const pages = [
    { loc: `${baseUrl}/`, priority: "1.00" },
    { loc: `${baseUrl}/about`, priority: "0.80" },
    { loc: `${baseUrl}/team`, priority: "0.80" },
    { loc: `${baseUrl}/fundraising`, priority: "0.80" },
    { loc: `${baseUrl}/donate`, priority: "0.80" },
    { loc: `${baseUrl}/contact`, priority: "0.80" },
  ];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!--  created dynamically in Next.js  -->
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page.priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
