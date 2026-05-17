(() => {
  const initTopNav = () => {
    const topbar = document.querySelector("[data-topbar]");
    const toggle = document.querySelector("[data-topbar-toggle]");
    const nav = document.getElementById("primary-navigation");
    if (!toggle || !nav || toggle.dataset.bound === "true") return;

    toggle.dataset.bound = "true";

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close primary navigation" : "Open primary navigation");
      nav.dataset.open = String(isOpen);
      if (topbar) topbar.dataset.open = String(isOpen);
      document.documentElement.style.overflow = isOpen ? "hidden" : "";
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    const desktopQuery = window.matchMedia("(min-width: 48.0625rem)");
    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", closeOnDesktop);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(closeOnDesktop);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTopNav, { once: true });
  } else {
    initTopNav();
  }
})();
