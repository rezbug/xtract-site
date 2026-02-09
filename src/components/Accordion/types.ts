import type { Child } from "@ezbug/slash";

export type AccordionItem = {
	id: string;
	title: string;
	content: Child;
};

export type AccordionProps = {
	items: AccordionItem[];
	defaultOpenId?: string;
};
