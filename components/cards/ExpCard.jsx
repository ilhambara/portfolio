import { VStack, StackDivider, Box, Heading, Text, Badge, useColorModeValue, HStack } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import data from "../../data/experiences.json";

export const ExpCard = () => {
  const badgeVariant = useColorModeValue("solid", "subtle");
  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <VStack
      bgColor={bgColor}
      divider={<StackDivider borderColor="gray.600" />}
      p={["6", "12"]}
      spacing={[8, 12]}
      borderRadius="5px"
    >
      {data.map((experience) => {
        return (
          <Box h="100%" w="100%" key={experience.id}>
            <Heading as="h3" fontSize={["xl", "2xl"]} textColor={linkColor} lineHeight={1.6} pb={8}>
              {experience.title}
            </Heading>

            <VStack w="full" align="start" textColor={textColor} spacing={4}>
              <HStack>
                <i className="twa twa-man-technologist"></i>{" "}
                <Text fontWeight="semibold" letterSpacing="0.5px">
                  {experience.role}
                </Text>
              </HStack>

              <HStack>
                <i className="twa twa-four-o-clock"></i> <Text>{experience.time}</Text>
              </HStack>

              <Text fontSize={["sm", "md"]} lineHeight={1.8} opacity={0.75}>
                {experience.description}
              </Text>
            </VStack>

            <Box w="full" pt={8}>
              {experience.tags.map((tag) => {
                // to color the badge based on value
                var badgeScheme = "gray";

                if (tag == "bootcamp") {
                  badgeScheme = "blue";
                } else if (tag == "code") {
                  badgeScheme = "green";
                } else if (tag == "collabs") {
                  badgeScheme = "orange";
                } else if (tag == "group project") {
                  badgeScheme = "purple";
                }

                return (
                  <Badge
                    key={tag}
                    px={1}
                    my={2}
                    mr={3}
                    letterSpacing="0.5px"
                    colorScheme={badgeScheme}
                    variant={badgeVariant}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </VStack>
  );
};
