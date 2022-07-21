import useSWR from "swr";
import { Flex, HStack, Icon, Link, Text, Tooltip, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaSpotify } from "react-icons/fa";

export const NowPlaying = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const isOnline = data?.isPlaying;
  const getURI = data?.songUrl?.replace("https://open.spotify.com/track/", "");

  const onText = useColorModeValue("gray.800", "gray.300");
  const offText = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <HStack as="section" w="full" justify="space-between" py={2}>
        <HStack w="full" spacing={3}>
          <Icon as={FaSpotify} color="#1db954" />

          {isOnline ? (
            <SongIsPlaying title={data.title} artist={data.artist} onText={onText} />
          ) : (
            <Text color={offText}>Currently Offline &mdash; Spotify</Text>
          )}
        </HStack>

        {isOnline ? (
          <Tooltip hasArrow placement="top" label="Listen to this song 🎧" fontWeight="semibold" pb={1}>
            <Link href={"spotify:track:" + getURI} isExternal>
              <ExternalLinkIcon />
            </Link>
          </Tooltip>
        ) : null}
      </HStack>
    </>
  );
};

export const SongIsPlaying = ({ title, artist, onText }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex w="90%" align="center">
      {isMobile ? (
        <marquee>
          {title} &mdash; {artist}
        </marquee>
      ) : (
        <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" color={onText}>
          {title} &mdash; {artist}
        </Text>
      )}
    </Flex>
  );
};
