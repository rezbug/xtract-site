import { createState, html, type State } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { TextInputState } from "./types";

type InputType = "text" | "email" | "password" | "number";

export type InputChangeEvent = Event & {
	target: HTMLInputElement;
};

type EventHandler = (event: InputChangeEvent, state: State<TextInputState>) => void;

type Props = {
	id: string;
	value: string;
	placeholder: string;
	label: string;
	type: InputType;
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

export function Input(props: Props) {
	state.set({ ...state.get(), id: props.id });

	const getStatusClass = () => {
		const status = state.get().status;
		if (!status) return "";
		return status === "success" ? styles.success : styles.error;
	};

	const inputHandler = (event: InputChangeEvent) => {
		props?.handler?.(event, state);
		toggleErrorMessage(event);
		setFocus(event);
	};

	const toggleErrorMessage = (event: InputChangeEvent) => {
		state.set({
			...state.get(),
			showErrorMessage: !event.target.value.length && props.required === "true",
			value: event.target.value,
		});
	};

	const setFocus = (event: InputChangeEvent) => {
		setTimeout(() => {
			const input = document.querySelector(
				`input[id=${props.id}]`,
			) as HTMLInputElement;
			input.focus();
		}, 10);
	};

	return html`
	<label class=${styles.container}>
		<span class=${styles.label}>${props.label}</span>
		<input
		id=${props.id}
		class=${[styles.input, getStatusClass()]}
		type=${props.type ?? "text"}
		value=${state.get().value}
		placeholder=${props.placeholder ?? ""}
		onkeyup=${inputHandler}
		/>
    	${
				state.get().showErrorMessage
					? html`<span class=${styles.message}>${props.errorMessage}</span>`
					: ""
			}
	</label>
	`;
}
