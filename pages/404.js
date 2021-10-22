import Head from "next/head";
import { VStack, Heading, Link } from "@chakra-ui/react";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404 Not Found| Next Portfolio</title>
			</Head>

			<VStack alignItems="center" justifyContent="center" minH="50vh">
				<Heading as="h1" mb={6}>
					Page Not Found!
				</Heading>
				<Link
					href="/"
					fontSize="xl"
					fontWeight="semibold"
					m={4}
					color="gray.400"
				>
					&larr; Back to Home
				</Link>
			</VStack>
		</>
	);
}
