globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DpHnwooJ.mjs';
import { $ as $$Layout } from '../chunks/Layout_DVi9mVZG.mjs';
import { $ as $$Logo, a as $$Button } from '../chunks/Logo_nOWAjbTC.mjs';
import { g as generateFormToken, s as server } from '../chunks/_astro-internal_actions_D35V62gO.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://shinyoctopus.studio");
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "image": ogImage, "type": "website", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="contact-container" data-astro-cid-uw5kdbxl> <div class="contact-content" data-astro-cid-uw5kdbxl> <a href="/" class="logo-link" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Logo", $$Logo, { "data-astro-cid-uw5kdbxl": true })} </a> <div class="contact-header" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>your new website starts here</h1> <p data-astro-cid-uw5kdbxl>The path to a shiny web presence begins with this simple step:</p> </div> <!-- Contact form --> <form method="POST" class="contact-form" novalidate data-astro-cid-uw5kdbxl> <!-- Token oculto para prevenir envíos múltiples --> <input type="hidden" name="form_token"${addAttribute(formToken, "value")} data-astro-cid-uw5kdbxl> <!-- Success message --> ${successMessage && renderTemplate`<div class="success-message" role="alert" data-astro-cid-uw5kdbxl> <div class="success-message-content" data-astro-cid-uw5kdbxl> <svg xmlns="http://www.w3.org/2000/svg" class="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-uw5kdbxl></path> </svg> <p class="font-medium" data-astro-cid-uw5kdbxl>${successMessage}</p> </div> </div>`} <!-- General error message --> ${errors.form && renderTemplate`<div class="error-message" role="alert" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>${errors.form}</p> </div>`} <!-- Field: Name --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="name" class="form-label" data-astro-cid-uw5kdbxl>
Name<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <input type="text" id="name" name="name"${addAttribute(formData.name, "value")} required autocomplete="name"${addAttribute([
    "form-input",
    errors.name ? "input-error" : ""
  ], "class:list")}${addAttribute(errors.name ? "name-error" : void 0, "aria-describedby")} data-astro-cid-uw5kdbxl> ${errors.name && renderTemplate`<p id="name-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.name}</p>`} </div> <!-- Field: Email --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="email" class="form-label" data-astro-cid-uw5kdbxl>
Email<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <input type="email" id="email" name="email"${addAttribute(formData.email, "value")} required autocomplete="email"${addAttribute([
    "form-input",
    errors.email ? "input-error" : ""
  ], "class:list")}${addAttribute(errors.email ? "email-error" : void 0, "aria-describedby")} data-astro-cid-uw5kdbxl> ${errors.email && renderTemplate`<p id="email-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.email}</p>`} </div> <!-- Field: Message --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="message" class="form-label" data-astro-cid-uw5kdbxl>
Tell us briefly about your project<span class="required" data-astro-cid-uw5kdbxl>*</span> </label> <textarea id="message" name="message" rows="5" required${addAttribute([
    "form-input",
    errors.message ? "input-error" : ""
  ], "class:list")}${addAttribute(errors.message ? "message-error" : void 0, "aria-describedby")} data-astro-cid-uw5kdbxl>${formData.message}</textarea> ${errors.message && renderTemplate`<p id="message-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.message}</p>`} </div> <!-- Field: How did you find us --> <div class="form-field" data-astro-cid-uw5kdbxl> <label for="source" class="form-label" data-astro-cid-uw5kdbxl>
How did you find us?
</label> <select id="source" name="source"${addAttribute([
    "form-input",
    errors.source ? "input-error" : ""
  ], "class:list")}${addAttribute(errors.source ? "source-error" : void 0, "aria-describedby")} data-astro-cid-uw5kdbxl> <option value="" disabled${addAttribute(!formData.source, "selected")} data-astro-cid-uw5kdbxl>Select an option</option> <option value="Web Search"${addAttribute(formData.source === "Web Search", "selected")} data-astro-cid-uw5kdbxl>Web Search</option> <option value="Social Media"${addAttribute(formData.source === "Social Media", "selected")} data-astro-cid-uw5kdbxl>Social Media</option> <option value="Referral"${addAttribute(formData.source === "Referral", "selected")} data-astro-cid-uw5kdbxl>Referral</option> <option value="Other"${addAttribute(formData.source === "Other", "selected")} data-astro-cid-uw5kdbxl>Other</option> </select> ${errors.source && renderTemplate`<p id="source-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.source}</p>`} </div> <!-- Field: Other (conditional) --> <div id="otherSourceContainer" class="form-field"${addAttribute(showOtherField ? "" : "display: none;", "style")} data-astro-cid-uw5kdbxl> <label for="otherSource" class="form-label" data-astro-cid-uw5kdbxl>
Please specify how you found us
</label> <input type="text" id="otherSource" name="otherSource"${addAttribute(formData.otherSource, "value")}${addAttribute([
    "form-input",
    errors.otherSource ? "input-error" : ""
  ], "class:list")}${addAttribute(errors.otherSource ? "otherSource-error" : void 0, "aria-describedby")} data-astro-cid-uw5kdbxl> ${errors.otherSource && renderTemplate`<p id="otherSource-error" class="error-text" data-astro-cid-uw5kdbxl>${errors.otherSource}</p>`} </div> <!-- Submit button --> <div class="form-submit" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Button", $$Button, { "text": "Send message", "data-astro-cid-uw5kdbxl": true })} <button type="submit" id="submitButton" style="display: none;" data-astro-cid-uw5kdbxl></button> ${renderScript($$result2, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} </div> </form> <div class="back-link-container" data-astro-cid-uw5kdbxl> <a href="/" class="back-link" data-astro-cid-uw5kdbxl> <span class="arrow" data-astro-cid-uw5kdbxl>←</span> Back to homepage
</a> </div> </div> </main> ` })}  ${renderScript($$result, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro", void 0);

const $$file = "/Users/rensoconese/Documents/shinyoctopus/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
