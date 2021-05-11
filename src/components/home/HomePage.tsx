import React, { useEffect, useRef } from "react";

import TopBar from "../../components/home/TopBar";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import HomeLandingAnimation from "../../components/home/HomeLandingAnimation";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useTypeWriter } from "../../utils/hooks";

import { useTranslation } from "react-i18next";

import { useThemeContext } from "../../contexts/ThemeContext";
import { Themes } from "../../utils/enums";
import styles from "./home.module.scss";

type HomePageProps = {
	onClickRef: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onClickRef }) => {

	const topRef = useRef(null);

	const { theme } = useThemeContext();
	const { t, i18n } = useTranslation();

	const { typeWriter } = useTypeWriter();

	useEffect(() => {
		typeWriter(t("homeSentence1"), "home-title", () => typeWriter(t("homeSentence2"), "home-subtitle"));
	}, [i18n.language]);

	return (
		<div ref={topRef} className={`${styles.homeRoot} ${theme === Themes.DARK ? styles.dark : ""}`}>
			<TopBar withArrowBack={false} />
			<div className={styles.homeContent}>
				<div className={styles.introText}>
					<h1 className="home-title"></h1>
					<h2 className="home-subtitle"></h2>
				</div>
				<HomeLandingAnimation />
				<div className={styles.bottomLearnMore} onClick={onClickRef}>
					<p>{t("aboutWhatIDo")}</p>
					<ExpandMoreIcon className={styles.expandIcon} />
				</div>
			</div>
			<ScrollToTop scrollRef={topRef} />
		</div>
	);
};

export default HomePage;