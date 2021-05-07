import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import styles from "./copyclipboard.module.scss";

type Language = {
	value: string
	label: string
}

type UseLanguageProps = {
	defaultLanguage: Language
}

type UseCopyToClipboardReturn = {
	copyItemVisible: boolean
	copyToClipboard: (copiedText: string, copiedData: string) => void
	CopiedToast: React.FC
}

// type UseLanguageReturn = {
// 	setCurrentLanguage: () => void
// 	currentLanguage: Language
// 	languageOptions: Language[]
// }

export const useCopyToClipboard = (): UseCopyToClipboardReturn => {

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

export const useLanguage = (defaultLanguage: UseLanguageProps) => {

	const languageOptions = [
		{ value: "en", label: "EN" },
		{ value: "pt", label: "PT" },
		{ value: "es", label: "ES" }
	];

	const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(currentLanguage.value);
	}, [currentLanguage]);

	return { setCurrentLanguage, currentLanguage, languageOptions };
};