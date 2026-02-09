import { html } from "@ezbug/slash";
import styles from "./styles.module.css";

type Props = {
	src: string;
	alt?: string;
	height?: string; // ex: "320px"
};

export function Card(props: Props) {
	return html`
		<div class=${styles.card}>
			<img
				class=${styles.image}
				src=${props.src}
				alt=${props.alt ?? ""}
				loading="lazy"
				decoding="async"
			/>
		</div>
	`;
}

