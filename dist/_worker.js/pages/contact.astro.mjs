globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as createAstro, c as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DSLlg3OJ.mjs';
import { $ as $$Layout } from '../chunks/Layout_DLPEzIOt.mjs';
import { $ as $$Button } from '../chunks/Button_C5rJjQbJ.mjs';
import { $ as $$Logo } from '../chunks/Logo_BoMzIeKa.mjs';
import { g as generateFormToken, s as server } from '../chunks/_astro-internal_actions_tt3I2icW.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://shinyoctopus.studio");
const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let errors = {};
  let successMessage = "";
  let formData = {
    name: "",
    email: "",
    message: "",
    source: "",
    otherSource: ""
  };
  let showOtherField = false;
  const formToken = generateFormToken();
  const turnstileSiteKey = "0x4AAAAAACEZDvMXss1uexdX";
  if (Astro2.request.method === "POST") {
    try {
      const form = await Astro2.request.formData();
      const response = await server.send(form);
      if (response.success) {
        successMessage = response.message || "Message sent successfully";
        formData = {
          name: "",
          email: "",
          message: "",
          source: "",
          otherSource: ""
        };
      } else if (response.errors) {
        errors = response.errors;
      }
      if (response.data) {
        formData = response.data;
        showOtherField = formData.source === "Other";
      }
    } catch (error) {
      errors.form = "An error occurred while processing the form.";
    }
  }
  const pageTitle = "Contact Us - Shiny Octopus";
  const pageDescription = "Have a project in mind? Let's talk! We're ready to bring your ideas to life. Contact our team today.";
  const ogImage = "/images/contact-og.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "image": ogImage, "type": "website", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script> ', '<main class="contact-container" data-astro-cid-uw5kdbxl> <div class="contact-content" data-astro-cid-uw5kdbxl> <a href="/" class="logo-link" data-astro-cid-uw5kdbxl> ', ' </a> <div class="contact-header" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>your new website starts here</h1> <p data-astro-cid-uw5kdbxl>The path to a shiny web presence begins with this simple step:</p> </div> <!-- Contact form --> <form method="POST" class="contact-form" novalidate data-astro-cid-uw5kdbxl> <!-- Token oculto para prevenir envíos múltiples --> <input type="hidden" name="form_token"', ' data-astro-cid-uw5kdbxl> <!-- Honeypot: campo oculto que los bots llenan pero humanos no ven --> <div class="hp-field" aria-hidden="true" data-astro-cid-uw5kdbxl> <label for="website" data-astro-cid-uw5kdbxl>Website</label> <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" data-astro-cid-uw5kdbxl> </div> <!-- Success message --> ', " <!-- General error message --> ", ' <!-- Field: Name --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="name" class="form-label" data-astro-cid-uw5kdbxl>\nName<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <input type="text" id="name" name="name"', ' required autocomplete="name"', "", " data-astro-cid-uw5kdbxl> ", ' </div> <!-- Field: Email --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="email" class="form-label" data-astro-cid-uw5kdbxl>\nEmail<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <input type="email" id="email" name="email"', ' required autocomplete="email"', "", " data-astro-cid-uw5kdbxl> ", ' </div> <!-- Field: Message --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="message" class="form-label" data-astro-cid-uw5kdbxl>\nTell us briefly about your project<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <textarea id="message" name="message" rows="5" required', "", " data-astro-cid-uw5kdbxl>", "</textarea> ", ' </div> <!-- Field: How did you find us --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="source" class="form-label" data-astro-cid-uw5kdbxl>\nHow did you find us?\n</label> <select id="source" name="source"', "", ' data-astro-cid-uw5kdbxl> <option value="" disabled', ' data-astro-cid-uw5kdbxl>Select an option</option> <option value="Web Search"', ' data-astro-cid-uw5kdbxl>Web Search</option> <option value="Social Media"', ' data-astro-cid-uw5kdbxl>Social Media</option> <option value="Referral"', ' data-astro-cid-uw5kdbxl>Referral</option> <option value="Other"', " data-astro-cid-uw5kdbxl>Other</option> </select> ", ' </div> <!-- Field: Other (conditional) --> <div id="otherSourceContainer" class="form-field"', ' data-astro-cid-uw5kdbxl> <label for="otherSource" class="form-label" data-astro-cid-uw5kdbxl>\nPlease specify how you found us\n</label> <input type="text" id="otherSource" name="otherSource"', "", "", " data-astro-cid-uw5kdbxl> ", ' </div> <!-- Cloudflare Turnstile --> <div class="cf-turnstile"', ' data-theme="dark" data-astro-cid-uw5kdbxl></div> <!-- Submit button --> <div class="form-submit" data-astro-cid-uw5kdbxl> ', ' <button type="submit" id="submitButton" style="display: none;" data-astro-cid-uw5kdbxl></button> ', ' </div> </form> <div class="back-link-container" data-astro-cid-uw5kdbxl> <a href="/" class="back-link" data-astro-cid-uw5kdbxl> <span class="arrow" data-astro-cid-uw5kdbxl>←</span> Back to homepage\n</a> </div> </div> </main> '])), maybeRenderHead(), renderComponent($$result2, "Logo", $$Logo, { "data-astro-cid-uw5kdbxl": true }), addAttribute(formToken, "value"), successMessage && renderTemplate`<div class="success-message" role="alert" data-astro-cid-uw5kdbxl> <div class="success-message-content" data-astro-cid-uw5kdbxl> <svg xmlns="http://www.w3.org/2000/svg" class="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-uw5kdbxl></path> </svg> <p class="font-medium" data-astro-cid-uw5kdbxl>${successMessage}</p> </div> </div>`, errors.form && renderTemplate`<div class="error-message" role="alert" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>${errors.form}</p> </div>`, addAttribute(formData.name, "value"), addAttribute([
    "form-input",
    errors.name ? "input-error" : ""
  ], "class:list"), addAttribute(errors.name ? "name-error" : void 0, "aria-describedby"), errors.name && renderTemplate`<p id="name-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.name}</p>`, addAttribute(formData.email, "value"), addAttribute([
    "form-input",
    errors.email ? "input-error" : ""
  ], "class:list"), addAttribute(errors.email ? "email-error" : void 0, "aria-describedby"), errors.email && renderTemplate`<p id="email-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.email}</p>`, addAttribute([
    "form-input",
    errors.message ? "input-error" : ""
  ], "class:list"), addAttribute(errors.message ? "message-error" : void 0, "aria-describedby"), formData.message, errors.message && renderTemplate`<p id="message-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.message}</p>`, addAttribute([
    "form-input",
    errors.source ? "input-error" : ""
  ], "class:list"), addAttribute(errors.source ? "source-error" : void 0, "aria-describedby"), addAttribute(!formData.source, "selected"), addAttribute(formData.source === "Web Search", "selected"), addAttribute(formData.source === "Social Media", "selected"), addAttribute(formData.source === "Referral", "selected"), addAttribute(formData.source === "Other", "selected"), errors.source && renderTemplate`<p id="source-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.source}</p>`, addAttribute(showOtherField ? "" : "display: none;", "style"), addAttribute(formData.otherSource, "value"), addAttribute([
    "form-input",
    errors.otherSource ? "input-error" : ""
  ], "class:list"), addAttribute(errors.otherSource ? "otherSource-error" : void 0, "aria-describedby"), errors.otherSource && renderTemplate`<p id="otherSource-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.otherSource}</p>`, addAttribute(turnstileSiteKey, "data-sitekey"), renderComponent($$result2, "Button", $$Button, { "text": "Send message", "data-astro-cid-uw5kdbxl": true }), renderScript($$result2, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro?astro&type=script&index=0&lang.ts")) })}  ${renderScript($$result, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro", void 0);
const $$file = "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
