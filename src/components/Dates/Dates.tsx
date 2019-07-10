import React from "react";
import styles from "./Dates.module.css";

export const Dates: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"dates"}>
				Next events
			</h2>
			<ul className={styles.list}>
				<li className={styles.listItem}>20. September 2019, to be announced</li>
				<li className={styles.listItem}>18. Oktober 2019, to be announced</li>
				<li className={styles.listItem}>19. November 2019, to be announced</li>
			</ul>
			<p>
				Got something to talk about?
				<br />
				<a
					className={styles.link}
					target="_blank"
					href="https://docs.google.com/forms/d/e/1FAIpQLScOA0ED0faOoeUwLef9c1nBFhAytATTx_q_i5mrn7PS73fciA/viewform?usp=pp_url"
				>
					Submit your idea!
				</a>
			</p>
		</div>
	);
};
