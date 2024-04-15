const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

interface WebPageSchema {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  isPartOf: {
    "@type": string;
    name: string;
    url: string;
  };
  about: {
    "@type": string;
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      item: {
        "@type": string;
        name: string;
      };
    }>;
  };
}

const indexSchemaGPTs: WebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `https://${siteUrl}/gpts`,
  name: "The Wise Duck Dev GPTs | Explore Leading GPT Categories for Web and Mobile Development",
  description:
    "Discover The Wise Duck Dev's curated GPTs, specializing in frontend, backend, database, design, framework, productivity, blockchain, cybersecurity, CMS, and automation. Elevate your web development with our tailored GPT expertise.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "The Wise Duck Dev GPTs",
    url: `https://${siteUrl}`,
  },
  about: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@type": "Thing", name: "Frontend Collection" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@type": "Thing", name: "Design Collection" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: { "@type": "Thing", name: "Backend Collection" },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: { "@type": "Thing", name: "Database Collection" },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: { "@type": "Thing", name: "Framework Collection" },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: { "@type": "Thing", name: "CMS Collection" },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: { "@type": "Thing", name: "Productivity Collection" },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: { "@type": "Thing", name: "Blockchain Collection" },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: { "@type": "Thing", name: "Automation Collection" },
      },
      {
        "@type": "ListItem",
        position: 10,
        item: { "@type": "Thing", name: "Cybersecurity Collection" },
      },
    ],
  },
};

export default indexSchemaGPTs;
