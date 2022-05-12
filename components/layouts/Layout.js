import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Container, Flex } from "@chakra-ui/react";
import Favicon from "../Favicon";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Favicon />

      <Container
        display="flex"
        flexDirection="column"
        maxW="container.lg"
        w="full"
        minH="100vh"
        h="full"
        justifyContent="space-between"
        centerContent
      >
        <Navbar />

        <Flex as="main" w="100%" direction="column" py={16}>
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
    </>
  );
};
