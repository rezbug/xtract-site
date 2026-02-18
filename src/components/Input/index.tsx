import { createState, html, type State } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { TextInputState } from "./types";

type InputType = "text" | "email" | "password" | "number";

export type InputChangeEvent = Event & {
	target: HTMLInputElement;
};

type EventHandler = (event: InputChangeEvent, state: State<TextInputState>) => void;

type BorderStyle = "default" | "borderless"

type Props = {
	id: string;
	value: string;
	placeholder: string;
	label: string;
	type: InputType;
	style: BorderStyle;
	handler: EventHandler;
	required: "true" | "false";
	errorMessage: string;
};

const state = createState<TextInputState>({
	value: "",
	showErrorMessage: false,
	id: "",
	status: "",
});

export function Input({
	id,
	placeholder,
	type,
	style = "default",
	handler,
	required,
	errorMessage,
}: Props) {
	state.set({ ...state.get(), id: id });


	const styleMap: Record<BorderStyle, string> = {
		default: styles.default,
		borderless: styles.borderless,
	};

	const cssStyle = styleMap[style];

	const getStatusClass = () => {
		const status = state.get().status;
		if (!status) return "";
		return status === "success" ? styles.success : styles.error;
	};

	const inputHandler = (event: InputChangeEvent) => {
		if(!handler) return
		handler?.(event, state);
		toggleErrorMessage(event);
		setFocus(event);
	};

	const toggleErrorMessage = (event: InputChangeEvent) => {
		state.set({
			...state.get(),
			showErrorMessage: !event.target.value.length && required === "true",
			value: event.target.value,
		});
	};

	const setFocus = (event: InputChangeEvent) => {
		setTimeout(() => {
			const input = document.querySelector(
				`input[id=${id}]`,
			) as HTMLInputElement;
			input.focus();
		}, 10);
	};

	return html`

		<input
		id=${id}
		class=${[styles.input, getStatusClass(), cssStyle]}
		type=${type ?? "text"}
		value=${state.get().value}
		placeholder=${placeholder ?? ""}
		onkeyup=${inputHandler}
		/>
    	${
				state.get().showErrorMessage
					? html`<span class=${styles.message}>${errorMessage}</span>`
					: ""
			}

	`;
}
