import { Link, ListItem, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export const ProjectLink = ({ project }) => {
  const { title, repository } = project;

  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <ListItem fontSize={["sm", "md"]} color={textColor}>
      <NextLink href={repository} passHref>
        <Link color={linkColor} wordBreak="break-all" isExternal>
          {repository}
        </Link>
      </NextLink>{" "}
      ({title}).
    </ListItem>
  );
};
