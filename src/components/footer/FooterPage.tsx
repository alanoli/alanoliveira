import React from "react";

import SOCIAL_MEDIA_LINKS from "../../assets/socialMediaLinks";

import WhatsAppLogo from "@material-ui/icons/WhatsApp";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import GithubLogo from "@material-ui/icons/GitHub";
import MailLogo from "@material-ui/icons/Mail";

import styles from "./footerpage.module.scss";

const FooterPage: React.FC = () => {
	return (
		<div className={styles.footerPageRoot}>
			<div>
				<section>
					<h1>Alan Oliveira</h1>
					<div className={styles.divisionLine} />
				</section>
				<div className={styles.contacsList}>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.whatsApp, "_blanck")}><WhatsAppLogo /></div>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blanck")}><LinkedInLogo /></div>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.gitHub, "_blanck")}><GithubLogo /></div>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.email, "_blanck")}><MailLogo /></div>
				</div>
				<p className="footer-ref">Alan Oliveira @ 2021</p>
			</div>
		</div>
	);
};

export default FooterPage;