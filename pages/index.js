import Image from "next/image";
import { motion } from "framer-motion";
import { OpenGraph } from "@/components/OpenGraph";
import { HomeCard } from "@/components/cards/HomeCard";
import { Grid, Flex, Heading, Link, Text } from "@chakra-ui/react";
import siteConfig from "@/config/siteConfig";

export default function Home() {
  return (
    <>
      <OpenGraph />

      <Flex
        w="100%"
        mb={2.5}
        flexDirection={["column-reverse", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          w={["100%", "65%"]}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.6,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          >
            <Heading as="h1" fontSize={["4xl", "5xl"]} mb={[5, 10]}>
              {siteConfig.info.title}{" "}
              <Link
                textColor="blue.400"
                href={siteConfig.links.ReadCV}
                isExternal
              >
                {siteConfig.info.link}
              </Link>
            </Heading>
            <Text fontSize="lg" lineHeight={1.8} textColor="gray.300" my={5}>
              {siteConfig.info.desc}
            </Text>
            <Text fontSize="lg" lineHeight={1.8} textColor="gray.300" my={5}>
              {siteConfig.info.more} <i className="twa twa-eyes"></i>{" "}
              <i className="twa twa-backhand-index-pointing-down"></i>
            </Text>
          </motion.div>
        </Flex>

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
          <Image
            src="/img/memoji-me.png"
            width={260}
            height={260}
            alt="Home memoji"
            quality={90}
          />
        </motion.div>
      </Flex>

      <Grid
        w="100%"
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={8}
        mb={[12, 0]}
      >
        <HomeCard />
      </Grid>
    </>
  );
}
