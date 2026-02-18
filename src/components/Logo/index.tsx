import { html } from "@ezbug/slash";
import styles from "./styles.module.css";


 type Size = 'small'|'big';

 type Props = {
    size: Size;
}

export function Logo ({size = "small"}:Props) {

const sizeClassMap: Record<Size, string> = {
	"small": styles.small,
	"big": styles.big,
};

const cssSize = sizeClassMap[size]

    return html`
    <div class=${[styles.wrap, cssSize]}>
    <img
        src="/assets/images/logo.svg"
        alt="Xtract"
    />
    <p>
    XTRACT
    </p>
    </div>
    `;
}

  