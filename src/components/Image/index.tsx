import { html } from "@ezbug/slash";
import styles from "./styles.module.css";

type Props = {
	src: string;
	alt: string;
	width?: string;
	height?: string;
};

export function ImageBlock(props: Props) {
	return html`
    <div
      class=${styles.wrapper}
      style=${`
        width: ${props.width ?? "100%"};
        height: ${props.height ?? "360px"};
      `}
    >
      <img
        class=${styles.image}
        src=${props.src}
        alt=${props.alt}
        loading="lazy"
      />
    </div>
  `;
}
