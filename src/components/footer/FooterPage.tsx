import React from "react";

import SOCIAL_MEDIA_LINKS from "../../assets/socialMediaLinks";

import WhatsAppLogo from "@material-ui/icons/WhatsApp";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import GithubLogo from "@material-ui/icons/GitHub";
import MailLogo from "@material-ui/icons/Mail";

import styles from "./footerpage.module.scss";

import { useTranslation } from "react-i18next";

import { useCopyToClipboard } from "../../utils/hooks";

const FooterPage: React.FC = () => {

	const {
		copyToClipboard,
		CopiedToast
	} = useCopyToClipboard();

	const { t } = useTranslation();

	return (
		<div className={styles.footerPageRoot}>
			<div>
				<section>
					<h1>Alan Oliveira</h1>
					<div className={styles.divisionLine} />
				</section>
				<div className={styles.contacsList}>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.whatsApp, "_blanck")}><WhatsAppLogo className={styles.wppIcon} /></div>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blanck")}><LinkedInLogo className={styles.linkedInIcon} /></div>
					<div onClick={() => window.open(SOCIAL_MEDIA_LINKS.gitHub, "_blanck")}><GithubLogo className={styles.githubIcon} /></div>
					<div onClick={() => copyToClipboard(t("emailCopied"), SOCIAL_MEDIA_LINKS.email)}><MailLogo className={styles.githubIcon} /></div>
				</div>
				<p className="footer-ref">Alan Oliveira @ 2021</p>
			</div>
			<CopiedToast />
		</div>
	);
};

export default FooterPage;