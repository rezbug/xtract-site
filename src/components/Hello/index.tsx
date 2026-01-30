import { html } from "@ezbug/slash";

type Props = {
    name: string;
    handleClick: () => void;
}

export function Hello (props:Props) {
    return html`
    <h1>The Key Benefits of AI for Your Business Growth, ${props.name}</h1>
    <h2>The Key Benefits of AI for Your Business Growth, ${props.name}</h2>
    <h3>The Key Benefits of AI for Your Business Growth, ${props.name}</h3>
    <h4>The Key Benefits of AI for Your Business Growth, ${props.name}</h4>
    <p>The Key Benefits of AI for Your Business Growth, ${props.name}</p>
    <button onClick=${props.handleClick}>Trocar</button>
    `
}