import fetchEntries from "lib/contentful";
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
                  if (project.category == "Websites") {
                    return <ProjectCard key={index} project={project} />;
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((project, index) => {
                  if (project.category == "Codes") {
                    return <ProjectCard key={index} project={project} />;
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

            <TabPanel px={2}>
              <VStack align="start" spacing={8}>
                <UnorderedList spacing={4}>
                  {projects.map((project, index) => {
                    if (project.category == "Others") {
                      return <ProjectLink key={index} project={project} />;
                    }
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
