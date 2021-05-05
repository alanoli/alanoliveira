import React from "react";

import TechCard from "../../components/technologyStack/TechCard";

import styles from "./techStackPage.module.scss";

const TechnologyStackPage: React.FC = () => {
	return (
		<div className={styles.technologyStackRoot}>
			<h1>Technologies</h1>
			<div>
				<TechCard
					cardTitle={"Frontend"}
					techSkillsList={["React", "NextJS", "HTML5", "CSS3"]}
					srcLogo={"/next_art.png"}
				/>
				<TechCard
					cardTitle={"Backend"}
					techSkillsList={["NodeJS", "Express", ".NET Core", "REST APIs"]}
					srcLogo={"/nodejs_art.png"}
				/>
				<TechCard
					cardTitle={"Databases"}
					techSkillsList={["MS SQL", "Postgres"]}
					srcLogo={"/sqlserver_art.png"}
				/>
			</div>
		</div>
	);
};

export default TechnologyStackPage;