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
          <meta charSet="UTF-8" />
          <meta name="author" content="The Wise Duck Dev" />
          <link
            rel="icon"
            href={`https://${siteUrl}/favicon.ico`}
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`https://${siteUrl}/images/favicons/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/images/favicons/favicon-chrome-192x192.png`}
            type="image/png"
            sizes="192x192"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/images/favicons/favicon-chrome-96x96.png`}
            type="image/png"
            sizes="96x96"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/images/favicons/favicon-chrome-48x48.png`}
            type="image/png"
            sizes="48x48"
          />
          <link
            rel="shortcut icon"
            href={`https://${siteUrl}/images/favicons/favicon-chrome-48x48.png`}
            type="image/png"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/images/favicons/favicon-32x32.png`}
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href={`https://${siteUrl}/images/favicons/favicon-16x16.png`}
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="android-chrome"
            sizes="192x192"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/android-chrome-192x192.png`}
          />
          <link
            rel="android-chrome"
            sizes="512x512"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/android-chrome-512x512.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/apple-icon-180x180.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/apple-icon-152x152.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/apple-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            type="image/png"
            href={`https://${siteUrl}/images/favicons/apple-icon-76x76.png`}
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
