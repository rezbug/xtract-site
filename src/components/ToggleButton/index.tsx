import { createState, html, type State } from "@ezbug/slash";
import styles from "./styles.module.css";

export type ToggleState = {
	id: string;
	checked: boolean;
	disabled: boolean;
};

export type ToggleChangeEvent = Event & {
	target: HTMLButtonElement;
};

type EventHandler = (
	event: ToggleChangeEvent,
	state: State<ToggleState>,
) => void;

type Props = {
	id: string;
	label?: string;
	checked?: "true" | "false";
	disabled?: "true" | "false";
	handler?: EventHandler;
};

const state = createState<ToggleState>({
	id: "",
	checked: false,
	disabled: false,
});


let initialized = false;

export function ToggleButton(props: Props) {
	if (!initialized) {
		state.set({
			id: props.id,
			disabled: props.disabled === "true",
			checked: props.checked === "true",
		});
		initialized = true;
	}

	const toggle = (event: ToggleChangeEvent) => {
		if (state.get().disabled) return;

		state.set({
			...state.get(),
			checked: !state.get().checked,
		});

		props?.handler?.(event, state);
	};

	const isOn = state.get().checked;

	return html`
		<div class=${styles.wrapper}>
			${props.label ? html`<span class=${styles.label}>${props.label}</span>` : ""}

			<button
				id=${props.id}
				type="button"
				class=${[
					styles.toggle,
					isOn ? styles.on : styles.off,
					state.get().disabled ? styles.disabled : "",
				]}
				aria-pressed=${String(isOn)}
				onclick=${toggle}
			>
				<span class=${styles.thumb}></span>
			</button>
		</div>
	`;
}
