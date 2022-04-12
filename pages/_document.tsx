import { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <meta name="author" content="Jonas Claes" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
