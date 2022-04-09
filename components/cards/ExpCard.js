import {
  VStack,
  StackDivider,
  Box,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import data from "../../data/experiences.json";

export const ExpCard = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.600" />}
      p={["6", "12"]}
      spacing={[8, 12]}
    >
      {data.map((experience) => {
        return (
          <Box h="100%" w="100%" key={experience.id}>
            <Heading
              pb={6}
              as="h3"
              fontSize={["xl", "2xl"]}
              textColor="blue.300"
            >
              {experience.title}
            </Heading>
            <Text
              pb={2}
              textColor="gray.300"
              fontWeight="semibold"
              letterSpacing="0.5px"
            >
              {experience.role}
            </Text>
            <Text pb={2} color="gray.400">
              {experience.time}
            </Text>
            <Text pb={6} color="gray.400" fontSize="14px">
              {experience.description}
            </Text>
            <Box w="100%">
              {experience.tags.map((tag) => (
                <Badge
                  key={tag}
                  mr={3}
                  letterSpacing="0.5px"
                  colorScheme={
                    tag == "code"
                      ? "green"
                      : tag == "collabs"
                      ? "orange"
                      : "gray"
                  }
                >
                  {tag}
                </Badge>
              ))}
            </Box>
          </Box>
        );
      })}
    </VStack>
  );
};
