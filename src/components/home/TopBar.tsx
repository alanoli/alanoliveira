import React from "react";

import SOCIAL_MEDIA_LINKS from "../../assets/socialMediaLinks";

import WhatsAppLogo from "@material-ui/icons/WhatsApp";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import GithubLogo from "@material-ui/icons/GitHub";
import MailLogo from "@material-ui/icons/Mail";

import styles from "./topbar.module.scss";

import { useCopyToClipboard } from "../../utils/hooks";

const TopBar: React.FC = () => {

	const {
		copyToClipboard,
		CopiedToast
	} = useCopyToClipboard();

	return (
		<>
			<div className={styles.topBarRoot}>
				<WhatsAppLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.whatsApp, "_blanck")} className={styles.topBarIcon + " " + styles.wppIcon} />
				<LinkedInLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blanck")} className={styles.topBarIcon + " " + styles.linkedInIcon} />
				<GithubLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.gitHub, "_blanck")} className={styles.topBarIcon + " " + styles.githubIcon} />
				<MailLogo onClick={() => copyToClipboard("Email copied!", SOCIAL_MEDIA_LINKS.email)} className={styles.topBarIcon} />
			</div>
			<CopiedToast />
		</>
	);
};

export default TopBar;
