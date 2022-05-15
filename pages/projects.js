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
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </VStack>
    </>
  );
}
