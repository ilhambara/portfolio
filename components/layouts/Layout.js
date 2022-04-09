import { Box, Container, Flex } from "@chakra-ui/react";
import Favicon from "../Favicon";
import { Footer } from "../Footer";
import { NavbarDesktop } from "../navbar/Navbar-desktop";

export const Layout = ({ children }) => {
  return (
    <Box bgColor="bgMain" minH="100vh">
      <Favicon />

      <Container minH="50vh" maxW={["lg", "4xl"]} centerContent>
        <NavbarDesktop />
        <Flex
          as="main"
          my={[0, 12]}
          mb={4}
          w="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Flex>

        <Footer />
      </Container>
    </Box>
  );
};
