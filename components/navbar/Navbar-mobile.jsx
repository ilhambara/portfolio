import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import navItems from "@/config/siteConfig";
import ToggleTheme from "../buttons/toggleTheme";
import { HamburgerIcon } from "@chakra-ui/icons";

const NAV_MENUS = [
  ["Projects", navItems.menus.Projects],
  ["Experiences", navItems.menus.Experiences],
  ["Blog", navItems.menus.Blog],
  ["About", navItems.menus.About],
];

export const NavbarMobile = () => {
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

          <ToggleTheme />

          <Menu>
            <MenuButton as={IconButton} aria-label="Menus" icon={<HamburgerIcon />} variant="solid" />
            <MenuList>
              {NAV_MENUS.map(([menu, link]) => (
                <NextLink key={menu} href={link} passHref>
                  <MenuItem>{menu}</MenuItem>
                </NextLink>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <Divider />
      </Container>
    </>
  );
};
