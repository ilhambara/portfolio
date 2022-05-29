import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Container, Flex } from "@chakra-ui/react";
import Favicon from "../Favicon";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

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
        overflowX="hidden"
      >
        <Navbar />

        <Flex as="main" w="full" direction="column" py={[20, 24]}>
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
