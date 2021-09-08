import { Flex, Box, Link, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Blogs from "../../styles/Blog.module.css";

export const getStaticPaths = async () => {
	const res = await fetch("https://dev.to/api/articles?username=ilhambara");
	const data = await res.json();

	const paths = data.map((post) => {
		return {
			params: { id: post.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch("https://dev.to/api/articles/" + id);
	const data = await res.json();

	return {
		props: { post: data },
		revalidate: 5, //in seconds
	};
};

const Posts = ({ post }) => {
	const getDate = new Date(post.published_at);
	const displayDate = getDate.toDateString();

	return (
		<>
			<Head>
				<title>{post.title} | Next Portfolio</title>
			</Head>

			<VStack maxW="800px">
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					textAlign="center"
					w="100%"
				>
					<Heading as="h3" px={[4, 8]} lineHeight={1.5}>
						{post.title}
					</Heading>
					<Text mx={4} my={6} textColor="gray.300" opacity={0.8}>
						{displayDate} ・ {post.reading_time_minutes} min read
					</Text>
				</Flex>

				<Box
					className={Blogs.posts__body}
					dangerouslySetInnerHTML={{ __html: post.body_html }}
				/>
			</VStack>

			<Flex alignSelf="flex-end">
				<Link href="/blog" fontSize="xl" fontWeight="semibold" m={4}>
					&larr; Blog
				</Link>
			</Flex>
		</>
	);
};

export default Posts;
