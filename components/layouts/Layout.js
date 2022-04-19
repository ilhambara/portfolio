import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Box, Container, Flex } from "@chakra-ui/react";
import Favicon from "../Favicon";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Box bgColor="bgMain" minH="100vh">
      <Favicon />

      <Container minH="100vh" maxW={["lg", "4xl"]} justifyContent="space-between" centerContent>
        <Navbar />

        <Flex as="main" w="100%" flexDirection="column" py={16}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <motion.div
              key={router.route}
              animate="enter"
              exit="exit"
              variants={{
                initial: { opacity: 0, y: -25 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 25 },
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Flex>

        <Footer />
      </Container>
    </Box>
  );
};
