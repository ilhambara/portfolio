import Image from "next/image";
import { motion } from "framer-motion";
import { OpenGraph } from "../components/OpenGraph";
import { HomeCard } from "../components/HomeCard";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<OpenGraph />

			<Flex
				flexDirection={["column-reverse", "row"]}
				justifyContent="center"
				alignItems="center"
			>
				<Flex
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
					px={4}
				>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0.6,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 0.3,
								},
							},
						}}
					>
						<Heading as="h1" fontSize={["4xl", "5xl"]}>
							Howdy, I am{" "}
							<Link
								textColor="blue.400"
								href="https://read.cv/ilhambara"
								isExternal
							>
								Bara!
							</Link>
						</Heading>
						<Text fontSize="lg" my={5}>
							I often introduce myself as a web developer
						</Text>
					</motion.div>
				</Flex>
				<motion.div
					drag
					dragConstraints={{
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}
					dragElastic={0.15}
					dragTransition={{
						bounceStiffness: 600,
						bounceDamping: 10,
					}}
				>
					<Image
						src="/img/memoji-me.png"
						width={240}
						height={240}
						alt="Home memoji"
						quality={90}
					/>
				</motion.div>
			</Flex>

			<Flex
				flexDirection={["column", "row"]}
				alignItems="center"
				justifyContent="center"
				flexWrap="wrap"
				w="100%"
				maxW="800px"
			>
				<HomeCard />
			</Flex>
		</>
	);
}
