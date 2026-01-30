import { createState, html } from "@ezbug/slash";
import styles from "./styles.module.css";

type InputType = "text" | "email" | "password" | "number";

export type InputChangeEvent = Event & {
	target: HTMLInputElement;
};

type EventHandler = (event: InputChangeEvent) => void;

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

type ErrorHandler = (condition: boolean, message: string) => void;

const state = createState({
	value: "",
	showErrorMessage: false,
	id: "",
});

export function Input(props: Props) {
	state.set({ ...state.get(), id: props.id });

	const throwError = (condition: boolean, message: string) => {
		if (condition) {
			throw new Error(message);
		}
	};

	const execute = (
		condition: boolean,
		errorHandler: ErrorHandler,
		successHandler: EventHandler,
	) => {
		errorHandler(condition, "handler prop is not defined and must be.");
		return (event: InputChangeEvent) => {
			successHandler(event);
			toggleErrorMessage(event);
			setFocus(event);
		};
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
	<label>
		<span class=${styles.label}>${props.label}</span>
		<input
		id=${props.id}
		class=${styles.input}
		type=${props.type ?? "text"}
		value=${state.get().value}
		placeholder=${props.placeholder ?? ""}
		onkeyup=${props.type !== "number" ? props?.handler : () => {}}
		onChange=${props.type === "number" ? props?.handler : () => {}}
		/>
    	${state.get().showErrorMessage ? html`
			<span class=${styles.message}>${props.errorMessage}</span>
		` : ""}
	</label>
	`;
}
