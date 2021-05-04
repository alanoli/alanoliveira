import React from "react";

import ProjectCard from "./ProjectCard";
import RightArrowIcon from "@material-ui/icons/ArrowForward";

import { projectList } from "../../assets/projects";

import styles from "./portifoliopage.module.scss";

const PortfolioPage: React.FC = () => {

	return (
		<div className={styles.portifolioPageRoot}>
			<h1 className="page-title">Portifolio</h1>
			<div className="portifolio-item-list">
				{projectList.map((item, i) => {
					return (
						<ProjectCard
							key={i}
							id={item.id}
							title={item.title}
							description={item.description}
							techList={item.techList}
							color={item.color}
							backgroundImagePath={item.backgroundImagePath}
						/>
					);
				})}
			</div>
			<span>
				<a>Complete portfolio</a>
				<RightArrowIcon />
			</span>
		</div>
	);
};

export default PortfolioPage;
