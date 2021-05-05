import React, { useEffect, useRef, useState } from "react";

import TopBar from "../../components/home/TopBar";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import HomeLandingAnimation from "../../components/home/HomeLandingAnimation";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./home.module.scss";

type HomePageProps = {
	onClickRef: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onClickRef }) => {

	const [pageScrolled, setPageScrolled] = useState(false);
	const topRef = useRef(null);

	const handleScroll = () => {
		const offset = window.scrollY;
		console.log(offset);
		if (offset >= 1000) {
			setPageScrolled(true);
		} else {
			setPageScrolled(false);
		}
	};

	useEffect(() => {
		typeWriter("Hi, I'm Alan", "home-title", () => typeWriter("I code ideas into software", "home-subtitle", ""));

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
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
		<div ref={topRef} className={styles.homeRoot}>
			<TopBar />
			<div className={styles.homeContent}>
				<div className={styles.introText}>
					<h1 className="home-title"></h1>
					<h2 className="home-subtitle"></h2>
				</div>
				<HomeLandingAnimation />
				<div className={styles.bottomLearnMore} onClick={onClickRef}>
					<p>Learn more about what I do</p>
					<ExpandMoreIcon className={styles.expandIcon} />
				</div>
			</div>
			<ScrollToTop
				onScroll={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
				pageScrolled={pageScrolled}
			/>
		</div>
	);
};

export default HomePage;