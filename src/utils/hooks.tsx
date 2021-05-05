import React, { useState } from "react";

import styles from "./copyclipboard.module.scss";

export const useCopyToClipboard = () => {

	const [copyItemVisible, setCopyItemVisible] = useState(false);
	const [copiedText, setCopiedText] = useState("");

	const copyToClipboard = (copiedText: string, copiedData: string) => {
		navigator.clipboard.writeText(copiedData);
		setCopiedText(copiedText);
		setCopyItemVisible(true);
		setTimeout(() => setCopyItemVisible(false), 3000);
	};

	const CopiedToast: React.FC = () => {
		return (
			<section className={`${styles.copiedItem} ${copyItemVisible ? styles.active : ""}`}>
				<p className="text">{copiedText}</p>
			</section>
		);
	};

	return { copyItemVisible, copyToClipboard, CopiedToast };
};