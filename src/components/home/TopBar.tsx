import React from "react";
import Link from "next/link";

import Select from "react-select";
import styles from "./topbar.module.scss";

import SOCIAL_MEDIA_LINKS from "../../assets/socialMediaLinks";

import WhatsAppLogo from "@material-ui/icons/WhatsApp";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import GithubLogo from "@material-ui/icons/GitHub";
import MailLogo from "@material-ui/icons/Mail";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import { Themes } from "../../utils/enums";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

import { useCopyToClipboard, useLanguage } from "../../utils/hooks";

type TopBarProps = {
	withArrowBack: boolean
}

const TopBar: React.FC<TopBarProps> = ({ withArrowBack }) => {

	const {
		copyToClipboard,
		CopiedToast
	} = useCopyToClipboard();

	const {
		setCurrentLanguage,
		currentLanguage,
		languageOptions
	} = useLanguage();

	const { t } = useTranslation();

	const { toggleTheme, theme } = useThemeContext();

	return (
		<>
			<div className={`${styles.topBarRoot} ${theme === Themes.DARK ? styles.dark : ""}`}>
				<Link href={"/"}>
					{withArrowBack ? <ArrowBackIcon className={styles.arrowBack} /> : ""}
				</Link>
				<div className={styles.topBarMenuOptions}>
					<span className={styles.darkMode} onClick={toggleTheme}>{theme === Themes.DARK ? <Brightness7Icon /> : <Brightness3Icon />}</span>
					<Select
						options={languageOptions}
						value={currentLanguage}
						onChange={(selectedOption) => setCurrentLanguage(selectedOption)}
						isSearchable={false}
						styles={{
							control: (provided, state) => ({
								...provided,
								color: "white",
								backgroundColor: "none"
							}),
							singleValue: (provided, state) => ({
								...provided,
								color: theme === Themes.DARK ? "white" : "black"
							}),
							option: (provided, state) => ({
								...provided,
								color: "black"
							})
						}}
					/>
					<WhatsAppLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.whatsApp, "_blanck")} className={styles.topBarIcon + " " + styles.wppIcon} />
					<LinkedInLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blanck")} className={styles.topBarIcon + " " + styles.linkedInIcon} />
					<GithubLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.gitHub, "_blanck")} className={styles.topBarIcon + " " + styles.githubIcon} />
					<MailLogo onClick={() => copyToClipboard(t("emailCopied"), SOCIAL_MEDIA_LINKS.email)} className={styles.topBarIcon} />
				</div>
			</div>
			<CopiedToast />
		</>
	);
};

export default TopBar;
