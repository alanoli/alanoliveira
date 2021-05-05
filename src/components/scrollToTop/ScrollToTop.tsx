import React from "react";

import styles from "./scrolltotop.module.scss";

import ArrowUpWardIcon from "@material-ui/icons/ArrowUpward";

type ScrollToTopProps = {
	onScroll: () => void
	pageScrolled: boolean
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onScroll, pageScrolled }) => {
	return (
		<button
			className={`${styles.scrollToTopIcon} ${pageScrolled ? styles.scrolled : ""}`}
			onClick={onScroll}
		>
			<ArrowUpWardIcon />
		</button>
	);
};

export default ScrollToTop;
