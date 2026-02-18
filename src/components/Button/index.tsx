import { type Child, html } from "@ezbug/slash";
import styles from "./styles.module.css";

type Variant = "primary" | "secondary" | "tertiary";

type Props = {
 handle: (e: MouseEvent) => void;
 children: Child
 variant: Variant;
}

export function Button(props: Props) {

	const variantClassMap: Record<Variant, string> = {
		primary: styles.primary,
		secondary: styles.secondary,
		tertiary: styles.tertiary,
	};

	const variant = props.variant
		? variantClassMap[props.variant]
		: variantClassMap.primary;




	return html`
		<button
			class=${[styles.button, variant]}
			onclick=${(event: MouseEvent) => props.handle?.(event)}
		>
			${props.children}
		</button>
	`;
}
