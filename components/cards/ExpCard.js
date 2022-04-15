import { VStack, StackDivider, Box, Heading, Text, Badge, useColorModeValue } from "@chakra-ui/react";
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
            <Heading pb={6} as="h3" fontSize={["xl", "2xl"]} textColor={linkColor}>
              {experience.title}
            </Heading>
            <Text pb={2} textColor={textColor} fontWeight="semibold" letterSpacing="0.5px">
              {experience.role}
            </Text>
            <Text pb={4} color={textColor}>
              {experience.time}
            </Text>
            <Text pb={6} color={textColor} fontSize="14px">
              {experience.description}
            </Text>

            <Box w="100%">
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

                // tag == "bootcamp" ? "blue" : tag == "code" ? "green" : tag == "collabs" ? "orange" : "gray"

                return (
                  <Badge
                    key={tag}
                    py={0.5}
                    px={1}
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
