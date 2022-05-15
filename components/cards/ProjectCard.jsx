import NextImage from "next/image";
import { Box, ButtonGroup, Flex, Heading, IconButton, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { VscGithub, VscRocket } from "react-icons/vsc";

export const ProjectCard = () => {
  const width = 480;
  const height = 280;
  // const picsum = `https://picsum.photos/${width}/${height}`;

  const bgImg = useColorModeValue("gray.400", "gray.700");
  const bgImgHover = useColorModeValue("gray.300", "gray.800");

  const bgColor = useColorModeValue("gray.200", "#12151d");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  const fakeData = [
    {
      title: "Cross-platform App Boilerplate",
      desc: "This project is a starter template to develop desktop-based app using Electron that combined with React js and TailwindCSS. Configured for Windows, MacOS, and (some) Linux. Electron that combined with React js.",
      img: "/img/thumb/thumb1.png",
    },
    {
      title: "spotify-play-next.vercel.app",
      desc: "Display 'Currently Playing Song' Status From Spotify API using Next.js. Project details and explanations are not available yet. Planned to working on it soon! 👀⏳",
      img: `/img/thumb/thumb2.png`,
    },
    {
      title: "Mortimer Community",
      desc: "An online based community website created in a combination of React Js and Contentful. Bootstrapped with Create React App.",
      img: `/img/thumb/thumb3.png`,
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
            minH="300px"
            bgColor={bgColor}
            borderRadius={4}
            spacing={2}
          >
            <Flex
              w={["full", "50%"]}
              justify="center"
              align="end"
              bgColor={bgImg}
              overflow="hidden"
              transition="0.3s"
              _hover={{ bgColor: bgImgHover }}
            >
              <Flex
                w="94%"
                h="fit-content"
                justify="end"
                align="end"
                pos="relative"
                bottom="-16px"
                boxShadow="xl"
                transition="0.3s"
                borderRadius={4}
                overflow="hidden"
                _hover={{ transform: `translate(0, -8px)`, boxShadow: "md", cursor: "pointer" }}
              >
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
            </Flex>

            <VStack w={["full", "50%"]} align="start" justify="space-between" p={[3, 6]} spacing={[8, 4]}>
              <VStack align="start" spacing={[4, 6]} lineHeight={1.8}>
                <Heading as="h3" fontSize={["xl", "2xl"]} lineHeight={1.6} color={linkColor}>
                  {data.title}
                </Heading>

                <Text opacity={0.75}>{data.desc}</Text>
              </VStack>

              <ButtonGroup w="full" justifyContent="end" variant="ghost" spacing={2} pb={[4, 0]}>
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
