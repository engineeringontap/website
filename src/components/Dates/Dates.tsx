import React from "react";
import styles from "./Dates.module.css";

export const Dates: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"dates"}>
				Next events
			</h2>
			<ul className={styles.list}>
				<li className={styles.listItem}>17. Mai 2019, Going Serverless with Knative</li>
				<li className={styles.listItem}>21. Juni 2019, to be announced</li>
				<li className={styles.listItem}>19. Juli 2019, to be announced</li>
				<li className={styles.listItem}>16. August 2019, to be announced</li>
				<li className={styles.listItem}>20. September 2019, to be announced</li>
				<li className={styles.listItem}>18. Oktober 2019, to be announced</li>
				<li className={styles.listItem}>19. November 2019, to be announced</li>
			</ul>
		</div>
	);
};
