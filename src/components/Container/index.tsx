import { html } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { ContainerProps } from "./types";


export function Container(props: ContainerProps) {

	return html`
    <div
      class=${styles.container}
    >
      ${props.children}
    </div>
  `;
}
