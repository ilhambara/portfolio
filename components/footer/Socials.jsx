import { Grid, Icon, IconButton, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { FaDev, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import socials from "@/data/socials.json";

const FOOTER_SOCIAL_LINKS = [
  ["Email", FiMail, socials[0].canonical_url],
  ["Github ", FaGithub, socials[1].canonical_url],
  ["Devto", FaDev, socials[2].canonical_url],
  ["Instagram", FaInstagram, socials[3].canonical_url],
];

export const Socials = () => {
  const color = useColorModeValue("gray.200", "gray.900");
  const linkColor = useColorModeValue("blue.500", "blue.100");

  return (
    <>
      <Grid templateColumns={["repeat(4, 1fr)", "repeat(2, 1fr)"]} gap={[5, 4]}>
        {FOOTER_SOCIAL_LINKS.map(([label, AsIcon, href]) => (
          <Link key={label} href={href} isExternal>
            <IconButton
              aria-label={label}
              icon={<Icon as={AsIcon} boxSize={6} color={linkColor} />}
              w={12}
              h={12}
              bgColor={color}
              colorScheme="gray"
              borderRadius="full"
            />
          </Link>
        ))}
      </Grid>
    </>
  );
};
