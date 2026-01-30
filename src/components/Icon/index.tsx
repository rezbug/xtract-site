import { html } from "@ezbug/slash";
import styles from './styles.module.css';

type IconSize = 16|24|32|40|48|56|64|72;



type Props = {
  name: string;
  size:IconSize
};

export function Icon(props: Props) {
  const sizeClassMap: Record<IconSize, string> = {
    16: styles["size-16"],
    24: styles["size-24"],
    32: styles["size-32"],
    40: styles["size-40"],
    48: styles["size-48"],
    56: styles["size-56"],
    64: styles["size-64"],
    72: styles["size-72"],
  };
  const size = props.size ? sizeClassMap[props.size] : "size-16";
  return html`
    <span class=${["icon", "material-symbols-outlined", size]}>
      ${props.name}
    </span>
  `;
}

  