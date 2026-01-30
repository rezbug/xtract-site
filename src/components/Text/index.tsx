import { html } from "@ezbug/slash";


 type Props = {
    value: string;
}

export function Text (props:Props) {
    return html`
    <p>${props.value}</p>
    `
}

  