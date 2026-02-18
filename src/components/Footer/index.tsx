import { html, type State } from "@ezbug/slash";
import { Container } from "@/components/Container";
import { Content } from "@/components/Content";
import { Title } from "../Title";
import { NavLinks } from "../NavLinks";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Input, type InputChangeEvent } from "../Input";
import type { TextInputState } from "../Input/types";
import { Text } from "../Text";
import styles from "./styles.module.css";
import { Logo } from "../Logo";
import { Label } from "../Label";
import { Newsletter } from "../Newsletter";


const columns = {
	first:{
		title: "Links",
		links: [
			{ label: "Services", href: "/" },
			{ label: "Process", href: "/" },
			{ label: "Case studies", href: "/" },
			{ label: "Benefits", href: "/" },
			{ label: "Pricing", href: "/" },
		],
	},
	second:{
		title: "Pages",
		links: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/" },
			{ label: "Blog", href: "/" },
			{ label: "Contact", href: "/" },
			{ label: "404", href: "/404" },
		],
	},
	thirty:{
		title: "Socials",
		links: [
			{ label: "Instagram", href: "/" },
			{ label: "Facebook", href: "/" },
			{ label: "Linkedin", href: "/" },
			{ label: "Twitter", href: "/" },
		],
	},
};
  
const handleNewsletterInput = (
	_event: InputChangeEvent,
	state: State<TextInputState>,
) => {
	state.set({ ...state.get(), status: "" });
};

export function Footer() {
  return html`
	<${Container}>
		<${Content}>
			<footer class=${[styles.wrap]}>
				<div class=${styles.left}>
					<div class=${styles.brand}>
						<div class=${styles.Name}>
							<${Logo} size="big"/>
						</div>
					</div>
					<div class=${styles.brandDescription}>
						<${Text}
							value="Xtract – Automate Smarter, Optimize Faster, and Grow Stronger."
						/>
					</div>
					<${Newsletter} />
				</div>
				<ul>
					<li>
					<${Title} value=${columns.first.title} type="h3" />
					<${NavLinks} data=${columns.first.links} />
					</li>				
					<li>
					<${Title} value=${columns.second.title} type="h3" />
					<${NavLinks} data=${columns.second.links} />
					</li>				
					<li>
					<${Title} value=${columns.thirty.title} type="h3" />
					<${NavLinks} data=${columns.thirty.links} />
					</li>				
				</ul>
			</footer>
	</${Content}>
</${Container}>
	`;
}
