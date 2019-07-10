import React from "react";
import styles from "./CodeOfConduct.module.css";
import { RouteComponentProps, Link } from "@reach/router";

interface Props extends RouteComponentProps {
	fullVersion?: boolean;
}

const shortVersion = (
	<>
		Our event is dedicated to providing a harassment-free experience for everyone, regardless of
		gender, gender identity and expression, age, sexual orientation, disability, physical
		appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do
		not tolerate harassment of participants in any form. Event participants violating these rules
		will be sanctioned or expelled from the event.
	</>
);
const longVersion = (
	<>
		The event is dedicated to providing a harassment-free working environment for all, regardless of
		gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do
		not tolerate harassment of any form. All communication should be appropriate for a professional
		audience including people of many different backgrounds. Sexual language and imagery is not
		appropriate for any communication and/or talks. Be kind and do not insult or put down others.
		Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are
		not appropriate for event. Staff violating these rules should be reported to an appropriate line
		manager. These are the values to which people in the event community should aspire:
		<br />
		<ul>
			<li>Be friendly and welcoming</li>
			<li>
				Be patient
				<ul>
					<li>
						Remember that people have varying communication styles and that not everyone is using
						their native language. (Meaning and tone can be lost in translation.)
					</li>
				</ul>
			</li>
			<li>
				Be thoughtful
				<ul>
					<li>
						Productive communication requires effort. Think about how your words will be
						interpreted.
					</li>
					<li>Remember that sometimes it is best to refrain entirely from commenting.</li>
				</ul>
			</li>
			<li>
				Be respectful
				<ul>
					<li>In particular, respect differences of opinion.</li>
				</ul>
			</li>
			<li>
				Be charitable
				<ul>
					<li>Interpret the arguments of others in good faith, do not seek to disagree.</li>
					<li>When we do disagree, try to understand why.</li>
				</ul>
			</li>
			<li>
				Avoid destructive behavior:
				<ul>
					<li>
						Derailing: stay on topic; if you want to talk about something else, start a new
						conversation.
					</li>
					<li>
						Unconstructive criticism: don't merely decry the current state of affairs; offer—or at
						least solicit—suggestions as to how things may be improved.
					</li>
					<li> Snarking (pithy, unproductive, sniping comments)</li>
					<li>
						Discussing potentially offensive or sensitive issues; this all too often leads to
						unnecessary conflict.
					</li>
					<li>
						Microaggressions: brief and commonplace verbal, behavioral and environmental indignities
						that communicate hostile, derogatory or negative slights and insults to a person or
						group.
					</li>
				</ul>
			</li>
		</ul>
		<p>
			People are complicated. You should expect to be misunderstood and to misunderstand others;
			when this inevitably occurs, resist the urge to be defensive or assign blame. Try not to take
			offense where no offense was intended. Give people the benefit of the doubt. Even if the
			intent was to provoke, do not rise to it. It is the responsibility of all parties to
			de-escalate conflict when it arises.
		</p>
		<h3>Reporting incidents</h3>
		<p>
			Incidents that violate the Code of Conduct are extremely damaging to the event, and they will
			not be tolerated. The silver lining is that, in many cases, these incidents present a chance
			for the offenders, and the teams at large, to grow, learn, and become better.
		</p>
		<p>
			Please report incidents to the event organizers or send an email to{" "}
			<a className={styles.email} href="mailto:eot@sipgate.de">
				eot@sipgate.de
			</a>
			<br />
			If you want to stay anonymous, please use our{" "}
			<a
				className={styles.email}
				target={"_blank"}
				href="https://docs.google.com/forms/d/e/1FAIpQLSeVRuRMzOZrJoPIq5G7i4YYYo76vKBsdTKzstpzal3vAHYc3A/viewform?usp=pp_url"
			>
				feedback form
			</a>
			.
		</p>
	</>
);

export const CodeOfConduct: React.FC<Props> = ({ fullVersion }) => {
	return (
		<div className={styles.root}>
			<h2 className={styles.sectiontitle} id={"coc"}>
				Code of conduct
			</h2>
			<p className={styles.text}>{fullVersion ? longVersion : shortVersion}</p>
			{!fullVersion && (
				<Link className={styles.link} to={"/coc"}>
					Full version
				</Link>
			)}
		</div>
	);
};
