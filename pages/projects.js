import Head from "next/head";
import fetchEntries from "@/lib/contentful";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectLink } from "@/components/link/ProjectLink";
import {
  Badge,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

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

export default function Projects({ projects }) {
  const TAB_LISTS = ["Websites", "Codes", "Products", "Others"];

  return (
    <>
      <Head>
        <title>Projects | Next Portfolio</title>
      </Head>

      <VStack spacing={16}>
        <VStack w="full" align="start" spacing={8}>
          <HStack>
            <Badge colorScheme="green">new</Badge>
            <Badge colorScheme="orange">under development</Badge>
          </HStack>

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
                {projects.map((project, index) => {
                  return project.category == "Websites" ? <ProjectCard key={index} project={project} /> : null;
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, index) => {
                  return project.category == "Codes" ? <ProjectCard key={index} project={project} /> : null;
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, index) => {
                  return project.category == "Products" ? <ProjectCard key={index} project={project} /> : null;
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={2}>
              <VStack align="start" spacing={8}>
                <UnorderedList spacing={4}>
                  {projects.map((project, index) => {
                    return project.category == "Others" ? <ProjectLink key={index} project={project} /> : null;
                  })}
                </UnorderedList>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
