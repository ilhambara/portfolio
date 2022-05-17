import fetchEntries from "utils/contentful";
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
                {projects.map((p, key) => {
                  if (p.category == "Websites") {
                    return (
                      <ProjectCard
                        key={key}
                        title={p.title}
                        description={p.description}
                        link={p.repository}
                        preview={p.preview}
                        thumbnail={p.thumbnail.fields}
                      />
                    );
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((p, key) => {
                  if (p.category == "Codes") {
                    return (
                      <ProjectCard
                        key={key}
                        title={p.title}
                        description={p.description}
                        link={p.repository}
                        preview={p.preview}
                        thumbnail={p.thumbnail.fields}
                      />
                    );
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack spacing={8}>
                {projects.map((p, key) => {
                  if (p.category == "Products") {
                    return (
                      <ProjectCard
                        key={key}
                        title={p.title}
                        description={p.description}
                        link={p.repository}
                        preview={p.preview}
                        thumbnail={p.thumbnail.fields}
                      />
                    );
                  }
                })}
              </VStack>
            </TabPanel>

            <TabPanel px={0}>
              <VStack w="full" align="start" spacing={4}>
                {projects.map((p, key) => {
                  if (p.category == "Others") {
                    return (
                      <Link key={key} href={p.repository} fontSize={["sm", "md"]} color="blue.300" isExternal>
                        - {p.title}: {p.repository}
                      </Link>
                    );
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
