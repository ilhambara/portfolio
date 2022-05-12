import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Divider,
  Heading,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  VStack,
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

  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <>
      <VStack as="header" w="full" pt={4}>
        <HStack as="nav" w="full" h={16} spacing={3}>
          <NextLink href="/" passHref>
            <Heading as="a" fontSize="xl" fontWeight="bold" letterSpacing="2px">
              {"<Bara/>"}
            </Heading>
          </NextLink>

          <Spacer />

          <ToggleTheme />

          <Menu>
            <MenuButton as={IconButton} aria-label="Menu" icon={<HamburgerIcon />} variant="solid" />
            <MenuList>
              {NAV_MENUS.map(([menu, link]) => (
                <NextLink key={menu} href={link} passHref>
                  <MenuItem color={active == link ? `${linkColor}` : ""}>{menu}</MenuItem>
                </NextLink>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <Divider />
      </VStack>
    </>
  );
};
