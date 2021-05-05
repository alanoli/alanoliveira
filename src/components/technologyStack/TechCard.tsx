import React from "react";

import styles from "./techcard.module.scss";

interface TechCardProps {
	cardTitle: string
	techSkillsList: string[]
	srcLogo: string
}

const TechCard: React.FC<TechCardProps> = ({ cardTitle, techSkillsList, srcLogo }: TechCardProps) => {
	return (
		<div className={styles.techCardRoot}>
			<div className={styles.headerDiv}>
				<h2>{cardTitle}</h2>
				{
					techSkillsList.map((item, i) => {
						return <p key={i}>{item}</p>;
					})
				}
				<img src="/glass.png" alt="" className={styles.glass} />
			</div>
			<div className={styles.bottomDiv}>
				<img src={srcLogo} alt="" />
			</div>
		</div>
	);
};

export default TechCard;