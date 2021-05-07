import React, { useState, useContext, ReactNode } from "react";
import { Themes } from "../utils/enums";

type ThemeContextData = {
	toggleTheme: () => void
	theme: Themes
}

type ThemeContextProvider = {
	children: ReactNode
}

export const ThemeContext = React.createContext({} as ThemeContextData);

export const ThemeContextProvider: React.FC<ThemeContextProvider> = ({ children }) => {

	const [theme, setTheme] = useState(Themes.LIGHT);

	const toggleTheme = () => {
		if (theme === Themes.DARK) {
			setTheme(Themes.LIGHT);
			document.body.style.backgroundColor = "#f2f2f2";
		} else {
			setTheme(Themes.DARK);
			document.body.style.backgroundColor = "#393E46";
		}
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = (): ThemeContextData => {
	return useContext(ThemeContext);
};