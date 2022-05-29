import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Divider, Heading, HStack, Spacer } from "@chakra-ui/react";
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
      <HStack as="header" w="full" display={["none", "block"]}>
        <HStack as="nav" py={6}>
          <NextLink href="/" passHref>
            <Heading
              as="a"
              fontSize="2xl"
              fontWeight="black"
              letterSpacing="2px"
              bgGradient="linear(to-l, blue.200, teal.400)"
              bgClip="text"
            >
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
      </HStack>

      <Divider />
    </>
  );
};
