import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Spacer,
} from "@chakra-ui/react";
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
      <Container maxW="4xl" py={6} px={0}>
        <HStack>
          <NextLink href="/" passHref>
            <Button as="a" colorScheme={active == "/" ? "green" : "orange"}>
              Home
            </Button>
          </NextLink>

          <Spacer />

          <HStack spacing={4}>
            {NAV_MENUS.map(([menu, link]) => (
              <NextLink key={menu} href={link} passHref>
                <Button
                  as="a"
                  colorScheme={active == link ? "green" : "orange"}
                >
                  {menu}
                </Button>
              </NextLink>
            ))}

            <ToggleTheme />
          </HStack>
        </HStack>
      </Container>
      <Divider />
    </>
  );
};
