import data from "../data/home.json";
import { Link, Text } from "@chakra-ui/react";

export const HomeCard = () => {
	return (
		<>
			{data.map((home) => {
				return (
					<Link
						href={home.url}
						key={home.id}
						m={3}
						p={["5", "6"]}
						w="90%"
						flexBasis="45%"
						textAlign="left"
						color="inherit"
						textDecoration="none"
						border="1px solid"
						borderColor="gray.500"
						borderRadius="10px"
						transition="0.15s ease"
						_hover={{
							color: "blue.400",
							borderColor: "blue.300",
							textDecoration: "none",
						}}
					>
						<Text as="h3" fontSize="2xl" fontWeight="bold" letterSpacing="1px">
							{home.title} &rarr;
						</Text>
						<Text fontSize="lg" mt={4} fontStyle="italic" textColor="gray.300">
							{home.description}
						</Text>
					</Link>
				);
			})}
		</>
	);
};
