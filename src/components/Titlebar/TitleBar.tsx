import React from "react";
import logo from "../../assets/logo_transparent_small.png";
import styles from "./TitleBar.module.css";

export const TitleBar: React.FC = () => {
	return (
		<div className={styles.titlebar}>
			<img src={logo} className={styles.titlebarLogo} alt="logo" />
			<a className={styles.mainTitle} href="#start">
				Engineering on tap
			</a>
			{/* <a className={styles.titlelink} href="#dates">
				Next Events
			</a>
			<a className={styles.titlelink} href="#coc">
				Code of conduct
			</a> */}
		</div>
	);
};
