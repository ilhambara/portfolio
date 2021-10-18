import {
	Box,
	Heading,
	Text,
	Link,
	VStack,
	HStack,
	Flex,
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

			<VStack maxW="800px" w="100%" spacing={6}>
				{posts.map((post) => {
					const getDate = new Date(post.published_at);
					const postDate = getDate.toLocaleDateString("en-us", {
						year: "numeric",
						month: "long",
						day: "numeric",
					});

					return (
						<Link
							key={post.id}
							href={"/blog/" + post.id}
							w="100%"
							bgColor="#12151d"
							border="1px"
							borderColor="inherit"
							borderRadius="6px"
							_hover={{
								textDecoration: "none",
								borderColor: "blue.400",
							}}
						>
							<Box h="100%" w="100%" p={6}>
								<Heading
									as="h3"
									fontSize={["xl", "2xl"]}
									textColor="blue.300"
									lineHeight={1.6}
								>
									{post.title}
								</Heading>
								<Text
									fontSize={["lg", "md"]}
									fontStyle="italic"
									textColor="gray.400"
									my={4}
								>
									Published at &mdash; {postDate}
								</Text>
								<HStack w="100%" h="100%" spacing={3}>
									{post.tag_list.map((tag) => (
										<Box
											as="span"
											key={tag}
											display="inline-block"
											textColor="gray.300"
											bgColor="gray.700"
											px={3}
											pb={0.5}
											my={2}
											borderRadius="6px"
											fontSize="sm"
											fontWeight="semibold"
										>
											{tag}
										</Box>
									))}
								</HStack>
							</Box>
						</Link>
					);
				})}
			</VStack>

			<Flex alignSelf="flex-end">
				<Link href="/" fontSize="xl" fontWeight="semibold" m={4}>
					&larr; Home
				</Link>
			</Flex>
		</>
	);
}
