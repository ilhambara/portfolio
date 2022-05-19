import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components/layouts/Layout";
import customTheme from "../styles/theme";
import "@fontsource/noto-sans";
import "@fontsource/source-sans-pro";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routerChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ChakraProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
