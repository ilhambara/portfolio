import Image from "next/image";
import styles from "../styles/Home.module.css";
import components from "../styles/Components.module.css";
import { motion } from "framer-motion";
import { OpenGraph } from "../components/OpenGraph";
import { HomeCard } from "../components/HomeCard";
import {
	homeDataOne,
	homeDataTwo,
	homeDataThree,
	homeDataFour,
} from "../data/Home";

export default function Home() {
	return (
		<div className={components.container}>
			<OpenGraph />

			<main className={components.main}>
				<div className={styles.header}>
					<div className={styles.header__title}>
						<h1 className={styles.title}>
							Howdy, I am{" "}
							<a
								href="https://read.cv/ilhambara"
								target="_blank"
								rel="noopener noreferrer"
							>
								Bara!
							</a>
						</h1>
						<p className={styles.description}>
							I often introduce myself as a{" "}
							<code className={styles.code}>web developer</code>
						</p>
					</div>
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
						className={styles.header__image}
					>
						<Image
							src="/img/memoji-me.png"
							width={240}
							height={240}
							alt="Home memoji"
							quality={90}
						/>
					</motion.div>
				</div>

				<div className={styles.grid}>
					<HomeCard {...homeDataOne} />
					<HomeCard {...homeDataTwo} />
					<HomeCard {...homeDataThree} />
					<HomeCard {...homeDataFour} />
				</div>
			</main>
		</div>
	);
}
