import NextImage from "next/image";
import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { VscGithub, VscRocket } from "react-icons/vsc";

export const ProjectCard = ({ title, description, link, preview, thumbnail }) => {
  const { file } = thumbnail;
  const { width, height } = thumbnail.file.details.image;

  const bgImg = useColorModeValue("gray.400", "gray.700");
  const bgImgHover = useColorModeValue("gray.300", "gray.800");

  const bgColor = useColorModeValue("gray.200", "#12151d");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <>
      <Stack direction={["column", "row"]} w="full" minH="300px" bgColor={bgColor} borderRadius={4} spacing={2}>
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
            bottom={["-20px", "-16px"]}
            boxShadow="xl"
            borderRadius={4}
            transition="0.3s"
            overflow="hidden"
            _hover={{ transform: `translate(0, -10px)`, boxShadow: "md", cursor: "pointer" }}
          >
            <NextImage
              width={width}
              height={height}
              objectFit="contain"
              src={"https:" + file.url}
              alt="project thumbnail"
              blurDataURL={"https:" + file.url}
              placeholder="blur"
              quality={90}
            />
          </Flex>
        </Flex>

        <VStack w={["full", "50%"]} align="start" justify="space-between" p={[3, 6]} spacing={[8, 4]}>
          <VStack align="start" spacing={[4, 6]} lineHeight={1.8}>
            <Heading as="h3" fontSize={["xl", "2xl"]} lineHeight={1.6} color={linkColor}>
              {title}
            </Heading>

            <Text opacity={0.75}>{description}</Text>
          </VStack>

          <ButtonGroup w="full" justifyContent="end" variant="ghost" spacing={2} pb={[4, 0]}>
            <Link href={link} display={link ? "block" : "none"} isExternal>
              <IconButton colorScheme="gray" aria-label="Preview Button" icon={<VscGithub size={24} />} />
            </Link>

            <Link href={preview} display={preview ? "block" : "none"} isExternal>
              <IconButton colorScheme="blue" aria-label="Preview Button" icon={<VscRocket size={24} />} />
            </Link>
          </ButtonGroup>
        </VStack>
      </Stack>
    </>
  );
};
