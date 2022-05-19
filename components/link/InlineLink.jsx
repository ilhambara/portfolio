import { Link } from "@chakra-ui/react";

export const InlineLink = ({ href, name }) => {
  return (
    <>
      <Link href={href} textColor="blue.400" fontWeight="semibold" isExternal>
        {name}
      </Link>
    </>
  );
};
