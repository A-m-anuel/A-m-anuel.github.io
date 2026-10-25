// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "close" : "menu";
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "menu";
    })
  );
}

// One-time terminal typing on the home page. The full text is already in the
// HTML, so without JS (or with reduced motion) visitors simply see it all.
const term = document.getElementById("terminal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (term && !reduceMotion) {
  const lines = Array.from(term.children);
  const commands = lines.map((line) => line.querySelector(".cmd"));
  const fullText = commands.map((c) => (c ? c.textContent : ""));

  lines.forEach((line) => (line.style.visibility = "hidden"));
  commands.forEach((c) => c && (c.textContent = ""));

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  (async () => {
    await wait(350);
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      line.style.visibility = "visible";
      const cmd = commands[i];
      if (cmd) {
        for (const ch of fullText[i]) {
          cmd.textContent += ch;
          await wait(45 + Math.random() * 45);
        }
        await wait(220);
      } else {
        await wait(line.classList.contains("gap") ? 60 : 90);
      }
    }
  })();
}
