import React from "react";

import styles from "./aboutpage.module.scss";

const AboutPage: React.FC = () => {
	return (
		<div className={styles.aboutPageRoot}>
			<h1>About me</h1>
			<section>
				<img src={"/authorImage.png"} alt="" className="author-image" />
				<p className="description">
					{`I live in Minas Gerais, Brazil.
					Currently graduating in Software Engineering.
					I’ve been working with IT in a company for
					more then 4 years now.
					Have experiences with software development
					outside company, such as a freelancer.`}
				</p>
			</section>
		</div>
	);
};

export default AboutPage;