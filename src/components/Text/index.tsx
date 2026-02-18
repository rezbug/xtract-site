import { html } from "@ezbug/slash";
import styles from "./styles.module.css";


 type Props = {
    value: string;
}

export function Text (props:Props) {
    return html`
    <p class=${styles.wrap}>${props.value}</p>
    `
}

  