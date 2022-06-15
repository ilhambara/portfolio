import NextLink from "next/link";
import NextImage from "next/image";
import Head from "next/head";
import { Flex, Box, Link, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import Blogs from "../../styles/Blog.module.css";
import BackButton from "@/components/buttons/BackButton";
import BlogButtonGroup from "@/components/buttons/blogButtonGroup";

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

export default function Posts({ post }) {
  const getDate = new Date(post.published_at);
  const displayDate = getDate.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");

  return (
    <>
      <Head>
        <title>{post.title} | Next Portfolio</title>
      </Head>

      <VStack spacing={4}>
        <VStack spacing={8} textAlign="center" w="100%" mb={16}>
          <Heading as="h1" lineHeight={1.6}>
            {post.title}
          </Heading>

          <Text textColor={textColor} opacity={0.8}>
            {displayDate} ・ {post.reading_time_minutes} min read
          </Text>

          <BlogButtonGroup canonicalURL={post.canonical_url} />
        </VStack>

        <Box w="full" bgColor="#3a4a5b">
          <NextImage
            width="1128"
            height="600"
            objectFit="contain"
            src={post.social_image}
            alt="dev.to social_image"
            blurDataURL={post.social_image}
            placeholder="blur"
            priority
          />
        </Box>

        <Box
          bgColor={bgColor}
          textColor={textColor}
          className={Blogs.posts__body}
          dangerouslySetInnerHTML={{ __html: post.body_html }}
        />
      </VStack>

      <BackButton backto="/blog" name="Blog" />
    </>
  );
}
