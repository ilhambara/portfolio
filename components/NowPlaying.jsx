import useSWR from "swr";
import { Box, HStack, Icon, Link, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaSpotify } from "react-icons/fa";

export const NowPlaying = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const isOnline = data?.isPlaying;

  const onText = useColorModeValue("gray.800", "gray.300");
  const offText = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <HStack as="section" w="full" minW={0} justify="space-between" py={2} mt={[16, 0]}>
        <HStack>
          <Icon as={FaSpotify} color="#1db954" />

          <Box maxW={["320px", "full"]}>
            <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" color={isOnline ? onText : offText}>
              {isOnline ? data.title : "Currently Offline"} &mdash; {isOnline ? data.artist : "Spotify"}
            </Text>
          </Box>
        </HStack>

        {isOnline ? (
          <Tooltip hasArrow placement="top" label="Listen This Song 🎧" fontWeight="semibold" pb={1}>
            <Link href={data.songUrl} isExternal>
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        ) : null}
      </HStack>
    </>
  );
};
