import { Link, useColorModeValue } from "@chakra-ui/react";

export const InlineLink = ({ href, name }) => {
  const linkColor = useColorModeValue("blue.500", "blue.400");

  return (
    <>
      <Link href={href} textColor={linkColor} fontWeight="semibold" isExternal>
        {name}
      </Link>
    </>
  );
};
