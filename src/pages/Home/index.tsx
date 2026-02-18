import { html, type State } from "@ezbug/slash";
import { Accordion } from "@/components/Accordion";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { ImageBlock } from "@/components/Image";
import { Input, type InputChangeEvent } from "@/components/Input";
import type { TextInputState } from "@/components/Input/types";
import { NavLinks } from "@/components/NavLinks";
import { Textarea } from "@/components/TextArea";
import { Title } from "@/components/Title";
import type { ToggleChangeEvent, ToggleState } from "@/components/ToggleButton";
import { ToggleButton } from "@/components/ToggleButton";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";


const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/" },
	{ label: "Blog", href: "/" },
	{ label: "Contact", href: "/" },
];

const items = [
	{
		id: "q2",
		title: "How can AI automation help my business?",
		content: html`
			<p>
				AI automation eliminates repetitive tasks, improves efficiency, and reduces
				errors. It lets your team focus on high-value work while increasing productivity
				and lowering operational costs.
			</p>
		`,
	},
	{
		id: "q1",
		title: "Is AI automation difficult to integrate?",
		content: html`
			<p>
				No! Our AI solutions are designed for seamless integration with your existing
				tools and workflows. We provide step-by-step guidance to ensure a smooth
				and hassle-free setup.
			</p>
		`,
	},
	{
		id: "q3",
		title: "What industries can benefit from AI automation?",
		content: html`
			<p>
				Every modern industry—from finance and healthcare to retail and logistics—can
				benefit from AI automation. We tailor each solution to the domain to maximize
				returns.
			</p>
		`,
	},
	{
		id: "q4",
		title: "Do I need technical knowledge to use AI automation?",
		content: html`
			<p>
				No technical background is required. We take care of data preparation,
				model deployment, and monitoring, so your team can use AI without writing
				a single line of code.
			</p>
		`,
	},
	{
		id: "q5",
		title: "What kind of support do you offer?",
		content: html`
			<p>
				Our support team is available 24/7 before, during, and after deployment.
				You also get playbooks, workshops, and regular strategy reviews.
			</p>
		`,
	},
];

export function Home() {
	const onToggle = (_event: ToggleChangeEvent, st: State<ToggleState>) => {
		console.log("toggle:", st.get().checked);
	};

	const validateCpf = (
		event: InputChangeEvent,
		state: State<TextInputState>,
	) => {
		if (event.target.value.length === 11) {
			state.set({ ...state.get(), status: "success" });
			return;
		}
		console.log("diferente");
		state.set({ ...state.get(), status: "error" });
	};

	return html`
	<${Container}>
	<${Content}>
      <${Title}
        type="h1"
        value="AI Solutions That Take Your Business to the Next Level"
      />
      <${Title}
        type="h2"
        value="AI Solutions That Take Your Business to the Next Level"
      />
      <${Title}
        type="h4"
        value="AI Solutions That Take Your Business to the Next Level"
      />
      <${Title}
        type="h3"
        value="AI Solutions That Take Your Business to the Next Level"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, maiores?
      </p>
      <${Badge} value="Ativo" />
      <${Badge} value="Promoção" />
      <${Icon} name="home" />
      <${Icon} name="check" size=${16} />
      <${Icon} name="warning" />
      <div style="display: flex; width: 100%; padding:45px;">
        <${Input}
          id="cpf"
          label="Fister Name"
          placeholder="Informe seu cpf"
          type="text"
          required="true"
          errorMessage="Campo obrigatorio"
          handler=${validateCpf}
        />
      </div>
      <div style="display: flex; width: 100%; padding:45px;">
        <${Textarea}
          id="mensagem"
          label="Mensagem"
          placeholder="Digite sua mensagem"
          required="true"
          errorMessage="Campo obrigatório"
        />
      </div>
      <${ToggleButton}
        id="notificacoes"
        label="Notificações"
        checked="false"
        handler=${onToggle}
      />
      <header>
        <${NavLinks} data=${navItems} activeHref="/" />
      </header>
      <div style="display: flex; width: 100%; padding:45px;">
        <${ImageBlock}
          src="assets/images/image.png"
          alt="Case Study"
          width="520px"
          height="380px"
        />
      </div>

      <${Card} src="assets/images/image.png" alt="Case image" />

      <div style="display: flex; width: 100%; padding:45px;">
        <${Accordion} items=${items} />
      </div>
	  <div style="display: flex; width: 100%; padding:45px;">
		<${Button} label="Choose this plan" variant="primary" size="md" />
		<${Button} label="Choose this plan" variant="secondary" size="md" />
		<${Button} label="Schedule a call" variant="ghost" size="md" />
	   </div>
	</${Content}>
	</${Container}>
	<${Footer} />

   `;
}
