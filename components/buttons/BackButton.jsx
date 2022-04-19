import * as React from "react";
import NextLink from "next/link";
import { Flex, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function BackButton({ backto, name }) {
  return (
    <Flex w="100%" justify="flex-end" mt={6}>
      <NextLink href={backto} passHref>
        <Button as="a" leftIcon={<ArrowBackIcon />} variant="ghost" fontSize={["md", "lg"]}>
          {name}
        </Button>
      </NextLink>
    </Flex>
  );
}
