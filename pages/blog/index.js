import NextLink from "next/link";
import Head from "next/head";
import { Box, Heading, Text, Link, VStack, HStack, Flex, Badge, useColorModeValue } from "@chakra-ui/react";

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
  const badgeVariant = useColorModeValue("solid", "subtle");
  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <>
      <Head>
        <title>Blog | Next Portfolio</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          Blog
        </Heading>
      </Box>

      <VStack w="100%" spacing={6}>
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
                bgColor={bgColor}
                border="1px"
                borderColor="inherit"
                borderRadius="6px"
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  borderColor: "blue.400",
                }}
              >
                <Heading as="h3" fontSize={["xl", "2xl"]} textColor={linkColor} lineHeight={1.6}>
                  {post.title}
                </Heading>
                <Text fontSize={["sm", "md"]} textColor={textColor} my={4}>
                  {postDate}
                </Text>
                <HStack w="100%" h="100%" spacing={3}>
                  {post.tag_list.map((tag) => (
                    <Badge key={tag} py={0.5} px={1} letterSpacing="0.5px" colorScheme="gray" variant={badgeVariant}>
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </NextLink>
          );
        })}
      </VStack>

      <Flex alignSelf="flex-end">
        <Box fontSize="xl" fontWeight="semibold" m={4} cursor="pointer" _hover={{ textDecoration: "underline" }}>
          <NextLink href="/">&larr; Home</NextLink>
        </Box>
      </Flex>
    </>
  );
}
