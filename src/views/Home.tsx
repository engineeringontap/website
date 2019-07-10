import { RouteComponentProps } from "@reach/router";
import React from "react";
import { About } from "../components/About/About";
import { CodeOfConduct } from "../components/CodeOfConduct/CodeOfConduct";
import { Dates } from "../components/Dates/Dates";
import { Bierdeckel } from "../components/Bierdeckel/Bierdeckel";

export const Home: React.FC<RouteComponentProps> = () => {
	return (
		<>
			<Bierdeckel />
			<About />
			<Dates />
			<CodeOfConduct />
		</>
	);
};
