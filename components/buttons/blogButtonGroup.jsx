import * as React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, ButtonGroup, useClipboard, useToast } from "@chakra-ui/react";
import { FiLink } from "react-icons/fi";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function BlogButtonGroup(props) {
  const domain = "https://barathrum.studio";
  const { asPath } = useRouter();

  const toast = useToast();

  const [value, setValue] = React.useState(domain + asPath);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <ButtonGroup variant="solid" spacing="4">
      <Button
        leftIcon={<FiLink />}
        colorScheme="linkedin"
        onClick={() => {
          onCopy();
          toast({
            title: "Link to this post copied to clipboard.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }}
      >
        {hasCopied ? "Copied" : "Share "}
      </Button>

      <NextLink href={props.canonicalURL} passHref>
        <Button as="a" leftIcon={<ExternalLinkIcon />} colorScheme="gray" target="_blank">
          Original Post
        </Button>
      </NextLink>
    </ButtonGroup>
  );
}
