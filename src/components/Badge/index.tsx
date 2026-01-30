import { html } from "@ezbug/slash";
import styles from './styles.module.css';

type Props = {
  value: string;
};

export function Badge(props: Props) {
  return html`
    <span class=${styles.teste}>
      ${props.value}
    </span>
  `;
}

  