import NextLink from "next/link";
import Head from "next/head";
import { ExpCard } from "@/components/cards/ExpCard";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences | Next Portfolio</title>
      </Head>

      <Box mb={10}>
        <Heading as="h1" fontSize="4xl">
          Experiences
        </Heading>
      </Box>

      <Box bgColor="#12151d" borderRadius="5px">
        <ExpCard />
      </Box>

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
