import { html } from "@ezbug/slash";


 type TitleType = 'h1'|'h2'|'h3'|'h4';

 type Props = {
    value: string;
    type: TitleType;
}

export function Title (props:Props) {
    return html`
    <${props.type}>${props.value}</${props.type}>
    `
}

  