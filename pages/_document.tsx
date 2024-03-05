import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

interface MyDocumentProps extends DocumentInitialProps {
  siteUrl?: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, siteUrl: process.env.NEXT_PUBLIC_SITE_URL };
  }
  render() {
    const { siteUrl } = this.props;

    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "Person",
      name: "Yannick Le Guennec",
      jobTitle:
        "Full Stack JS Web and Web Mobile Developer Specialized in React",
      email: "wiseduckdev@gmail.com",
      url: "https://wiseduckdev.com",
      image: "https://wiseduckdev.com/public/images/fake_logo.png",
      alumniOf: "O'clock",
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
        "JavaScript",
        "React",
        "React-router-dom",
        "TypeScript",
        "Mantine UI",
        "CSS/SASS",
        "Axios",
        "Day.js",
        "Vitest",
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
            content="Led by Yannick Le Guennec, The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
          />
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaOrgJSONLD),
            }}
          />
          {/* Autres balises meta et liens ici */}
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
