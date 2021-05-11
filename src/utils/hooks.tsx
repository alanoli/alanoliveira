import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import styles from "./copyclipboard.module.scss";

type Language = {
	value: string
	label: string
}

type UseCopyToClipboardReturn = {
	copyItemVisible: boolean
	copyToClipboard: (copiedText: string, copiedData: string) => void
	CopiedToast: React.FC
}

type UseLanguageReturn = {
	setCurrentLanguage: any
	currentLanguage: Language
	languageOptions: Language[]
}

type UseTypeWriterReturn = {
	typeWriter: (text: string, className: string, callBack?: (any: any) => any, currentLetterPosition?: number) => void
}

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

export const useLanguage = (): UseLanguageReturn => {

	const languageOptions = [
		{ value: "en", label: "EN" },
		{ value: "pt", label: "PT" },
		{ value: "es", label: "ES" }
	];

	const [currentLanguage, setCurrentLanguage] = useState({ value: "en", label: "EN" });
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(currentLanguage.value);
	}, [currentLanguage]);

	return { setCurrentLanguage, currentLanguage, languageOptions };
};

export const useTypeWriter = (): UseTypeWriterReturn => {
	const typeWriter = (text: string, className: string, callBack, currentLetterPosition = 0) => {
		if (currentLetterPosition < (text.length)) {
			document.getElementsByClassName(className)[0].innerHTML = text.substring(0, currentLetterPosition + 1);
			setTimeout(() => {
				typeWriter(text, className, callBack, currentLetterPosition + 1);
			}, 50);
		} else if (typeof callBack == "function") {
			setTimeout(() => {
				callBack();
			}, 300);
		}
	};

	return { typeWriter };
};

export const usePageScroll = () => {
	const [pageScrolled, setPageScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset >= 1000) {
			setPageScrolled(true);
		} else {
			setPageScrolled(false);
		}
	};
	return { handleScroll, pageScrolled };
};