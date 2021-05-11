import React from "react";
import "../styles/globals.scss";

import { ThemeContextProvider } from "../contexts/ThemeContext";

import "../i18n";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeContextProvider>
	);

}

export default MyApp;
