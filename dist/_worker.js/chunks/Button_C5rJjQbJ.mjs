globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DSLlg3OJ.mjs';
/* empty css                         */

const $$Astro = createAstro("https://shinyoctopus.studio");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, href } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="custom-button" data-astro-cid-vnzlvqnm>${text}</a>` : renderTemplate`<button class="custom-button" data-astro-cid-vnzlvqnm>${text}</button>`}`;
}, "/Users/rensoconese/Documents/shinyoctopus/src/components/Button.astro", void 0);

export { $$Button as $ };
