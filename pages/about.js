/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import data from "@/data/about.json";
import socials from "@/data/socials.json";
import { Box, Grid, Heading, Link, ListItem, Text, UnorderedList, useColorModeValue, VStack } from "@chakra-ui/react";
import BackButton from "@/components/buttons/BackButton";

export default function About() {
  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <>
      <Head>
        <title>About | Next Portfolio</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          About
        </Heading>
      </Box>

      <VStack w="full" bgColor={bgColor} p={["6", "12"]} borderRadius="5px" spacing={[8, 16]}>
        <Box w="full">
          <Heading as="h3" fontSize="2xl" mb={6}>
            About
          </Heading>

          <VStack fontSize={["md", "lg"]} textColor={textColor} lineHeight={1.8} spacing={6}>
            <Text>
              I am a final-year student majoring Associate's Degree of Informatics Engineering at Electronic Engineering
              Polytechnic Institute of Surabaya (EEPIS). <i className="twa twa-flag-indonesia"></i>
            </Text>
            <Text>
              Focusing on technologies for Frontend Web Development with JavaScript-based ecosystems. Such as Next.js,
              Chakra UI, and Headless CMS like Contentful, DatoCMS, or the one provided by Netlify. I could also open to
              projects that use Laravel if necessary. <i className="twa twa-books"></i>
            </Text>
            <Text>
              In most of my time, I contribute to open source projects, explore some useful resources, and take any
              courses to rank up my skills. Also working on paid projects if there's an opportunity.{" "}
              <i className="twa twa-man-technologist"></i>
            </Text>
          </VStack>
        </Box>

        <Grid w="full" templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} gridGap={4}>
          {data.map((skill) => (
            <Box key={skill.id}>
              <Heading as="h5" fontSize="lg" my={4}>
                {skill.title}
              </Heading>
              <UnorderedList m="unset" textColor={textColor}>
                {skill.items.map((item) => (
                  <ListItem key={item} listStyleType="none" fontSize="md" my={2}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Grid>

        <Box w="full">
          <Heading as="h3" fontSize="2xl" mb={6}>
            Socials
          </Heading>

          <UnorderedList m="unset">
            {socials.map((social) => (
              <ListItem key={social.id} listStyleType="none" my={3} textColor={textColor}>
                {social.social} –{" "}
                <Box as="span" textColor={linkColor}>
                  <Link href={social.canonical_url} isExternal>
                    {social.slug}
                  </Link>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </VStack>

      <BackButton backto="/" name="Home" />
    </>
  );
}
