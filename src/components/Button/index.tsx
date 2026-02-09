import { html } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./types";

const getVariantClass = (variant: ButtonVariant) => {
	return styles[variant];
};

const getSizeClass = (size: ButtonSize) => {
	return styles[size];
};

export function Button(props: ButtonProps) {
	const variant = props.variant ?? "primary";
	const size = props.size ?? "md";

	return html`
		<button
			type=${props.type ?? "button"}
			class=${[
				styles.button,
				getVariantClass(variant),
				getSizeClass(size),
				props.fullWidth ? styles.fullWidth : "",
				props.disabled ? styles.disabled : "",
			]}
			disabled=${props.disabled ?? false}
			onclick=${props.onClick}
		>
			${
				props.startIcon
					? html`<span class=${styles.icon}>${props.startIcon}</span>`
					: ""
			}
			<span class=${styles.label}>${props.label}</span>
			${
				props.endIcon
					? html`<span class=${styles.icon}>${props.endIcon}</span>`
					: ""
			}
		</button>
	`;
}
