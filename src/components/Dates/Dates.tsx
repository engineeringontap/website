import React from "react";
import styles from "./Dates.module.css";

export const Dates: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"dates"}>
				Next events
			</h2>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<span>Do 17. Oktober 2019, Jeopardy!</span>
					<span className={styles.listItemSubText}>
						Nach der Sommerpause starten wir wieder voll durch, mit dem besten Spaß, den du je
						gehabt haben wirst. Und zwar kostenlos! Wir treffen uns wieder in der Hafenquelle um
						diverse Biers, Colas und Snacks zu vertilgen, Jeopardy zu spielen und ordentlich
						abzunerden.
					</span>
				</li>
			</ul>
			<p>
				Got something to talk about?
				<br />
				<a
					className={styles.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://docs.google.com/forms/d/e/1FAIpQLScOA0ED0faOoeUwLef9c1nBFhAytATTx_q_i5mrn7PS73fciA/viewform?usp=pp_url"
				>
					Submit your idea!
				</a>
			</p>
		</div>
	);
};
