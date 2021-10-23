import { Box, Flex, Link, Text, VStack, Stack } from "@chakra-ui/react";
import socials from "../data/socials.json";

export const Footer = () => {
	return (
		<Flex
			as="footer"
			flexDirection={["column", "row"]}
			alignItems={["center", "flex-start"]}
			justifyContent="space-between"
			py={6}
			px={3}
			w="100%"
			h="100%"
			borderTop=" 1px solid"
			borderColor="gray.700"
			textColor="gray.300"
		>
			<VStack
				alignItems={["center", "flex-start"]}
				textAlign={["center", "left"]}
				w={["100%", "75%"]}
				m={3}
			>
				<Text mt={1} lineHeight={1.8}>
					Made using{" "}
					<Link
						href="https://nextjs.org/"
						textColor="blue.400"
						fontWeight="medium"
						isExternal
					>
						Next.js
					</Link>
					{", "}
					<Link
						href="https://chakra-ui.com/"
						textColor="blue.400"
						fontWeight="medium"
						isExternal
					>
						Chakra UI
					</Link>
					{", "}and API from{" "}
					<Link
						href="https://docs.forem.com/api/"
						textColor="blue.400"
						fontWeight="medium"
						isExternal
					>
						DEV
					</Link>
					{". "} Hosted on{" "}
					<Link
						href="https://vercel.com/"
						textColor="blue.400"
						fontWeight="medium"
						isExternal
					>
						Vercel
					</Link>
					{"."}
				</Text>

				<Text py={2}>
					Code licensed under{" "}
					<Link
						href="https://github.com/ilhambara/nextjs-portfolio/blob/main/LICENSE"
						textColor="blue.400"
						fontWeight="medium"
						isExternal
					>
						MIT License
					</Link>
					{"."}
				</Text>
				<Text fontWeight="medium">
					© 2021—present Ilham Bara.{" "}
					<Box as="span" textColor="gray.400">
						version-3.05
					</Box>
				</Text>
			</VStack>

			<Stack
				direction={["row", "column"]}
				alignItems={["center", "flex-end"]}
				justifyContent="space-evenly"
				textColor="gray.300"
				w={["100%", "25%"]}
				m={3}
			>
				{socials.map((social) => (
					<Link key={social.id} href={social.canonical_url} isExternal>
						{social.social}
					</Link>
				))}
			</Stack>
		</Flex>
	);
};
