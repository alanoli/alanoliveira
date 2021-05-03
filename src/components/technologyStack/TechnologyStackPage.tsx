import React from "react";

import TechCard from "../../components/technologyStack/TechCard";

import styles from "./techStackPage.module.scss";

const TechnologyStackPage = () => {
	return (
		<div className={styles.technologyStackRoot}>
			<h1>Technologies</h1>
			<div>
				<TechCard
					cardTitle={"Databases"}
					techSkillsList={["MS SQL", "Postgres"]}
					srcLogo={"/sqlserver_art.png"}
				/>
				<TechCard
					cardTitle={"Backend"}
					techSkillsList={["NodeJS", "Express"]}
					srcLogo={"/nodejs_art.png"}
				/>
				<TechCard
					cardTitle={"Frontend"}
					techSkillsList={["React", "HTML5", "CSS3"]}
					srcLogo={"/react_art.png"}
				/>
			</div>
		</div>
	);
};

export default TechnologyStackPage;