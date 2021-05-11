import React from "react";

import styles from "./aboutpage.module.scss";

import { useThemeContext } from "../../contexts/ThemeContext";
import { Themes } from "../../utils/enums";
import { useTranslation } from "react-i18next";

import prefixPath from "../../utils/applicationPrefixPath";

const AboutPage: React.FC = () => {

	const { t } = useTranslation();
	const { theme } = useThemeContext();

	return (
		<div className={`${styles.aboutPageRoot} ${theme === Themes.DARK ? styles.dark : ""}`}>
			<h1>{t("aboutTitle")}</h1>
			<section>
				<img src={prefixPath + "/authorImage.png"} alt="" className="author-image" />
				<p className="description">
					{t("aboutMeDescription")}
				</p>
			</section>
		</div>
	);
};

export default AboutPage;