import { Box, Container, Flex } from "@chakra-ui/react";
import Favicon from "../Favicon";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <Box bgColor="bgMain" minH="100vh">
      <Favicon />

      <Container minH="100vh" maxW={["lg", "4xl"]} justifyContent="space-between" centerContent>
        <Navbar />

        <Flex as="main" w="100%" flexDirection="column" py={16}>
          {children}
        </Flex>

        <Footer />
      </Container>
    </Box>
  );
};
