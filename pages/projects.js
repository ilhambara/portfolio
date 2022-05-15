import { ProjectCard } from "@/components/cards/ProjectCard";
import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Next Portfolio</title>
      </Head>

      <VStack spacing={16}>
        <VStack w="full" align="start" spacing={8}>
          <Heading as="h1" textStroke="blue.300">
            Projects
          </Heading>
          <Text>
            Berikut ini adalah projects yang pernah saya kerjakan. mulai dari project berbayar, freelance, dan juga
            proyek hasil eksplorasi saya sendiri.
          </Text>
        </VStack>

        <Flex w="full">
          <Tabs w="full" minH="50vh" variant="line" colorScheme="blue">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>

            <TabPanels pt={4}>
              <TabPanel px={0}>
                <ProjectCard />
              </TabPanel>
              <TabPanel px={0}>
                <p>Second Tab!</p>
              </TabPanel>
              <TabPanel px={0}>
                <p>Third Tab!</p>
                <p>belum tau mau diisi apa</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </VStack>
    </>
  );
}
