import React from "react";
import styles from "./EventLocation.module.css";
import mapImage from "../../assets/map.png";
import hafenquelle from "../../assets/hafenquelle_logo.png";

export const EventLocation: React.FC<any> = () => {
	const openMaps = () => {
		window.open(
			"https://www.google.com/maps/place/Hafenquelle/@51.2120741,6.7534954,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8ca73995c0769:0x1977ed1227dfe0c5!8m2!3d51.2120741!4d6.7556841",
			"_blank"
		);
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
