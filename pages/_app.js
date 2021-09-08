import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import "@fontsource/noto-sans";
import "@fontsource/source-sans-pro";

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={customTheme}>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={router.route}
					animate="enter"
					exit="exit"
					initial="initial"
					variants={{
						initial: { opacity: 0, y: -25 },
						enter: { opacity: 1, y: 0 },
						exit: { opacity: 0, y: 25 },
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</motion.div>
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default MyApp;
