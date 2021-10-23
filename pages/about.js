import Head from "next/head";
import data from "../data/about.json";
import socials from "../data/socials.json";
import {
	Box,
	Flex,
	Grid,
	Heading,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";

export default function About() {
	return (
		<>
			<Head>
				<title>About | Next Portfolio</title>
			</Head>

			<Box mb={10}>
				<Heading as="h1" fontSize="4xl">
					About
				</Heading>
			</Box>

			<Flex flexDirection="column" bgColor="#12151d" p={6} borderRadius="5px">
				<Box>
					<Heading as="h3" fontSize="2xl">
						About
					</Heading>
					<Text fontSize="lg" my={4} textColor="gray.300">
						Hi, I'm passionately curious about anything related to web
						development.
					</Text>
					<Text fontSize="lg" textColor="gray.300">
						I usually contribute to open source projects, exploring some useful
						resources, and taking any courses to rank up my skills. Also working
						on paid projects if there's opportunity.
					</Text>
				</Box>

				<Box>
					<Heading as="h3" fontSize="2xl" mt={10} mb={4}>
						TechStacks
					</Heading>
					<Grid
						templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
						gridGap={4}
					>
						{data.map((skill) => (
							<Box key={skill.id}>
								<Heading as="h5" fontSize="lg" my={4}>
									{skill.title}
								</Heading>
								<UnorderedList m="unset" textColor="gray.300">
									{skill.items.map((item) => (
										<ListItem
											key={item}
											listStyleType="none"
											fontSize="md"
											my={1}
										>
											{item}
										</ListItem>
									))}
								</UnorderedList>
							</Box>
						))}
					</Grid>
				</Box>

				<Box>
					<Heading as="h3" fontSize="2xl" mt={10} mb={4}>
						Socials
					</Heading>
					<UnorderedList m="unset">
						{socials.map((social) => (
							<ListItem
								key={social.id}
								listStyleType="none"
								my={1}
								textColor="gray.300"
							>
								{social.social} –{" "}
								<Box as="span" textColor="blue.400">
									<Link href={social.canonical_url} isExternal>
										{social.slug}
									</Link>
								</Box>
							</ListItem>
						))}
					</UnorderedList>
				</Box>
			</Flex>

			<Flex alignSelf="flex-end">
				<Link href="/" fontSize="xl" fontWeight="semibold" m={4}>
					&larr; Home
				</Link>
			</Flex>
		</>
	);
}
