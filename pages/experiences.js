import data from "../data/experiences.json";
import Head from "next/head";
import styles from "../styles/Experiences.module.css";
import components from "../styles/Components.module.css";

export default function Experiences() {
	return (
		<div className={components.container}>
			<Head>
				<title>Experiences | Next Portfolio</title>
				<link
					rel="icon"
					href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico"
				/>
			</Head>

			<main className={components.main}>
				<div className={styles.title}>
					<h1>Experiences</h1>
				</div>
				<div className={styles.background__experiences}>
					<div className={styles.experiences}>
						<div className={styles.detail__experiences}>
							{data.map((experience) => {
								return (
									<>
										<div key={experience.id}>
											<h3>{experience.title}</h3>
											<p>{experience.role}</p>
											<p>
												{experience.time} - {experience.description}
											</p>
											<p className={styles.text__tag}>{experience.tags}</p>
										</div>
										<hr className={styles.hr__line}></hr>
									</>
								);
							})}
						</div>
					</div>
				</div>
				<div className={components.back__button}>
					<a href="/">&larr; Home</a>
				</div>
			</main>
		</div>
	);
}
