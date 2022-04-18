import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-0LMH961K0H" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0LMH961K0H');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
