import { html } from "@ezbug/slash";
import type { Child } from "@ezbug/slash";
import styles from "./styles.module.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { Label } from "../Label";

type Props = {
	value: string;
	children: Child;
};

export function Newsletter(props: Props) {
	return html`
    <${Label} value="Join our newsletter" type="outilined">
        <${Input}
            id="footer-newsletter-email"
            value=""
            placeholder="name@email.com"
            label="Email"
            type="email"
            handler=${() => {}}
            required="false"
            errorMessage="E-mail obrigatorio"

            style="borderless"
        />
        <${Button}>
            Subscribe
        </${Button}>     
    </${Label}>

	`;
}
