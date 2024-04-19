const axios = require("axios");
const xml2js = require("xml2js");
// ! Need to be able to access the .env file
// const dotenv = require("dotenv");

// Initialize dotenv to load the .env file variables into process.env
dotenv.config();

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

// const sitemapUrl = `https://${baseUrl}/sitemap.xml`;
const sitemapUrl = `https://wiseduckdev.vercel.app/sitemap.xml`;

async function fetchSitemapAndScrape() {
  try {
    // Fetch the sitemap
    const sitemapResponse = await axios.get(sitemapUrl);
    const sitemapData = sitemapResponse.data;

    // Parse the XML sitemap
    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });
    const parsedSitemap = await parser.parseStringPromise(sitemapData);

    // Extract URLs
    const urls = parsedSitemap.urlset.url.map((urlEntry) => urlEntry.loc);
    console.log("Extracted URLs from sitemap:", urls);

    // Loop through URLs and scrape each one
    for (const url of urls) {
      await fetchFacebookData(url);
    }
  } catch (error) {
    console.error("Error processing sitemap:", error);
  }
}

async function fetchFacebookData(url) {
  const endpoint = `https://graph.facebook.com/v12.0/?id=${encodeURIComponent(
    url
  )}&scrape=true&access_token=${accessToken}`;
  console.log("Request URL:", endpoint);
  try {
    const response = await axios.post(endpoint);
    console.log("Scraped URL:", url, "Response:", response.data);
  } catch (error) {
    console.error(
      "Failed to scrape URL:",
      url,
      error.response ? error.response.data : error.message
    );
  }
}

// Start the process
fetchSitemapAndScrape();
