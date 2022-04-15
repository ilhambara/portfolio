import Head from "next/head";
import NextLink from "next/link";
import { VStack, Heading, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found | Next Portfolio</title>
      </Head>

      <VStack alignItems="center" justifyContent="center" minH="50vh">
        <Heading as="h1" mb={6}>
          Page Not Found!
        </Heading>
        <NextLink href="/" passHref>
          <Link fontSize="xl" fontWeight="semibold" m={4} color="gray.400">
            &larr; Back to Home
          </Link>
        </NextLink>
      </VStack>
    </>
  );
}
