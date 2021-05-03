import React from "react";

import SOCIAL_MEDIA_LINKS from "../../assets/socialMediaLinks";

import WhatsAppLogo from "@material-ui/icons/WhatsApp";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import GithubLogo from "@material-ui/icons/GitHub";
import MailLogo from "@material-ui/icons/Mail";

import styles from "./topbar.module.scss";

const TopBar: React.FC = () => {
	return (
		<div className={styles.topBarRoot}>
			<WhatsAppLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.whatsApp, "_blanck")} className={styles.topBarIcon} />
			<LinkedInLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blanck")} className={styles.topBarIcon} />
			<GithubLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.gitHub, "_blanck")} className={styles.topBarIcon} />
			<MailLogo onClick={() => window.open(SOCIAL_MEDIA_LINKS.email, "_blanck")} className={styles.topBarIcon} />
		</div>
	);
};

export default TopBar;
