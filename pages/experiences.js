import Head from "next/head";
import NextLink from "next/link";
import { ExpCard } from "@/components/cards/ExpCard";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences | Next Portfolio</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          Experiences
        </Heading>
      </Box>

      <ExpCard />

      <Flex w="100%" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link
            fontSize="xl"
            fontWeight="semibold"
            my={4}
            mx={3}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            &larr; Home
          </Link>
        </NextLink>
      </Flex>
    </>
  );
}
