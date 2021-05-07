import React from "react";

import ProjectCard from "./ProjectCard";
// import RightArrowIcon from "@material-ui/icons/ArrowForward";

import { projectList } from "../../assets/projects";
import { useTranslation } from "react-i18next";

import styles from "./portifoliopage.module.scss";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Themes } from "../../utils/enums";


const PortfolioPage: React.FC = () => {

	const { t } = useTranslation();
	const { theme } = useThemeContext();

	return (
		<div className={`${styles.portifolioPageRoot} ${theme === Themes.DARK ? styles.dark : ""}`}>
			<h1>{t("portfolioTitle")}</h1>
			<div>
				{projectList.map((item, i) => {
					return (
						<ProjectCard
							key={i}
							id={item.id}
							title={item.title}
							description={t(item.description)}
							shortDescription={t(item.shortDescription)}
							techList={item.techList}
							color={item.color}
							backgroundImagePath={item.backgroundImagePath}
						/>
					);
				})}
			</div>
			{/* <span>
				<a>Complete portfolio</a>
				<RightArrowIcon />
			</span> */}
		</div>
	);
};

export default PortfolioPage;
