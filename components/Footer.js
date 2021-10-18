import { Box, Center, Flex, Link, Text, VStack, Stack } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Flex
			as="footer"
			flexDirection={["column", "row"]}
			alignItems="center"
			justifyContent="center"
			m="auto"
			py={["6", "8"]}
			px="3"
			w="100%"
			h="100%"
			borderTop=" 1px solid"
			borderColor="gray.700"
		>
			<VStack
				alignItems={["center", "flex-start"]}
				justifyContent="space-evenly"
				textAlign={["center", "left"]}
				w={["90%", "45%"]}
				m={["3", "0"]}
			>
				<Center>
					<Text>
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
						{". "}Hosted on{" "}
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
				</Center>

				<Center>
					<Text>
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
				</Center>
			</VStack>

			<Stack
				direction="column"
				alignItems={["center", "flex-end"]}
				m={["3", "0"]}
			>
				<Text fontWeight="medium">© 2021—present Ilham Bara.</Text>
				<Text fontWeight="medium" textColor="gray.400">
					version-3.05
				</Text>
			</Stack>
		</Flex>
	);
};
