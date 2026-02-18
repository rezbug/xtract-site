import { html } from "@ezbug/slash";
import styles from "./styles.module.css";
import type { SafeUrl } from "@/types";

type Props = {
 label: string;
 href: SafeUrl;
 isActive: boolean;
};

export function Link(props: Props) {
  return html`
    <a href=${props.href} class=${[styles.link]}>
      ${props.label}
    </a>
  `;
}
