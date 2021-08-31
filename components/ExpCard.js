import { VStack, StackDivider, Box, Heading, Text } from "@chakra-ui/react";
import data from "../data/experiences.json";

export const ExpCard = () => {
	return (
		<VStack
			divider={<StackDivider borderColor="gray.200" />}
			p={["6", "12"]}
			spacing={8}
		>
			{data.map((experience) => {
				return (
					<Box h="100%" w="100%" key={experience.id}>
						<Heading as="h3" fontSize="2xl" textColor="blue.300">
							{experience.title}
						</Heading>
						<Text
							my={3}
							fontStyle="italic"
							fontWeight="semibold"
							textColor="gray.300"
							letterSpacing="1px"
						>
							{experience.role}
						</Text>
						<Text my={5} fontSize="lg">
							<Box as="strong">{experience.time}</Box> -{" "}
							{experience.description}
						</Text>
						<Box w="100%">
							{experience.tags.map((tag) => (
								<Box
									as="span"
									key={tag}
									display="inline-block"
									textColor="gray.300"
									bgColor="gray.700"
									px={3}
									pb={1}
									mx={1}
									my={2}
									borderRadius="10px"
									fontWeight="semibold"
								>
									{tag}
								</Box>
							))}
						</Box>
					</Box>
				);
			})}
		</VStack>
	);
};
