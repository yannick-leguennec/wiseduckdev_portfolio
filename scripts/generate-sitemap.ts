const fs = require("fs").promises;
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Function to generate the sitemap.xml content
async function generateSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const currentDate = new Date().toISOString().split("T")[0];

  // Initial paths array with specified paths
  let paths = ["/", "/gpts", "/gpts/prompting-tips"];

  // Read and process the gpts_categories.json file
  try {
    const categoriesPath = path.join(
      process.cwd(),
      "/public/docs/GPTs/gpts_categories.json"
    );
    const categoriesData = await fs.readFile(categoriesPath, "utf8");
    const categories = JSON.parse(categoriesData).EN;

    // Extract paths from categories, prefix with '/gpts/', and add to paths array
    const categoryPaths = categories.map(
      (category) => `/gpts/${category.path}`
    );
    paths = [...paths, ...categoryPaths];
  } catch (error) {
    console.error("Error reading or processing gpts_categories.json:", error);
  }

  // ! CHANGE THE FILE NAME BEFORE DEPLOYMENT
  // Read and process the gpts_test.json file
  try {
    const gptsPath = path.join(
      process.cwd(),
      "/public/docs/GPTs/gpts_test.json"
    );
    const gptsData = await fs.readFile(gptsPath, "utf8");
    const gpts = JSON.parse(gptsData).EN;

    // Extract paths from categories, prefix with '/gpts/', and add to paths array
    const gptPaths = gpts.map((gpt) => `/gpts${gpt.path}`);
    paths = [...paths, ...gptPaths];
  } catch (error) {
    console.error("Error reading or processing gpts_test.json:", error);
  }

  // Generate url entries for each path
  const urlEntries = paths
    .map(
      (path) => `
    <url>
      <loc>https://${baseUrl}${path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlEntries}
    </urlset>
  `;

  // Write the sitemap.xml file
  await fs.writeFile(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap.trim()
  );
}

generateSitemap();
