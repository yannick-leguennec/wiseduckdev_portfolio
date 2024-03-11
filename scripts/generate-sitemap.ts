const fs = require("fs").promises;
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Function to generate the sitemap.xml content
async function generateSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  console.log("baseUrl", baseUrl);
  const currentDate = new Date().toISOString().split("T")[0];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/fr</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;

  await fs.writeFile(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap
  );
}

generateSitemap();
