import React from "react";
import styles from "./EventLocation.module.css";
import mapImage from "../../assets/map.png";
import hafenquelle from "../../assets/hafenquelle_logo.png";

export const EventLocation: React.FC<any> = () => {
	const openMaps = () => {
		window.open("https://goo.gl/maps/QWaYYxmsZvd7G6FH8", "_blank");
	};
	return (
		<div className={styles.root}>
			<img src={hafenquelle} className={styles.hafenquelle} alt="Hafenquelle" />
			<p>
				The event takes place in our own pub. We provide beer, snacks, screens and internet. You are
				the community that brings it to life.
			</p>
			<img
				src={mapImage}
				className={styles.image}
				onClick={openMaps}
				alt="Gladbacher Straße 74, 40219 Düsseldorf"
			/>
		</div>
	);
};
