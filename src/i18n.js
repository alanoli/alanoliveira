import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./locales/en/translations";
import { TRANSLATIONS_PT } from "./locales/pt/translations";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: TRANSLATIONS_EN
			},
			pt: {
				translation: TRANSLATIONS_PT
			}
		},
		fallbackLng: "en" //TODO: not working
	});