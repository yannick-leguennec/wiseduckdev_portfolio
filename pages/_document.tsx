import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

// MyDocumentProps interface
interface MyDocumentProps extends DocumentInitialProps {
  siteUrl?: string;
}

// MyDocument class
class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, siteUrl: process.env.NEXT_PUBLIC_SITE_URL };
  }
  render() {
    // Get the siteUrl from the props
    const { siteUrl } = this.props;

    // Schema.org JSON-LD
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "Person",
      name: "The Wise Duck Dev",
      jobTitle:
        "Full Stack JS Web and Web Mobile Developer Specialized in React",
      email: "wiseduckdev@gmail.com",
      url: "https://wiseduckdev.com",
      image: "https://wiseduckdev.com/public/images/fake_logo.png",
      alumniOf: "O'clock and HEC Montreal",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional title",
          educationalLevel:
            "Professional title in web and web mobile development",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Ministry in charge of Employment, DGEFP",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "OpenClassrooms, Udemy, ANSSI, Domestika Certifications",
          description:
            "A series of professional certifications in development, blockchain, systems and networks, cybersecurity, and design.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "HEC Montréal Diploma in Entrepreneurship and Business Creation",
          educationalLevel: "Diploma",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "EducationalOrganization",
            name: "HEC Montreal",
          },
          award: "First of its promotion",
        },
      ],
      memberOf: {
        "@type": "Organization",
        name: "The Wise Duck Dev",
        description:
          "Led by Yannick Le Guennec, The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React.",
        url: "https://wiseduckdev.com",
        logo: "https://wiseduckdev.com/public/images/fake_logo.png",
        sameAs: "https://github.com/yannick-leguennec",
      },
      workPortfolio: "https://familyflow.up.railway.app/",
      skill: [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "React",
        "React-router-dom",
        "TypeScript",
        "Mantine UI",
        "Axios",
        "Day.js",
        "Vitest",
      ],
      knowsLanguage: ["French", "English", "Spanish"],
      knowsAbout: [
        "Web development",
        "Web mobile development",
        "Blockchain",
        "Systems and networks",
        "Cybersecurity",
        "Design",
        "Entrepreneurship",
        "Business creation",
      ],
      knowsTechnologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "React-router-dom",
        "Redux",
        "Next.js",
        "Mantine UI",
        "Tailwind CSS",
        "Bootstrap",
        "Vitest",
        "SQL",
        "Markdown",
        "Node.js",
        "Express",
        "API REST",
        "Sequelize",
        "Swagger",
        "JWT",
        "Postman",
        "Test HTTP",
        "PostgreSQL",
        "pgAdmin",
        "Sqitch",
        "Looping",
        "Facker",
        "Docker",
        "Git",
        "GitHub",
        "Figma",
        "Canva",
        "Adobe Photoshop",
        "Adobe Express",
        "Tldraw",
        "Excalidraw",
        "Slack",
        "Trello",
        "Notion",
        "Microsoft Office",
        "Google Suite",
        "Discord",
        "Zoom",
        "Google Meet",
        "Microsoft Teams",
        "Miro",
        "GitHub Projects",
        "ChatGPT - openAI",
        "GPT-4 - openAI",
        "Claude - Anthropic",
        "Gemini - Google",
        "DALL-E 3 - openAI",
        "Midjourney",
        "Make",
        "Zapier",
        "Google Console",
      ],
    };

    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
          />
          <meta
            name="keywords"
            content="The Wise Duck Dev, Full Stack JS Developer, JavaScript, React Developer, Web Mobile Developer, Next.js, TypeScript, Web Development Canada, Web Development USA, React Development, Full Stack JS Solutions, Innovative Web Solutions"
          />
          <meta name="author" content="The Wise Duck Dev" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="The Wise Duck Dev - Full Stack JS Developer specialized in React"
          />
          <meta
            property="og:description"
            content="The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
          />
          <meta property="og:url" content="https://wiseduckdev.com" />
          <meta
            property="og:image"
            content="https://wiseduckdev.com/public/images/metadata_profil_picture.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />

          {siteUrl && (
            <>
              <link
                rel="alternate"
                hrefLang="en"
                href={`${siteUrl}${this.props.__NEXT_DATA__.page}`}
              />
              <link
                rel="alternate"
                hrefLang="fr"
                href={`${siteUrl}/fr${this.props.__NEXT_DATA__.page}`}
              />
            </>
          )}

          <link
            rel="canonical"
            href={`https://www.wiseduckdev.com${this.props.__NEXT_DATA__.page}`}
          />
          <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/favicons/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="/favicons/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
          />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaOrgJSONLD),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
