import Head from "next/head";

export const metadata = {
  title: "Page Not Found",
  description:
    "Oops! The page you're looking for can't be found. Explore The Wise Duck Dev for innovative full stack JS web and mobile development solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../public/favicons/favicon.ico" sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
