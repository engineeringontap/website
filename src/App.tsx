import React from "react";
import styles from "./App.module.css";
import { CodeOfConduct } from "./components/CodeOfConduct/CodeOfConduct";
import { Dates } from "./components/Dates/Dates";
import { Footer } from "./components/Footer/Footer";
import { TitleBar } from "./components/Titlebar/TitleBar";

export const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<TitleBar />
			<div className={styles.content} id={"start"}>
				<h2 className={styles.sectiontitle} id={"dates"}>
					Next events
				</h2>
				<Dates />
				<h2 className={styles.sectiontitle} id={"dates"}>
					Code of conduct
				</h2>
				<CodeOfConduct />
			</div>
			<Footer />
		</div>
	);
};
