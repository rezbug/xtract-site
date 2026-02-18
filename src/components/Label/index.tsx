import { html } from "@ezbug/slash";
import type { Child } from "@ezbug/slash";
import styles from "./styles.module.css";

type LabelType = "default" | "outilined";


type Props = {
	type: LabelType;
	value: string;
	children:Child;
};


export function Label({type, value, children}: Props) {
	const styleMap: Record<LabelType, string> = {
		"default": styles.default,
		"outilined": styles.outilined,
	};


	const style = styleMap[type]



	return html`
	<label class=${[styles.label, style]}>
        <span>${value}</span>
		<div>${children}</div>
	</label>
	`;
}
