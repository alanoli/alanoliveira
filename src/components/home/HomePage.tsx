import React, { useEffect } from "react";

import TopBar from "../../components/home/TopBar";
import HomeLandingAnimation from "../../components/home/HomeLandingAnimation";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./home.module.scss";

const HomePage: React.FC = () => {

	useEffect(() => {
		typeWriter("Hi, I'm Alan", "home-title", () => typeWriter("I code ideas into software", "home-subtitle", ""));
	}, []);

	const typeWriter = (text: string, className: string, callBack, currentLetterPosition = 0) => {
		if (currentLetterPosition < (text.length)) {
			document.getElementsByClassName(className)[0].innerHTML = text.substring(0, currentLetterPosition + 1);
			setTimeout(() => {
				typeWriter(text, className, callBack, currentLetterPosition + 1);
			}, 100);
		} else if (typeof callBack == "function") {
			setTimeout(() => {
				callBack();
			}, 300);
		}
	};

	return (
		<div className={styles.homeRoot}>
			<TopBar />
			<div className={styles.homeContent}>
				<div className={styles.introText}>
					<h1 className="home-title"></h1>
					<h2 className="home-subtitle"></h2>
				</div>
				<HomeLandingAnimation />
				<div className={styles.bottomLearnMore}>
					<p>Learn more about what I do</p>
					<ExpandMoreIcon className={styles.expandIcon} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;