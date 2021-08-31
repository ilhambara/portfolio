import {
	Box,
	Heading,
	Image,
	Text,
	Link,
	VStack,
	Flex,
	Grid,
} from "@chakra-ui/react";
import Head from "next/head";

const defaultEndpoint = "https://dev.to/api/articles?username=ilhambara";

export const getStaticProps = async () => {
	const res = await fetch(defaultEndpoint);
	const data = await res.json();

	return {
		props: { posts: data },
		revalidate: 5, //in seconds
	};
};

export default function Blog({ posts }) {
	return (
		<>
			<Head>
				<title>Blog | Next Portfolio</title>
			</Head>

			<Box mb={10}>
				<Heading as="h1" fontSize="4xl">
					Blog
				</Heading>
			</Box>

			<Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gridGap={8}>
				{posts.map((post) => {
					return (
						<VStack key={post.id} bgColor="#12151d" borderRadius="5px">
							<Box>
								<Image
									src={post.social_image}
									alt="social image"
									borderRadius="5px 5px 0 0"
								/>
							</Box>

							<Link
								href={"/blog/" + post.id}
								w="100%"
								_hover={{
									textDecoration: "none",
								}}
							>
								<Box w="100%" px={5} py={3}>
									<Heading
										as="h3"
										fontSize={["xl", "lg"]}
										textColor="blue.400"
										lineHeight={1.5}
									>
										{post.title}
									</Heading>
									<Text
										fontSize={["lg", "md"]}
										fontStyle="italic"
										textColor="gray.300"
										my={4}
									>
										<Box as="strong">{post.readable_publish_date}</Box> —{" "}
										{post.tags}
									</Text>
								</Box>
							</Link>
						</VStack>
					);
				})}
			</Grid>

			<Flex alignSelf="flex-end">
				<Link href="/" fontSize="xl" fontWeight="semibold" m={4}>
					&larr; Home
				</Link>
			</Flex>
		</>
	);
}
