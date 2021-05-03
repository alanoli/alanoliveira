import React from "react";

import ProjectCard from "../../components/portifolio/ProjectCard";

import styles from "./portifoliopage.module.scss";

const PortifolioPage = () => {

	const portifolio = [{
		title: "Mr Gelado",
		description: "Web App for selling candies and icecreams",
		techList: ["React", "CSS | SASS", "NodeJS"],
		color: "red",
		backgroundImagePath: "/project_header_div_red.svg"
	}, {
		title: "Mr Gelado",
		description: "Web App for selling candies and icecreams",
		techList: ["React", "CSS | SASS", "NodeJS"],
		color: "green",
		backgroundImagePath: "/project_header_div_green.svg"
	}, {
		title: "Mr Gelado",
		description: "Web App for selling candies and icecreams",
		techList: ["React", "CSS | SASS", "NodeJS"],
		color: "blue",
		backgroundImagePath: "/project_header_div_blue.svg"
	}, {
		title: "Mr Gelado",
		description: "Web App for selling candies and icecreams",
		techList: ["React", "CSS | SASS", "NodeJS"],
		color: "brown",
		backgroundImagePath: "/project_header_div_brown.svg"
	}];

	return (
		<div className={styles.portifolioPageRoot}>
			<h1 className="page-title">Portifolio</h1>
			<div className="portifolio-item-list">
				{portifolio.map((item, i) => {
					return (
						<ProjectCard
							key={i}
							title={item.title}
							description={item.description}
							techList={item.techList}
							color={item.color}
							backgroundImagePath={item.backgroundImagePath}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PortifolioPage;