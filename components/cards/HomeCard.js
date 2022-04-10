import NextLink from "next/link";
import data from "@/data/home.json";
import { Box, Text, Link } from "@chakra-ui/react";

export const HomeCard = () => {
  return (
    <>
      {data.map((home) => {
        return (
          <NextLink href={home.url} key={home.id} passHref>
            <Box
              p={6}
              textAlign="left"
              color="inherit"
              textDecoration="none"
              border="1px solid"
              borderColor="gray.600"
              borderRadius="10px"
              transition="0.15s ease"
              cursor="pointer"
              _hover={{
                color: "blue.400",
                borderColor: "blue.300",
                textDecoration: "none",
              }}
            >
              <Text
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                letterSpacing="1px"
              >
                {home.title} &rarr;
              </Text>
              <Text fontSize="lg" mt={4} textColor="gray.400">
                {home.description}
              </Text>
            </Box>
          </NextLink>
        );
      })}
    </>
  );
};
