import React from "react";
import styles from "./Bierdeckel.module.css";
import deckel from "../../assets/deckel.png";

export const Bierdeckel: React.FC = () => {
	return <img className={styles.deckel} src={deckel} alt="deckel" />;
};
