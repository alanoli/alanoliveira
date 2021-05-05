import React, { useRef } from "react";

import HomePage from "../components/home/HomePage";
import TechnologyStackPage from "../components/technologyStack/TechnologyStackPage";
import PortfolioPage from "../components/portifolio/PortfolioPage";
import AboutPage from "../components/about/AboutPage";
import FooterPage from "../components/footer/FooterPage";

const Home: React.FC = () => {

	const scrollToRef = useRef(null);

	return (
		<>
			<HomePage onClickRef={() => scrollToRef.current.scrollIntoView({ behavior: "smooth" })} />
			<TechnologyStackPage scrollToRef={scrollToRef} />
			<PortfolioPage />
			<AboutPage />
			<FooterPage />
		</>
	);
};

export default Home;