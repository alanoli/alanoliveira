import React from "react";

import styles from "./techcard.module.scss";

// import Glass from "../../assets/glass.svg";

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
				{/* <img src={Glass} alt="" className="glass" /> */}
			</div>
			<div className={styles.bottomDiv}>
				<img src={srcLogo} alt="" />
			</div>
		</div>
	);
};

export default TechCard;