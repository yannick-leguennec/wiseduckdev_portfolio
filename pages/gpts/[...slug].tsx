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
  };

  // Render the page based on the fetched data
  return (
    <>
      <Header />

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
            <div className={classes.cardsContainer}>
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
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}
