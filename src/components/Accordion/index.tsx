import { createState, html } from "@ezbug/slash";
import { Icon } from "@/components/Icon";
import styles from "./styles.module.css";
import type { AccordionItem, AccordionProps } from "./types";

type AccordionState = {
  openId: string | null;
  initialized: boolean;
};

const accordionState = createState<AccordionState>({
  openId: null,
  initialized: false,
});

const ensureInitialState = (props: AccordionProps) => {
  if (accordionState.get().initialized) return;

  const hasDefault = props.items.some(
    (item) => item.id === props.defaultOpenId,
  );
  const initialItemId =
    hasDefault && props.defaultOpenId ? props.defaultOpenId : null;

  accordionState.set({
    openId: initialItemId,
    initialized: true,
  });
};

const toggleItem = (itemId: string) => {
  const currentlyOpen = accordionState.get().openId === itemId;
  accordionState.set({
    ...accordionState.get(),
    openId: currentlyOpen ? null : itemId,
  });
};

export function Accordion(props: AccordionProps) {
  ensureInitialState(props);

  return html`
    <section class=${styles.container}>
      ${props.items.map((item: AccordionItem) => {
        const isOpen = accordionState.get().openId === item.id;
        return html`
          <article class=${styles.item}>
            <button
              type="button"
              class=${[styles.header, isOpen ? styles.headerOpen : ""]}
              aria-expanded=${String(isOpen)}
              onclick=${() => toggleItem(item.id)}
            >
              <span class=${styles.title}>${item.title}</span>
              <span class=${styles.chevron} aria-hidden="true">
                <${Icon} name="expand_more" size=${24} />
              </span>
            </button>
            ${isOpen
              ? html`
                  <div ===class=${styles.panel} aria-live="polite">
                    ${item.content}
                  </div>
                `
              : ""}
          </article>
        `;
      })}
    </section>
  `;
}
