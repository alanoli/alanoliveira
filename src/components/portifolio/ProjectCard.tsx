import React from "react";
import Link from 'next/link';

import styles from "./projectcard.module.scss";

const ProjectCard = ({ title, description, backgroundImagePath, techList, color, id }) => {

	const cardButtonColors = {
		red: "#bf3030",
		green: "#55bf30",
		blue: "#3166c9",
		brown: "#c7782e"
	};

	const cardColors = {
		red: "#681919",
		green: "#2f6b19",
		blue: "#173263",
		brown: "#613a15"
	};

	return (
		<div className={styles.projectCardRoot}>
			<div className={styles.cardInner}>
				<div className={styles.cardFront}>
					<div className={styles.cardHeaderContainer}>
						<img src={backgroundImagePath} alt="project-image" />
						<h2>{title}</h2>
					</div>
					<div className={styles.bodyContainer}>
						<p>{description}</p>
					</div>
				</div>
				<div style={{ backgroundColor: cardButtonColors[color] }} className={styles.cardBack}>
					<p>Details</p>
					<div>
						<h2>Technologies</h2>
						<section>
							{techList.map((item, i) => {
								return (
									<div key={i}>{item}</div>
								);
							})}
						</section>
					</div>
					<Link href={`/projects/${id}`}>
						<span style={{ backgroundColor: cardColors[color] }} className={styles.seeMoreButton}>See more !</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;