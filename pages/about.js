/* eslint-disable react/no-unescaped-entities */
import NextLink from "next/link";
import Head from "next/head";
import data from "@/data/about.json";
import socials from "@/data/socials.json";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next Portfolio</title>
      </Head>

      <Box mb={10}>
        <Heading as="h1" fontSize="4xl">
          About
        </Heading>
      </Box>

      <Flex
        flexDirection="column"
        bgColor="#12151d"
        p={["6", "12"]}
        borderRadius="5px"
      >
        <Box>
          <Heading as="h3" fontSize="2xl" mb={6}>
            About
          </Heading>
          <Text
            fontSize={["md", "lg"]}
            my={4}
            textColor="gray.300"
            lineHeight={1.8}
          >
            I am a final year student majoring Associate's Degree of Informatics
            Engineering in Electronic Engineering Polytechnic Institute of
            Surabaya (EEPIS). <i className="twa twa-flag-indonesia"></i>
          </Text>
          <Text fontSize={["md", "lg"]} textColor="gray.300" lineHeight={1.8}>
            In most of my time, I contribute to open source projects, explore
            some useful resources, and take any courses to rank up my skills.
            Also working on paid projects if there's an opportunity.{" "}
            <i className="twa twa-man-technologist"></i>
          </Text>
        </Box>

        <Box>
          <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
            gridGap={4}
            mt={10}
          >
            {data.map((skill) => (
              <Box key={skill.id}>
                <Heading as="h5" fontSize="lg" my={4}>
                  {skill.title}
                </Heading>
                <UnorderedList m="unset" textColor="gray.300">
                  {skill.items.map((item) => (
                    <ListItem
                      key={item}
                      listStyleType="none"
                      fontSize="md"
                      my={2}
                    >
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </Grid>
        </Box>

        <Box>
          <Heading as="h3" fontSize="2xl" mt={10} mb={6}>
            Socials
          </Heading>
          <UnorderedList m="unset">
            {socials.map((social) => (
              <ListItem
                key={social.id}
                listStyleType="none"
                my={3}
                textColor="gray.300"
              >
                {social.social} –{" "}
                <Box as="span" textColor="blue.400">
                  <Link href={social.canonical_url} isExternal>
                    {social.slug}
                  </Link>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>

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
