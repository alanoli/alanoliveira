import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import Head from "next/head";
import Link from 'next/link';

import { projectList } from "../../assets/projects";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

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
	return (
		<>
			<Head>
				<title>{`Alan Oli | ${title}`}</title>
			</Head>
			<section className={styles.projectPageRoot}>
				<nav>
					<Link href="/">
						<div>
							<ArrowBackIcon />
							<h1>Portfolio</h1>
						</div>
					</Link>
				</nav>
				<div>
					<h1>{title}</h1>
					<section className={styles.gifContainer}>
						<img src={projectGif} alt="" />
					</section>
					<section className={styles.descriptionContainer}>
						<p>{description}</p>
						<div>
							{techList.map((item, index) => {
								return (
									<span key={index}>{item}</span>
								);
							})}
						</div>
						<span>
							<div onClick={() => window.open(sourceCodeUrl, "_blank")}><GitHubIcon />Source Code</div>
							<div onClick={() => window.open(linkUrl, "_blank")}><LinkIcon />Project URL</div>
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
			{ params: { project: "gabrielamuniz" } },
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
