import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components/layouts/Layout";
import "@fontsource/noto-sans";
import "@fontsource/source-sans-pro";
import customTheme from "../styles/theme";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={router.route}
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0, y: -25 },
            enter: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 25 },
          }}
        >
          <Layout router={router}>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
