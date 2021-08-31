import { Layout } from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import "@fontsource/noto-sans";
import "@fontsource/source-sans-pro";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
