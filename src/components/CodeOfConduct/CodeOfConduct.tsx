import React from "react";
import styles from "./CodeOfConduct.module.css";

export const CodeOfConduct: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"coc"}>
				Code of conduct
			</h2>
			<p className={styles.text}>
				Our event is dedicated to providing a harassment-free experience for everyone, regardless of
				gender, gender identity and expression, age, sexual orientation, disability, physical
				appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
				We do not tolerate harassment of participants in any form. Event participants violating
				these rules may be sanctioned or expelled from the event.
			</p>
		</div>
	);
};
