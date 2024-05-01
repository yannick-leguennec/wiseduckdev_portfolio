// const axios = require("axios");
// const xml2js = require("xml2js");
// const fs = require("fs").promises;
// const dotenv = require("dotenv");

// dotenv.config();

// async function loadUrlsFromSitemap(filePath: string): Promise<string[]> {
//   try {
//     const data = await fs.readFile(filePath, "utf8");
//     const result = await xml2js.parseStringPromise(data);
//     const urls: string[] = result.urlset.url.map((u: any) => u.loc[0]);
//     return urls.filter(
//       (url) =>
//         url.startsWith("https://wiseduckdev.com") &&
//         !url.startsWith("https://wiseduckdev.com/fr")
//     );
//   } catch (error) {
//     console.error("Error loading or parsing sitemap:", error);
//     return [];
//   }
// }

// async function submitUrlsToBing(urls: string[]): Promise<void> {
//   const apiKey = process.env.BING_API_KEY;
//   const keyLocation = `https://wiseduckdev.com/${apiKey}.txt`; // Ensure you have this key file accessible
//   if (!apiKey) {
//     console.error("BING_API_KEY is not set in the environment.");
//     return;
//   }

//   const endpoint = "https://api.indexnow.org";
//   const body = {
//     host: "wiseduckdev.com",
//     key: apiKey,
//     keyLocation: keyLocation,
//     urlList: urls,
//   };

//   try {
//     const response = await axios.post(endpoint, body, {
//       headers: { "Content-Type": "application/json; charset=utf-8" },
//     });
//     console.log("Bing API Response:", response.data);
//   } catch (error) {
//     console.error("Failed to submit URLs to Bing:", error);
//     if (error.response) {
//       console.log(error.response.data); // Log more detailed error info
//     }
//   }
// }

// async function index_now() {
//   const urls = await loadUrlsFromSitemap("./public/sitemap.xml");
//   if (urls.length > 0) {
//     await submitUrlsToBing(urls);
//   } else {
//     console.log("No URLs to submit.");
//   }
// }

// index_now();
