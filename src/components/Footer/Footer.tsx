import React from "react";
import styles from "./Footer.module.css";
import presentedBy from "../../assets/presented_by_sipgate_white.png";

export const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<a href="https://www.sipgate.de" target="_blank" rel="noopener noreferrer">
				<img className={styles.prsentedBy} src={presentedBy} alt="Presented by sipgate" />
			</a>
		</div>
	);
};
