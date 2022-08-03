import { useRouter } from "next/router";
import { Box, Link, Text, VStack, Stack, Divider, useColorModeValue } from "@chakra-ui/react";
import { NowPlaying } from "@/components/NowPlaying";
import { InlineLink } from "@/components/link/InlineLink";
import { Socials } from "./Socials";

export const Footer = () => {
  const router = useRouter();
  const path = router.asPath;

  const textColor = useColorModeValue("gray.800", "gray.300");

  return (
    <>
      <VStack as="footer" w="full" minH={64}>
        {path == "/" ? <NowPlaying /> : null}

        <VStack as="section" w="full">
          <Divider />

          <Stack
            w="full"
            h="full"
            direction={["column-reverse", "row"]}
            align={["center", "start"]}
            justify="space-between"
            py={12}
            spacing={[8, 0]}
          >
            <VStack align={["center", "start"]} fontSize="sm" textColor={textColor} spacing={4}>
              <Text align="center" lineHeight={1.8}>
                Developed using <InlineLink href="https://nextjs.org/" name="Next.js" />
                {", "}
                <InlineLink href="https://chakra-ui.com/" name="Chakra UI" />
                {", "}and <InlineLink href="https://www.contentful.com/" name="Contentful" />
                {". "}
              </Text>

              <Text>
                Code licensed under <b>MIT License</b>.
              </Text>

              <Text>
                Bara © 2021&ndash;present.{" "}
                <Box as="span" opacity={0.75}>
                  Version 4.
                </Box>
              </Text>
            </VStack>

            <Socials />
          </Stack>
        </VStack>
      </VStack>
    </>
  );
};
