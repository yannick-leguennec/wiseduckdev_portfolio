const fs = require("fs").promises;
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Function to generate the sitemap.xml content
async function generateSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const currentDate = new Date().toISOString().split("T")[0];

  // Specific <url> blocks as strings for '/','/gpts', and '/gpts/prompting-tips'
  const indexUrlBlock = `
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
</url>`;

  const gptsUrlBlock = `
  <url>
  <loc>https://${baseUrl}/gpts</loc>
  <image:image>
<image:loc>https://${baseUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp</image:loc>
</image:image>
<image:image>
<image:loc>https://${baseUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style.webp</image:loc>
</image:image>
</url>`;

  const promptingTipsUrlBlock = `
  <url>
  <loc>https://${baseUrl}/gpts/prompting-tips</loc>
  <image:image>
<image:loc>https://${baseUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp</image:loc>
</image:image>
</url>
`;

  // Initialize urlEntries with specific blocks
  let urlEntries = `${indexUrlBlock}${gptsUrlBlock}${promptingTipsUrlBlock}`;

  // Process the gpts_categories.json and gpts_test.json files
  try {
    // Categories
    const categoriesData = await fs.readFile(
      path.join(process.cwd(), "/public/docs/GPTs/gpts_categories.json"),
      "utf8"
    );
    const categories = JSON.parse(categoriesData).EN;

    categories.forEach((category) => {
      urlEntries += `
        <url>
          <loc>https://${baseUrl}/gpts/${category.path}</loc>
          <image:image><image:loc>https://${baseUrl}${category.image}</image:loc></image:image>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
    });

    // ! MODIFY THE FILE PATH BEFORE DEPLOYING
    // GPTs
    const gptsData = await fs.readFile(
      path.join(process.cwd(), "/public/docs/GPTs/gpts.json"),
      "utf8"
    );
    const gpts = JSON.parse(gptsData).EN;

    gpts.forEach((gpt) => {
      urlEntries += `
        <url>
          <loc>https://${baseUrl}/gpts${gpt.path}</loc>
          <image:image><image:loc>https://${baseUrl}${gpt.image}</image:loc></image:image>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
    });
  } catch (error) {
    console.error("Error processing JSON files:", error);
  }

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${urlEntries}
    </urlset>
  `;

  await fs.writeFile(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap.trim()
  );
}

generateSitemap();
