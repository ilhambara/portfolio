import { Box, Link, Text, VStack, Stack, Divider, useColorModeValue } from "@chakra-ui/react";
import socials from "../data/socials.json";

export const Footer = () => {
  const textColor = useColorModeValue("gray.800", "gray.300");
  return (
    <>
      <VStack as="footer" w="100%" pb={12}>
        <Divider />

        <Stack
          direction={["column", "row"]}
          alignItems={["center", "flex-start"]}
          justifyContent="space-between"
          py={6}
          px={0}
          w="100%"
          h="100%"
          textColor="gray.300"
        >
          <VStack
            alignItems={["center", "flex-start"]}
            textAlign={["center", "left"]}
            spacing={[6, 3]}
            fontSize="sm"
            textColor={textColor}
          >
            <Text lineHeight={1.8} px={[4, 0]}>
              Made using{" "}
              <Link href="https://nextjs.org/" textColor="blue.400" fontWeight="semibold" isExternal>
                Next.js
              </Link>
              {", "}
              <Link href="https://chakra-ui.com/" textColor="blue.400" fontWeight="semibold" isExternal>
                Chakra UI
              </Link>
              {", "}and API from{" "}
              <Link href="https://docs.forem.com/api/" textColor="blue.400" fontWeight="semibold" isExternal>
                DEV
              </Link>
              {". "} Hosted on{" "}
              <Link href="https://vercel.com/" textColor="blue.400" fontWeight="semibold" isExternal>
                Vercel
              </Link>
              {"."}
            </Text>

            <Text>
              Code licensed under{" "}
              <Box as="span" fontWeight="semibold">
                MIT License
              </Box>
              {"."}
            </Text>
            <Text>
              Bara © 2021&ndash;present.{" "}
              <Box as="span" textColor="gray.400">
                Version-3.05
              </Box>
            </Text>
          </VStack>

          <Stack
            direction={["row", "column"]}
            alignItems={["center", "flex-end"]}
            justifyContent="space-evenly"
            textColor={textColor}
            fontSize="sm"
            spacing={[6, 3]}
            pt={[6, 0]}
          >
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.canonical_url}
                fontWeight={["semibold", "normal"]}
                textColor={textColor}
                textDecoration={["underline", "none"]}
                isExternal
              >
                {social.social}
              </Link>
            ))}
          </Stack>
        </Stack>
      </VStack>
    </>
  );
};
