import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { OpenGraph } from "@/components/OpenGraph";
import {
  Box,
  Heading,
  Link,
  Text,
  useColorModeValue,
  Button,
  ButtonGroup,
  LightMode,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { GrLinkedin, GrInfo } from "react-icons/gr";
import siteConfig from "@/config/siteConfig";

export default function Home() {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  const target = siteConfig.links;

  return (
    <>
      <OpenGraph />

      <Stack direction={["column-reverse", "row"]} justify="space-between" align="center" spacing={8}>
        <VStack w={["100%", "60%"]} fontSize={["md", "lg"]} textAlign="left" spacing={8}>
          <Box w="100%">
            <Heading as="h1" fontSize={["4xl", "5xl"]}>
              {siteConfig.info.title}{" "}
              <Link textColor={linkColor} href={target.primary} isExternal>
                {siteConfig.info.link}
              </Link>
            </Heading>
          </Box>
          <Box w="100%">
            <Text lineHeight={1.8} textColor={textColor}>
              {siteConfig.info.desc}
            </Text>
          </Box>
          <Box w="100%">
            <Text lineHeight={1.8} textColor={textColor}>
              Doing Frontend Engineering on MSIB{" "}
              <Link textColor={linkColor} fontWeight="semibold" href={target.kampusMerdeka} isExternal>
                Kampus Merdeka
              </Link>
              , Maintaining some Open-source projects, Also an Average Racecar Driver in Forza Horizon 4.
            </Text>
          </Box>
          <Box w="100%">
            <Text lineHeight={1.8} textColor={textColor}>
              {siteConfig.info.more} <i className="twa twa-eyes"></i>
              <i className="twa twa-backhand-index-pointing-down"></i>
            </Text>
          </Box>

          <LightMode>
            <ButtonGroup w="100%" spacing="4">
              <NextLink href="https://www.linkedin.com/in/ilhambara" passHref>
                <Button as="a" variant="solid" colorScheme="linkedin" leftIcon={<GrLinkedin />} target="_blank">
                  Ilham Mubarok
                </Button>
              </NextLink>
              <NextLink href="/about" passHref>
                <Button as="a" variant="solid" colorScheme="gray" textColor="black" leftIcon={<GrInfo />}>
                  About Me
                </Button>
              </NextLink>
            </ButtonGroup>
          </LightMode>
        </VStack>

        <Box bgColor={bgColor} borderRadius="full">
          <motion.div
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.15}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
          >
            <Image src="/img/memoji-me.png" width={260} height={260} alt="Home memoji" />
          </motion.div>
        </Box>
      </Stack>
    </>
  );
}
