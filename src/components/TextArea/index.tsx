import { createState, html, type State } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { TextareaState } from "./types";

export type TextareaChangeEvent = Event & {
  target: HTMLTextAreaElement;
};

type EventHandler = (
  event: TextareaChangeEvent,
  state: State<TextareaState>,
) => void;

type Props = {
  id: string;
  label: string;
  placeholder: string;
  rows?: number;
  required: "true" | "false";
  handler?: EventHandler;
};

const state = createState<TextareaState>({
  value: "",
  showErrorMessage: false,
  id: "",
  status: "",
});

export function Textarea(props: Props) {
  state.set({ ...state.get(), id: props.id });

  const textareaHandler = (event: TextareaChangeEvent) => {
    props?.handler?.(event, state);

    state.set({
      ...state.get(),
      value: event.target.value,
      showErrorMessage:
        !event.target.value.trim().length && props.required === "true",
    });
  };

  return html`
    <label class=${styles.container}>
      <span class=${styles.label}>${props.label}</span>
      <textarea
        id=${props.id}
        class=${styles.textarea}
        rows=${props.rows ?? 4}
        placeholder=${props.placeholder}
        oninput=${textareaHandler}
        onblur=${textareaHandler}
      >
${state.get().value}</textarea
      >

    </label>
  `;
}
