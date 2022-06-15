import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Box, Heading, Text, useColorModeValue, Button, ButtonGroup, LightMode, VStack, Stack } from "@chakra-ui/react";
import { GrLinkedin, GrInfo } from "react-icons/gr";
import siteConfig from "@/config/siteConfig";
import { OpenGraph } from "@/components/OpenGraph";
import { InlineLink } from "@/components/link/InlineLink";
import { Latest } from "@/components/sections/Latest";

export default function Home() {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.300");

  const target = siteConfig.links;

  return (
    <>
      <OpenGraph />

      <Stack h="full" direction={["column-reverse", "row"]} justify="space-between" align="center" spacing={[16, 2]}>
        <VStack w={["full", "60%"]} fontSize={["md", "lg"]} align="start" spacing={[8, 12]}>
          <Heading as="h1" fontSize={["4xl", "5xl"]}>
            {siteConfig.info.title} <InlineLink href={target.primary} name={siteConfig.info.link} />
          </Heading>

          <VStack w="full" align="start" lineHeight={1.8} textColor={textColor} spacing={6}>
            <Text>{siteConfig.info.desc}</Text>

            <Text>
              Doing Frontend Engineering on MSIB <InlineLink href={target.kampusMerdeka} name="Kampus Merdeka" />,
              Maintaining some Open-source projects, Also an Average Racecar Driver in Forza Horizon 4.
            </Text>

            <Text>
              {siteConfig.info.more} <i className="twa twa-eyes"></i>
              <i className="twa twa-backhand-index-pointing-down"></i>
            </Text>
          </VStack>

          <LightMode>
            <ButtonGroup w="full" spacing="4">
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

        <Box maxW={["14rem", "full"]} bgColor={bgColor} borderRadius="full" p={[2, 4]}>
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

      <Latest />
    </>
  );
}
