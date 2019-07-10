import React from "react";
import deckel from "../../assets/deckel.png";
import styles from "./TitleBar.module.css";
import { Link } from "@reach/router";

export const TitleBar: React.FC = () => {
	return (
		<div className={styles.titlebar}>
			<img src={deckel} className={styles.titlebarLogo} alt="logo" />
			<Link className={styles.mainTitle} to="/">
				Engineering on tap
			</Link>
			<Link className={styles.navLink} to="/coc">
				Code of conduct
			</Link>
			<a
				className={styles.navLink}
				target={"_blank"}
				href="https://docs.google.com/forms/d/e/1FAIpQLSeVRuRMzOZrJoPIq5G7i4YYYo76vKBsdTKzstpzal3vAHYc3A/viewform?usp=pp_url"
			>
				Feedback
			</a>
		</div>
	);
};
