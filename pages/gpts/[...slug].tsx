import { v4 as uuidv4 } from "uuid";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Categories_Type from "../../types/GPTs_Categories_Type";
import GPTs_Type from "../../types/GPTs_Type";
import Header from "../../components/Header/Header";
import GPTs_Card from "../../components/GPTs_Card/GPTs_Card";
import GPTS_Card_Type from "../../types/GPTs_Card_Type";
const Footer = dynamic(() => import("../../components/Footer/Footer"));
import classes from "./slug.module.scss";

interface PageData {
  type: "category" | "gpt";
  category?: GPTs_Categories_Type;
  gpts?: GPTS_Card_Type[];
  gpt?: GPTs_Type;
}

export default function GPTsSlug() {
  const router = useRouter();
  const { slug } = router.query;
  const { activeLanguage } = useLanguage();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const [categoryData, setCategoryData] = useState<GPTS_Card_Type[]>([]);
  const [gptsData, setGptsData] = useState<GPTS_Card_Type[]>([]);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("pageData", pageData);
  console.log("Active Language:", activeLanguage);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug || !Array.isArray(slug) || !activeLanguage) return;

      const basePath = "/docs/GPTs/";
      // Use activeLanguage to determine which part of the JSON to fetch
      const categoriesRes = await fetch(`${basePath}gpts_categories.json`);
      const categoriesJson = await categoriesRes.json();

      const languageData = categoriesJson[activeLanguage]; // Access data using activeLanguage ('EN' or 'FR')

      if (slug.length === 1) {
        // Fetching category data based on slug
        const categoryData = languageData.find((category) =>
          category.link.endsWith(slug[0])
        );

        if (!categoryData) {
          console.error("Category not found");
          return;
        }

        const gptsRes = await fetch(`${basePath}gpts_test.json`);
        const gptsJson = await gptsRes.json();
        const relatedGpts = gptsJson[activeLanguage].filter((gpt) =>
          gpt.category.includes(slug[0])
        );

        setPageData({
          type: "category",
          category: categoryData,
          gpts: relatedGpts,
        });
      } else {
        // Fetching specific GPT data
        const gptsRes = await fetch(`${basePath}gpts_test.json`);
        const gptsJson = await gptsRes.json();
        const gptData = gptsJson[activeLanguage].find((gpt) =>
          gpt.path.endsWith(`${slug[0]}/${slug[1]}`)
        );

        setPageData({
          type: "gpt",
          gpt: gptData,
        });
      }
    };

    fetchData();
  }, [slug, activeLanguage]); // Include activeLanguage in the dependency array

  if (!pageData) return <div>Loading...</div>;

  // Prevent the default anchor tag behavior and use Next.js router for navigation
  const handleReturnPageGPTs = (e) => {
    e.preventDefault(); // Prevent the default anchor action
    const homepagePath = activeLanguage === "FR" ? "/fr/gpts" : "/gpts";
    router.push(homepagePath);
  };

  const translation: TranslationsType = {
    button: {
      EN: "All GPTs",
      FR: "Tous les GPTs",
    },
    buttonRun: {
      EN: "Run",
      FR: "Exécuter",
    },
  };

  const categoriesSchemaTemplate = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://${siteUrl}/gpts/${pageData.category?.category}`,
    name: pageData.category?.meta_title_page
      ? pageData.category.meta_title_page
      : "",
    description: pageData.category?.meta_description_page
      ? pageData.category.meta_description_page
      : "",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "The Wise Duck Dev GPTs",
      url: `https://${siteUrl}`,
    },
  };

  // Render the page based on the fetched data
  return (
    <>
      {/* HEAD TAG CATEGORIES */}
      {pageData.type === "category" && pageData.category && (
        <Head>
          <title>{pageData.category.meta_title_page}</title>
          <meta
            name="description"
            content={pageData.category.meta_description_page}
          />
          <meta name="keywords" content={pageData.category.meta_keywords} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageData.category.og_title} />
          <meta
            property="og:description"
            content={pageData.category.og_description}
          />
          <meta
            property="og:url"
            content={`https://${siteUrl}/gpts/${pageData.category.category}}`}
          />
          <meta
            property="og:image"
            content={`https://${siteUrl}${pageData.category.image}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wiseduckdev" />
          <meta
            name="twitter:title"
            content={pageData.category.twitter_title}
          />
          <meta
            name="twitter:description"
            content={pageData.category.twitter_description}
          />
          <meta
            name="twitter:image"
            content={`https://${siteUrl}${pageData.category.image}`}
          />
          {siteUrl && (
            <>
              <link
                rel="alternate"
                hrefLang="en"
                href={`https://${siteUrl}/gpts/${pageData.category.category}`}
              />
              <link
                rel="alternate"
                hrefLang="fr"
                href={`https://${siteUrl}/fr/gpts/${pageData.category.category}`}
              />
            </>
          )}
          <link rel="canonical" href={`https://${siteUrl}`} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(categoriesSchemaTemplate),
            }}
          />
        </Head>
      )}
      {/* HEAD TAG GPT */}
      {pageData.type === "gpt" && pageData.gpt && (
        <Head>
          <title>
            The Wise Duck Dev GPTs | Explore Leading GPT Categories for Web and
            Mobile Development
          </title>
          <meta
            name="description"
            content="Discover The Wise Duck Dev's curated GPTs, specializing in frontend, backend, database, design, framework, productivity, blockchain, cybersecurity, CMS, and automation. Elevate your web development with our tailored GPT expertise."
          />
          <meta
            name="keywords"
            content="GPT, The Wise Duck Dev, Frontend Development, Backend Solutions, Database Management, Design Integration, Development Frameworks, Productivity Enhancement, Blockchain Innovation, Cybersecurity, Content Management Systems, Automation, Web Development, AI Integration, Technology Solutions"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="The Wise Duck Dev GPTs | Gateway to Specialized GPT Development"
          />
          <meta
            property="og:description"
            content="Step into the world of specialized GPT development with The Wise Duck Dev. Explore categories from frontend to blockchain and automation. Tailored AI solutions for robust web development."
          />
          <meta property="og:url" content={`https://${siteUrl}/gpts`} />
          <meta
            property="og:image"
            content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wiseduckdev" />
          <meta
            name="twitter:title"
            content="The Wise Duck Dev GPTs | Specialized GPT Development"
          />
          <meta
            name="twitter:description"
            content="Join The Wise Duck Dev in exploring specialized GPTs for every development need, from frontend to CMS and beyond. Dive into a world where AI meets innovation in web development."
          />
          <meta
            name="twitter:image"
            content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
          />
          {siteUrl && (
            <>
              <link
                rel="alternate"
                hrefLang="en"
                href={`https://${siteUrl}/gpts`}
              />
              <link
                rel="alternate"
                hrefLang="fr"
                href={`https://${siteUrl}/fr/gpts`}
              />
            </>
          )}
          <link rel="canonical" href={`https://${siteUrl}`} />
          {/* <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(indexSchemaGPTs),
            }}
          /> */}
        </Head>
      )}

      <Header />

      {/* CATEGORIES PAGE TEMPLATE */}
      {pageData.type === "category" && pageData.category && (
        <main className={classes.mainContainer}>
          <section className={classes.topContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.title}>{pageData.category.title}</h1>
              <h2 className={classes.subtitle}>{pageData.category.subtitle}</h2>

              <p className={classes.description}>
                {pageData.category.description}
              </p>
            </div>
            <div className={classes.imageContainer}>
              <img
                src={pageData.category.image}
                alt={pageData.category.alt}
                className={classes.image}
              />
            </div>
          </section>

          <section className={classes.gptsContainer}>
            <h2 className={classes.subtitleBold}>GPTs</h2>
            <div
              className={
                pageData.gpts?.length === 1
                  ? classes.cardsContainer2
                  : classes.cardsContainer
              }
            >
              {pageData.gpts &&
                pageData.gpts.map((gpt) => (
                  <GPTs_Card
                    key={uuidv4()}
                    title={gpt.title}
                    image={gpt.image}
                    alt={gpt.alt}
                    path={gpt.path}
                    card_description={gpt.card_description}
                    category={gpt.category}
                    results={pageData.gpts?.length ?? 0}
                  />
                ))}
            </div>
            <div className={classes.buttonContainer}>
              <button onClick={handleReturnPageGPTs} className={classes.button}>
                {translation.button[activeLanguage]}
              </button>
            </div>
          </section>
        </main>
      )}
      {/* GPTS PAGE TEMPLATE */}
      {pageData.type === "gpt" && pageData.gpt && (
        <main className={classes.mainContainer}>
          <div className={classes.topContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.title}>{pageData.gpt.title}</h1>
              <h2 className={classes.subtitle}>{pageData.gpt.subtitle}</h2>

              <p className={classes.description}>
                {pageData.gpt.page_description}
              </p>
              <h2 className={classes.subtitleBold}>Modes</h2>
              {pageData.gpt && (
                <ul>
                  {Object.entries(pageData.gpt.modes).map(
                    ([key, description]) => (
                      <li key={key}>
                        <strong>{key}: </strong> {description}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <div className={classes.imageContainer}>
              <img
                src={pageData.gpt.image}
                alt={pageData.gpt.alt}
                className={classes.image}
              />
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <button onClick={handleReturnPageGPTs} className={classes.button}>
              {translation.button[activeLanguage]}
            </button>
            <button
              onClick={handleReturnPageGPTs}
              className={classes.buttonRun}
            >
              {translation.buttonRun[activeLanguage]}
            </button>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}
