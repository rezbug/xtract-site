import { html } from "@ezbug/slash";
import styles from "./styles.module.css";

export type NavItem = {
  label: string;
  href: string;
};

type Props = {
  items: NavItem[];
  activeHref?: string; // opcional (pra marcar o link ativo)
};

export function NavLinks(props: Props) {
  const isActive = (href: string) => props.activeHref === href;

  return html`
    <nav class=${styles.nav} aria-label="Header navigation">
      <ul class=${styles.list}>
        ${props.items.map(
          (item) => html`
            <li class=${styles.item}>
              <a
                class=${[styles.link, isActive(item.href) ? styles.active : ""]}
                href=${item.href}
              >
                ${item.label}
              </a>
            </li>
          `,
        )}
      </ul>
    </nav>
  `;
}
