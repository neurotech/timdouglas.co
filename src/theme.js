const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function apply(theme) {
  root.dataset.theme = theme;

  if (toggle) {
    const isDark = theme === "dark";
    toggle.textContent = isDark ? "☀️" : "🌙";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
}

// Reflect the theme the pre-paint script already resolved.
apply(root.dataset.theme === "dark" ? "dark" : "light");

toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  apply(next);
});

// Follow the OS preference until the user makes an explicit choice.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    apply(event.matches ? "dark" : "light");
  }
});
