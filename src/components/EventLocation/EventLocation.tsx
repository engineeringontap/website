import React from "react";
import styles from "./EventLocation.module.css";
import mapImage from "../../assets/map.png";

export const EventLocation: React.FC<any> = () => {
	const openMaps = () => {
		window.open("https://goo.gl/maps/QWaYYxmsZvd7G6FH8", "_blank");
	};
	return (
		<div className={styles.root}>
			<img
				src={mapImage}
				className={styles.image}
				onClick={openMaps}
				alt="Gladbacher Straße 74, 40219 Düsseldorf"
			/>
		</div>
	);
};
