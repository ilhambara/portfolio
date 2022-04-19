import Head from "next/head";
import { ExpCard } from "@/components/cards/ExpCard";
import { Box, Heading } from "@chakra-ui/react";
import BackButton from "@/components/buttons/BackButton";

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences | Next Portfolio</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          Experiences
        </Heading>
      </Box>

      <ExpCard />

      <BackButton backto="/" name="Home" />
    </>
  );
}
