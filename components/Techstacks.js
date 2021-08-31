import styles from "../styles/About.module.css";

const Techstacks = ({ skills }) => {
	// console.log(skills);
	console.log(skills);

	return (
		<div>
			{skills.map((skill) => (
				<div key={skill.id}>
					<h1>{skill.title}</h1>
					{skill.items.map((item) => (
						<ul>
							<li>{item}</li>
						</ul>
					))}
				</div>
			))}
		</div>
	);
};

export default Techstacks;
