const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const promptingTipsScehma = {
  "@context": "http://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://${siteUrl}/gpts/prompting-tips`,
  },
  headline:
    "Mastering Wise Duck Dev GPTs: Expert Prompting Tips for Devs in Web, Mobile & Blockchain",
  description:
    "Unlock the full potential of over 100 specialized GPTs for web, mobile and blockchain development with the Wise Duck Dev's expert prompting tips. Dive into our comprehensive guide to enhance your development workflow and command Wise Duck Dev GPTs with precision for groundbreaking innovation and efficiency. Start crafting effective prompts today!",
  image: `https://${siteUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp`,
  author: {
    "@type": "Organization",
    name: "The Wise Duck Dev",
    url: `https://${siteUrl}`,
  },
  publisher: {
    "@type": "Organization",
    name: "The Wise Duck Dev",
    logo: {
      "@type": "ImageObject",
      url: `https://${siteUrl}/images/main_logo1.png`,
    },
  },
  datePublished: "2024-03-27",
  dateModified: "2024-03-27",
  inLanguage: "en",
  isAccessibleForFree: "True",
  hasPart: {
    "@type": "WebPageElement",
    isAccessibleForFree: "True",
    cssSelector: ".mainContainer",
  },
};

export default promptingTipsScehma;
