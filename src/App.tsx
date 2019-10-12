import { Router } from "@reach/router";
import React from "react";
import styles from "./App.module.css";
import { CodeOfConduct } from "./components/CodeOfConduct/CodeOfConduct";
import { EventLocation } from "./components/EventLocation/EventLocation";
import { Footer } from "./components/Footer/Footer";
import { TitleBar } from "./components/Titlebar/TitleBar";
import { Home } from "./views/Home";

// https://github.com/reach/router/issues/63
const RouterComponent: React.FC = ({ children }) => {
	return <>{children}</>;
};

export const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<TitleBar />
			<div className={styles.content} id={"start"}>
				<Router className={styles.routerContainer} primary={false} component={RouterComponent}>
					<Home path="/" />
					<CodeOfConduct fullVersion={true} path="/coc" />
				</Router>
				<EventLocation />
			</div>
			<Footer />
		</div>
	);
};
