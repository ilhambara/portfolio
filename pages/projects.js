import { createClient } from "contentful";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "projects" });

  // any objects added are passing as a props called 'projects'
  return {
    props: { projects: res.items },
    revalidate: 1, // in seconds for page re-generation
  };
}

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

        <Tabs w="full" minH="50vh" variant="line" colorScheme="blue" isFitted>
          <TabList>
            <Tab>{projects[2].fields.category}</Tab>
            <Tab>{projects[1].fields.category}</Tab>
            <Tab>{projects[0].fields.category}</Tab>
          </TabList>

          <TabPanels pt={8}>
            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Explorations") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Works") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.fields.category == "Uncategorized") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
