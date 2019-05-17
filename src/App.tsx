import React from "react";
import styles from "./App.module.css";
import deckel from "./assets/deckel.png";
import { About } from "./components/About/About";
import { CodeOfConduct } from "./components/CodeOfConduct/CodeOfConduct";
import { Dates } from "./components/Dates/Dates";
import { EventLocation } from "./components/EventLocation/EventLocation";
import { Footer } from "./components/Footer/Footer";
import { TitleBar } from "./components/Titlebar/TitleBar";

export const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<TitleBar />
			<div className={styles.content} id={"start"}>
				<img className={styles.deckel} src={deckel} alt="deckel" />

				<About />
				<Dates />

				<CodeOfConduct />

				<EventLocation />
			</div>
			<Footer />
		</div>
	);
};
