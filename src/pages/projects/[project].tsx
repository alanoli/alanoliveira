import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import { projectList } from "../../assets/projects";
import TopBar from "../../components/home/TopBar";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Themes } from "../../utils/enums";

import styles from "./project.module.scss";

type ProjectProps = {
	title: string
	description: string
	techList: string[]
	projectGif: string
	sourceCodeUrl: string
	linkUrl: string
}

const ProjectPage: React.FC<ProjectProps> = ({
	title,
	description,
	techList,
	projectGif,
	sourceCodeUrl,
	linkUrl
}) => {

	const { t } = useTranslation();
	const { theme } = useThemeContext();

	return (
		<>
			<Head>
				<title>{`Alan Oli | ${title}`}</title>
			</Head>
			<section className={`${styles.projectPageRoot} ${theme === Themes.DARK ? styles.dark : ""}`}>
				<TopBar withArrowBack/>
				{/* <nav>
					<Link href="/">
						<button>
							<ArrowBackIcon />
							<h1>{t("portfolioTitle")}</h1>
						</button>
					</Link>
				</nav> */}
				<div className={styles.projectDetails}>
					<h1>{title}</h1>
					<section className={styles.gifContainer}>
						<img src={projectGif} alt="" />
					</section>
					<section className={styles.descriptionContainer}>
						<p>{t(description)}</p>
						<div>
							{techList.map((item, index) => {
								return (
									<span key={index}>{item}</span>
								);
							})}
						</div>
						<span>
							<button onClick={() => window.open(sourceCodeUrl, "_blank")}><GitHubIcon />{t("sourceCode")}</button>
							{
								linkUrl !== "" ?
									<button onClick={() => window.open(linkUrl, "_blank")}><LinkIcon />{t("projectUrl")}</button>
									: ""
							}
						</span>
					</section>
				</div>
			</section>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { project: "mrgelado" } },
			{ params: { project: "tricacau" } },
			{ params: { project: "podcastr" } },
			{ params: { project: "bethehero" } }
		],
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async (context) => {

	const currentProject = projectList.find((item) => {
		if (item.id == context.params.project) {
			return true;
		}
	});

	return {
		props: {
			title: currentProject.title,
			description: currentProject.description,
			techList: currentProject.techList,
			projectGif: currentProject.projectGif,
			sourceCodeUrl: currentProject.sourceCodeUrl,
			linkUrl: currentProject.linkUrl
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};

export default ProjectPage;
