import React from "react";
import styles from "./About.module.css";

export const About: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"dates"}>
				About
			</h2>
			<p className={styles.text}>
				The worldwide developer community offers countless events with sales events, workshops and
				tutorials. Our new event engineering on tap is the opposite of the known formats. We have no
				stage and no spotlight. Instead there is a counter, beer (or limo) and screens to show code.
				Devs and other tech people talk about the latest tools, trends and things that keep them
				busy.
			</p>
		</div>
	);
};
