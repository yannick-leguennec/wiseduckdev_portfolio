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

    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="CHxu9HsWoMtZjbPsvHICvOlOyRv_hFYZk5uhVLxXo7o"
          />
          <meta
            name="msvalidate.01"
            content="9C11EB658145B51F44EA72C0B64FEA80"
          />
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
          <meta property="og:url" content={`https://${siteUrl}`} />
          <meta
            property="og:image"
            content={`https://${siteUrl}/images/metadata_profil_picture.webp`}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wiseduckedv" />
          <meta
            name="twitter:title"
            content="The Wise Duck Dev - Full Stack JS Developer specialized in React"
          />
          <meta
            name="twitter:description"
            content="The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
          />
          <meta
            name="twitter:image"
            content="URL_to_image_which_represents_content_of_the_page"
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

          <link
            rel="canonical"
            href={`https://${siteUrl}${this.props.__NEXT_DATA__.page}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`https://${siteUrl}/favicons/apple-touch-icon.png`}
          <link
            rel="icon"
            href={`https://${siteUrl}/favicons/favicon-chrome-192x192.png`}
            type="image/png"
            sizes="192x192"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/favicons/favicon-chrome-96x96.png`}
            type="image/png"
            sizes="96x96"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/favicons/favicon-chrome-48x48.png`}
            type="image/png"
            sizes="48x48"
          />
          <link
            rel="shortcut icon"
            href={`https://${siteUrl}/favicons/favicon-chrome-48x48.png`}
            type="image/png"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/favicons/favicon-32x32.png`}
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/favicons/favicon-16x16.png`}
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="android-chrome"
            sizes="192x192"
            type="image/png"
            href={`https://${siteUrl}/favicons/android-chrome-192x192.png`}
            />
            <link
            rel="android-chrome"
            sizes="512x512"
            type="image/png"
            href={`https://${siteUrl}/favicons/android-chrome-512x512.png`}
            />
            <link rel="apple-touch-icon" sizes="180x180" type="image/png" href={`https://${siteUrl}/favicons/apple-icon-180x180.png`} />
            <link rel="apple-touch-icon" sizes="152x152" type="image/png" href={`https://${siteUrl}/favicons/apple-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="120x120" type="image/png" href={`https://${siteUrl}/favicons/apple-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="76x76" type="image/png" href={`https://${siteUrl}/favicons/apple-icon-76x76.png`} />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
