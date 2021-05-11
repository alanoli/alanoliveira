import React, { useEffect } from "react";

import styles from "./scrolltotop.module.scss";

import ArrowUpWardIcon from "@material-ui/icons/ArrowUpward";

import { usePageScroll } from "../../utils/hooks";

type ScrollToTopProps = {
	scrollRef: React.MutableRefObject<any>
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollRef }) => {

	const { handleScroll, pageScrolled } = usePageScroll();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

	return (
		<button
			className={`${styles.scrollToTopIcon} ${pageScrolled ? styles.scrolled : ""}`}
			onClick={() => scrollRef.current.scrollIntoView({ behavior: "smooth" })}
		>
			<ArrowUpWardIcon />
		</button>
	);
};

export default ScrollToTop;
