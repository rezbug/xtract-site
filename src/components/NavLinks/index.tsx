import { html } from "@ezbug/slash";
import { Link } from "@/components/Link";
import styles from "./styles.module.css";

export type LinkProps = {
  label: string;
  href: string;
  isActive?: boolean;
};

type Props = {
	data: LinkProps[];
	activeHref?: string; // opcional (pra marcar o link ativo)
};

export function NavLinks(props: Props) {

		return html`
    <nav class=${styles.nav} aria-label="Header navigation">
      <ul>
        ${props.data.map(
					(item) => html`
            <li>
              <${Link} label=${item.label} href=${item.href} />
            </li>
          `,
				)}
      </ul>
    </nav>
  `;
	}
