import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Container, Divider, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import navItems from "@/config/siteConfig";
import ToggleTheme from "../buttons/toggleTheme";

const NAV_MENUS = [
  ["Projects", navItems.menus.Projects],
  ["Experiences", navItems.menus.Experiences],
  ["Blog", navItems.menus.Blog],
  ["About", navItems.menus.About],
];

export const NavbarDesktop = () => {
  const router = useRouter();
  const active = router.pathname;

  return (
    <>
      <Container as="header" maxW="4xl" px={0}>
        <HStack as="nav" py={6}>
          <NextLink href="/" passHref>
            <Heading as="a" fontSize="xl" fontWeight="bold" letterSpacing="2px">
              {"<Bara/>"}
            </Heading>
          </NextLink>

          <Spacer />

          <HStack spacing={4}>
            {NAV_MENUS.map(([menu, link]) => (
              <NextLink key={menu} href={link} passHref>
                <Button as="a" colorScheme={active == link ? "blue" : ""} variant="ghost">
                  {menu}
                </Button>
              </NextLink>
            ))}

            <ToggleTheme />
          </HStack>
        </HStack>
        <Divider />
      </Container>
    </>
  );
};
