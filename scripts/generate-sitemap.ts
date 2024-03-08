// scripts/generate-sitemap.ts

import fs from "fs";
import { format } from "date-fns";

const domain = "https://wiseduckdev.vercel.app";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/fr</loc>
    <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemap);
