globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DpHnwooJ.mjs';
import { $ as $$Layout } from '../chunks/Layout_CUWwo_9C.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found | Shiny Octopus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center"> <h1 class="text-6xl font-bold mb-4">404</h1> <h2 class="text-2xl font-semibold mb-6">Page Not Found</h2> <p class="text-lg mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p> <a href="/" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
Back to Home
</a> </main> ` })}`;
}, "/Users/rensoconese/Documents/shinyoctopus/src/pages/404.astro", void 0);

const $$file = "/Users/rensoconese/Documents/shinyoctopus/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
