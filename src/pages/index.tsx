import React from "react";
// import Head from "next/head";
// import Image from "next/image";
import styles from "./home.module.css";

import HomePage from "../components/home/HomePage";
import TechnologyStackPage from '../components/technologyStack/TechnologyStackPage';
import PortifolioPage from '../components/portifolio/PortifolioPage';
import AboutPage from '../components/about/AboutPage';
import FooterPage from '../components/footer/FooterPage';

const Home: React.FC = () => {
	return (
		<>
			<HomePage />
			<TechnologyStackPage />
			<PortifolioPage />
			<AboutPage />
			<FooterPage />
		</>
	);
};

export default Home;