import { Box, Container, Flex } from "@chakra-ui/react";
import Favicon from "./Favicon";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
	return (
		<Box bgColor="bgMain" minH="100vh">
			<Favicon />

			<Container minH="50vh" maxW={["lg", "3xl"]} centerContent>
				<Flex
					as="main"
					py={12}
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					{children}
				</Flex>

				<Footer />
			</Container>
		</Box>
	);
};
