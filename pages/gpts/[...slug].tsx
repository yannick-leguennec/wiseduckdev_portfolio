import { v4 as uuidv4 } from "uuid";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Categories_Type from "../../types/GPTs_Categories_Type";
import GPTs_Type from "../../types/GPTs_Type";
import Header from "../../components/Header/Header";
import GPTs_Card from "../../components/GPTs_Card/GPTs_Card";
import GPTS_Card_Type from "../../types/GPTs_Card_Type";
const Footer = dynamic(() => import("../../components/Footer/Footer"));
import { FacebookShareButton, FacebookIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import { EmailShareButton, EmailIcon } from "next-share";
import { TelegramShareButton, TelegramIcon } from "next-share";
import classes from "../../styles/slug.module.scss";

// Define the expected structure for the initial data uploaded
interface initialPageData {
  type: "category" | "gpt";
  category?: GPTs_Categories_Type;
  gpts?: GPTS_Card_Type[];
  gpt?: GPTs_Type;
}

// Define the expected structure for the page data
interface PageData {
  type: "category" | "gpt";
  category?: GPTs_Categories_Type;
  gpts?: GPTS_Card_Type[];
  gpt?: GPTs_Type;
}

// Define the expected structure for your paths
interface StaticPath {
  params: {
    slug: string[];
  };
  locale: string;
}

// Props type
interface GPTsSlugProps {
  initialPageData: initialPageData;
}

// Define the Language type
type Language = "EN" | "FR";

// This is a helper to read JSON files
const readJsonFile = (filePath) => {
  const json = fs.readFileSync(filePath, "utf8");
  return JSON.parse(json);
};

// Define the expected structure for the initial data uploaded
export default function GPTsSlug({ initialPageData }) {
  // Custom hook to manage the loading state
  const { setLoading } = useLoader();
  // router hook
  const router = useRouter();
  //  Recover the slug from the router
  const { slug } = router.query;
  // Custom hook to manage the language state
  const { activeLanguage } = useLanguage();
  // State to manage the page data
  const [pageData, setPageData] = useState<PageData | null>(initialPageData);
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Determine the GPTs link based on the active language
  const portfolioLink = activeLanguage === "FR" ? `/fr` : `/`;

  // Set loading to false when the component mounts
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Fetch data when the slug or activeLanguage changes
  useEffect(() => {
    const fetchData = async () => {
      if (!slug || !Array.isArray(slug) || !activeLanguage) return;

      const basePath = "/docs/GPTs/";
      // Use activeLanguage to determine which part of the JSON to fetch
      const categoriesRes = await fetch(`${basePath}gpts_categories.json`);
      const categoriesJson = await categoriesRes.json();
      // Access data using activeLanguage ('EN' or 'FR')
      const languageData = categoriesJson[activeLanguage];

      if (slug.length === 1) {
        // Fetching category data based on slug
        const categoryData = languageData.find((category) =>
          category.path.endsWith(slug[0])
        );

        if (!categoryData) {
          console.error("Category not found");
          return;
        }

        // Fetching related GPTs based on category
        const gptsRes = await fetch(`${basePath}gpts_test.json`);
        const gptsJson = await gptsRes.json();
        const relatedGpts = gptsJson[activeLanguage].filter((gpt) =>
          gpt.category.includes(slug[0])
        );

        // Update the page data
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

        // Update the page data
        setPageData({
          type: "gpt",
          gpt: gptData,
        });
      }
    };

    // Call the fetchData function
    fetchData();
  }, [slug, activeLanguage]);

  // Button component bringing the user to the search section
  const RedirectToSearchSectionButton = () => {
    return (
      <Link href="/gpts#search" passHref className={classes.button}>
        {translation.button[activeLanguage]}
      </Link>
    );
  };

  // Define the translations
  const translation: TranslationsType = {
    button: {
      EN: "All GPTs",
      FR: "Tous les GPTs",
    },
    buttonRun: {
      EN: "Run",
      FR: "Exécuter",
    },
    share: {
      EN: "Share ",
      FR: "Partager ",
    },
    promo: {
      EN: "Want to know more about The Wise Duck Dev ? Click ",
      FR: "Vous voulez en savoir plus sur The Wise Duck Dev ? Cliquez ",
    },
    tips: {
      EN: "Need some prompting tips ?",
      FR: "Besoin de quelques conseils pour vos prompts ?",
    },
  };

  // Define the schema templates for categories page
  const categoriesSchemaTemplate = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://${siteUrl}/gpts/${pageData?.category?.category}`,
    name: pageData?.category?.meta_title_page
      ? pageData.category.meta_title_page
      : "",
    description: pageData?.category?.meta_description_page
      ? pageData.category.meta_description_page
      : "",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "The Wise Duck Dev GPTs",
      url: `https://${siteUrl}`,
    },
    about: {
      "@type": "ItemList",
      itemListElement: [
        pageData?.gpts?.map((gpt, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@type": "Thing", name: gpt.title },
        })),
      ],
    },
  };

  // Define the schema templates for GPT page
  const gptSchemaTemplate = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://${siteUrl}${pageData?.gpt?.path}`,
    name: pageData?.gpt?.meta_title_page ? pageData.gpt.meta_title_page : "",
    description: pageData?.gpt?.meta_description_page
      ? pageData.gpt.meta_description_page
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
      {pageData?.type === "category" && pageData.category && (
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
            content={`https://${siteUrl}/gpts/${pageData.category.category}`}
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
      {pageData?.type === "gpt" && pageData.gpt && (
        <Head>
          <title>{pageData.gpt.meta_title_page}</title>
          <meta
            name="description"
            content={pageData.gpt.meta_description_page}
          />
          <meta name="keywords" content={pageData.gpt.meta_keywords} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageData.gpt.og_title} />
          <meta
            property="og:description"
            content={pageData.gpt.og_description}
          />
          <meta
            property="og:url"
            content={`https://${siteUrl}/gpts/${pageData.gpt.og_url}`}
          />
          <meta
            property="og:image"
            content={`https://${siteUrl}${pageData.gpt.og_image}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wiseduckdev" />
          <meta name="twitter:title" content={pageData.gpt.twitter_title} />
          <meta
            name="twitter:description"
            content={pageData.gpt.twitter_description}
          />
          <meta
            name="twitter:image"
            content={`https://${siteUrl}${pageData.gpt.twitter_image}`}
          />
          <meta
            name="twitter:image:alt"
            content={pageData.gpt.twitter_image_alt}
          />
          {siteUrl && (
            <>
              <link
                rel="alternate"
                hrefLang="en"
                href={`https://${siteUrl}${pageData.gpt.path}`}
              />
              <link
                rel="alternate"
                hrefLang="fr"
                href={`https://${siteUrl}/fr${pageData.gpt.path}`}
              />
            </>
          )}
          <link rel="canonical" href={`https://${siteUrl}`} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(gptSchemaTemplate),
            }}
          />
        </Head>
      )}

      <Header />

      {/* CATEGORIES PAGE TEMPLATE */}
      {pageData?.type === "category" && pageData.category && (
        <main className={classes.mainContainer}>
          <section className={classes.topContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.title}>{pageData.category.title}</h1>
              <h2 className={classes.subtitle}>{pageData.category.subtitle}</h2>

              <p className={classes.description}>
                {pageData.category.description}
              </p>

              <div className={classes.socialButtonContainerCategories}>
                <h2 className={[classes.subtitleBold, classes.hide].join(" ")}>
                  {translation.share[activeLanguage]}
                </h2>
                <FacebookShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  quote={pageData.category.meta_description_page}
                  hashtag={pageData.category.hashtag}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  appId={""}
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
                <WhatsappShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  title={pageData.category.meta_title_page}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  title={pageData.category.twitter_description}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TelegramShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  title={pageData.category.meta_title_page}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>

                <EmailShareButton
                  url={`https://${siteUrl}/gpts/${pageData.category.category}`}
                  subject={pageData.category.meta_title_page}
                  body={pageData.category.meta_description_page}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
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
                pageData.gpts
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((gpt) => (
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
              <RedirectToSearchSectionButton />
            </div>
            <p className={classes.promoText}>
              {translation.promo[activeLanguage]}{" "}
              <Link
                href={portfolioLink}
                className={`${classes.portfolioLinkOrange}`}
              >
                {" "}
                {activeLanguage === "FR" ? "ici" : "here"}
              </Link>{" "}
            </p>
          </section>
        </main>
      )}
      {/* GPTS PAGE TEMPLATE */}
      {pageData?.type === "gpt" && pageData.gpt && (
        <main className={classes.mainContainer}>
          <div className={classes.topContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.title}>{pageData.gpt.title}</h1>
              <h2 className={classes.subtitle}>{pageData.gpt.subtitle}</h2>

              <p className={classes.description}>
                {pageData.gpt.page_description}
              </p>
              <h2 className={classes.subtitleBold}>Modes</h2>
              <div className={classes.modesContainer}>
                {pageData.gpt && (
                  <ul>
                    {Object.entries(pageData.gpt.modes).map(
                      ([key, description]) => (
                        <li key={key}>
                          <strong>{key}: </strong> {String(description)}
                        </li>
                      )
                    )}
                  </ul>
                )}
                <div className={classes.tipsContainer}>
                  <Link
                    href={`/gpts/prompting-tips`}
                    className={classes.tipsText}
                  >
                    {" "}
                    {translation.tips[activeLanguage]}
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <img
                src={pageData.gpt.image}
                alt={pageData.gpt.alt}
                className={classes.image}
              />
            </div>
          </div>
          <div className={classes.downContainer}>
            <div className={classes.socialButtonContainerGPTs}>
              <h2 className={[classes.subtitleBold, classes.hide].join(" ")}>
                {translation.share[activeLanguage]}
              </h2>
              <FacebookShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                quote={pageData.gpt.meta_description_page}
                hashtag={pageData.gpt.hashtag}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                appId={""}
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
              <WhatsappShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                title={pageData.gpt.meta_title_page}
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TwitterShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                title={pageData.gpt.twitter_description}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TelegramShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                title={pageData.gpt.meta_title_page}
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <EmailShareButton
                url={`https://${siteUrl}/gpts${pageData.gpt.path}`}
                subject={pageData.gpt.meta_title_page}
                body={pageData.gpt.meta_description_page}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
            <div className={classes.buttonContainer}>
              <RedirectToSearchSectionButton />
              <Link
                href={pageData.gpt.openAi_link}
                passHref
                className={classes.buttonRun}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translation.buttonRun[activeLanguage]}
              </Link>
            </div>
          </div>
          <p className={classes.promoText}>
            {translation.promo[activeLanguage]}{" "}
            <Link
              href={portfolioLink}
              className={`${classes.portfolioLinkOrange}`}
            >
              {" "}
              {activeLanguage === "FR" ? "ici" : "here"}
            </Link>{" "}
          </p>
        </main>
      )}

      <Footer />
      <SpeedInsights />
    </>
  );
}

export const getStaticProps: GetStaticProps<GPTsSlugProps> = async ({
  params,
  locale,
}) => {
  const fs = require("fs");
  const path = require("path");
  // Ensure slug is treated as string[]
  const slug = params?.slug as string[];
  // Convert the locale to your Language type
  const lang: Language = locale === "fr" ? "FR" : "EN";

  // Define the path to your JSON files
  const basePath = path.join(process.cwd(), "public/docs/GPTs");
  const categoriesFilePath = path.join(basePath, "gpts_categories.json");
  const gptsFilePath = path.join(basePath, "gpts_test.json");

  // Function to read and parse JSON files
  const readJson = (filePath: string) =>
    JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Read and parse the JSON files
  const categoriesData = readJson(categoriesFilePath)[lang];
  const gptsData = readJson(gptsFilePath)[lang];

  let initialPageData: PageData = {
    type: slug.length === 1 ? "category" : "gpt",
  };

  if (slug.length === 1) {
    // Logic for category pages
    const categoryData = categoriesData.find((category) =>
      category.path.endsWith(slug[0])
    );
    if (!categoryData) {
      return { notFound: true };
    }
    const relatedGpts = gptsData.filter((gpt) =>
      gpt.category.includes(slug[0])
    );
    initialPageData = {
      type: "category",
      category: categoryData,
      gpts: relatedGpts,
    };
  } else {
    // Logic for item pages
    const gptData = gptsData.find((gpt) =>
      gpt.path.endsWith(`${slug[0]}/${slug[1]}`)
    );
    if (!gptData) {
      return { notFound: true };
    }
    initialPageData = { type: "gpt", gpt: gptData };
  }

  return { props: { initialPageData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require("fs");
  const path = require("path");

  // Paths to JSON data
  const basePath = path.join(process.cwd(), "public/docs/GPTs");
  const categoriesFilePath = path.join(basePath, "gpts_categories.json");
  const itemsFilePath = path.join(basePath, "gpts_test.json"); // Assuming this is your items file

  // Function to read and parse JSON files
  const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Reading JSON data
  const categoriesData = readJson(categoriesFilePath);
  const itemsData = readJson(itemsFilePath);

  const uniquePaths = new Set<string>();
  const paths: StaticPath[] = [];

  // Generate paths for categories
  Object.keys(categoriesData).forEach((localeKey) => {
    const locale = localeKey.toLowerCase(); // Convert locale key to lowercase ('en' or 'fr')
    categoriesData[localeKey].forEach((category) => {
      const cleanPath = category.path.startsWith("/")
        ? category.path.slice(1)
        : category.path;
      paths.push({
        params: { slug: [cleanPath] },
        locale,
      });
    });
  });

  Object.keys(itemsData).forEach((localeKey) => {
    const locale = localeKey.toLowerCase();
    itemsData[localeKey].forEach((item) => {
      item.category.forEach((category) => {
        const itemPathSegments = item.path.startsWith("/")
          ? item.path.slice(1).split("/")
          : item.path.split("/");
        const slug =
          itemPathSegments.length > 1
            ? itemPathSegments
            : [category, itemPathSegments[0]];
        const pathKey = `${locale}-${slug.join("/")}`;

        if (!uniquePaths.has(pathKey)) {
          uniquePaths.add(pathKey);
          paths.push({
            params: { slug },
            locale,
          });
        }
      });
    });
  });

  console.log(JSON.stringify(paths, null, 2)); // For debugging

  return {
    paths,
    fallback: "blocking", // or false if you prefer to return a 404 for missing paths
  };
};
