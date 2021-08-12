import data from "../data/home.json";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const HomeCard = () => {
	return (
		<>
			{data.map((home) => {
				return (
					<>
						<Link href={home.url} key={home.id}>
							<a className={styles.card}>
								<h3>{home.title} &rarr;</h3>
								<p>{home.description}</p>
							</a>
						</Link>
					</>
				);
			})}
		</>
	);
};
