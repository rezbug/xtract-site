import { html } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { Content as ContentProps } from "./types";

export function Content(props: ContentProps) {
	return html`
    <div
      class=${[styles.content]}
    >
      ${props.children}
    </div>
  `;
}
