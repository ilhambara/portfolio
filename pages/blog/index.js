import NextLink from "next/link";
import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";

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
        {/* exclude first post */}
        {posts.slice(0, -1).map((post) => {
          const getDate = new Date(post.published_at);
          const postDate = getDate.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <NextLink key={post.id} href={"/blog/" + post.id}>
              <Box
                h="100%"
                w="100%"
                p={6}
                bgColor="#12151d"
                border="1px"
                borderColor="inherit"
                borderRadius="6px"
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  borderColor: "blue.400",
                }}
              >
                <Heading
                  as="h3"
                  fontSize={["xl", "2xl"]}
                  textColor="blue.300"
                  lineHeight={1.6}
                >
                  {post.title}
                </Heading>
                <Text fontSize={["lg", "md"]} textColor="gray.400" my={4}>
                  {postDate}
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
            </NextLink>
          );
        })}
      </VStack>

      <Flex alignSelf="flex-end">
        <Box
          fontSize="xl"
          fontWeight="semibold"
          m={4}
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          <NextLink href="/">&larr; Home</NextLink>
        </Box>
      </Flex>
    </>
  );
}
