import NextImage from "next/image";
import { ButtonGroup, Flex, Heading, IconButton, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { VscGithub, VscRocket } from "react-icons/vsc";

export const ProjectCard = () => {
  const width = 480;
  const height = 300;
  // const picsum = `https://picsum.photos/${width}/${height}`;

  const bgColor = useColorModeValue("gray.200", "#12151d");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  const fakeData = [
    {
      title: "Cross-platform App Boilerplate",
      desc: "This project is a starter template to develop desktop-based app using Electron that combined with React js and TailwindCSS. Configured for Windows, MacOS, and (some) Linux.",
      img: `https://picsum.photos/id/20/${width}/${height}`,
    },
    {
      title: "Mortimer Community",
      desc: "An online based community website created in a combination of React Js and Contentful.",
      img: `https://picsum.photos/id/1000/${width}/${height}`,
    },
    {
      title: "Use Google Sheets for Database",
      desc: "This project is a quick proof-of-concept in turned google spreadsheets into a database using provided API from its official source Google Cloud Platform (GCP).",
      img: `https://picsum.photos/id/894/${width}/${height}`,
    },
  ];

  return (
    <>
      <VStack spacing={8}>
        {fakeData.map((data) => (
          <Stack
            key={data.title}
            direction={["column", "row"]}
            w="full"
            minH="10rem"
            bgColor={bgColor}
            borderRadius={4}
            p={[4, 2]}
            spacing={[6, 2]}
          >
            <Flex w={["full", "50%"]}>
              <NextImage
                width={width}
                height={height}
                objectFit="contain"
                src={data.img}
                alt="project thumbnail"
                blurDataURL={data.img}
                placeholder="blur"
              />
            </Flex>

            <VStack w={["full", "50%"]} align="start" justify="space-between" p={[0, 4]} spacing={8}>
              <VStack minH={["fit-content", 200]} align="start" spacing={[4, 8]} lineHeight={1.8}>
                <Heading
                  as="h3"
                  fontSize={["2xl", "3xl"]}
                  color={linkColor}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {data.title}
                </Heading>

                <Text opacity={0.75}>{data.desc}</Text>
              </VStack>

              <ButtonGroup w="full" justifyContent="end" variant="ghost" spacing={2}>
                <IconButton colorScheme="gray" aria-label="Preview Button" icon={<VscGithub size={24} />} />
                <IconButton colorScheme="blue" aria-label="Preview Button" icon={<VscRocket size={24} />} />
              </ButtonGroup>
            </VStack>
          </Stack>
        ))}
      </VStack>
    </>
  );
};
