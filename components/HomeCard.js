import Link from "next/link";
import styles from "../styles/Home.module.css";

export const HomeCard = ({ title, description, url }) => {
	return (
		<>
			<Link href={url}>
				<a className={styles.card}>
					<h3>{title} &rarr;</h3>
					<p>{description}</p>
				</a>
			</Link>
		</>
	);
};
