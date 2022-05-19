import fetchEntries from "lib/contentful";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
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

        <Tabs
          lazyBehavior="unmount"
          isLazy={true}
          isManual
          w="full"
          minH="50vh"
          size="sm"
          variant="line"
          colorScheme="blue"
          isFitted
        >
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
                  if (project.category == "Websites") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.category == "Codes") {
                    return <ProjectCard key={key} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, key) => {
                  if (project.category == "Products") {
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
  const res = await fetchEntries();
  const projects = res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      projects,
    },
  };
}
