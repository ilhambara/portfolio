// import fetchEntries from "utils/contentful";
import { createClient } from "contentful";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { Flex, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

const TAB_LISTS = ["Websites", "Codes", "Products", "Others"];

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects | Next Portfolio</title>
      </Head>

      <VStack spacing={16}>
        <VStack w="full" align="start" spacing={8}>
          <Heading as="h1">Projects</Heading>
          <Text opacity={0.75}>Description? TBD.</Text>
        </VStack>

        <Tabs w="full" minH="50vh" size="sm" variant="line" colorScheme="blue" isFitted>
          <TabList>
            {TAB_LISTS.map((category, index) => (
              <Tab key={index} fontWeight="semibold" pb={3}>
                {category}
              </Tab>
            ))}
          </TabList>

          <TabPanels pt={8}>
            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Websites") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Codes") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Products") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>TBD.</TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: { projects: res.items },
    revalidate: 1,
  };
}
