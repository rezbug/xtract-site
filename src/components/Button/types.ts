import type { Child } from "@ezbug/slash";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
	label: string;
	type?: "button" | "submit" | "reset";
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
	startIcon?: Child;
	endIcon?: Child;
	onClick?: (event: MouseEvent) => void;
};
