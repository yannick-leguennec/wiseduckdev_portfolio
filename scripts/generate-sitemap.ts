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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <url>
        <loc>https://${baseUrl}</loc>
        <image:image>
      <image:loc>https://${baseUrl}/images/index/professional-wise-duck-dev-developer-brand-profile-image.webp</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/index/full-stack-react-wise-duck-developer-profile.webp</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/index/professional-wise-duck-developer-coding-laptop-office.webp</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/index/professional-wise-duck-developer-mobile-coding-office.webp</image:loc>
    </image:image>
    <image:image>
    <image:loc>https://${baseUrl}/images/index/innovative-developer-wise-duck-dev-white-suit-couch-tropical-plants-mobile.webp</image:loc>
  </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/logos/wise-duck-dev-full-stack-js-logo-vertical.png</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/logos/wise-duck-dev-full-stack-js-logo-horizontal.png</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/logos/wise-duck-dev-full-stack-js-logo.png</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://${baseUrl}/images/projectsPictures/family-flow-project-management-lead-developer.webp</image:loc>
    </image:image>
    <image:image>
    <image:loc>https://${baseUrl}/images/404/innovative-developer-wise-duck-dev-relaxing-drink-404-page.webp</image:loc>
  </image:image>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;

  await fs.writeFile(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap.trim()
  );
}

generateSitemap();
