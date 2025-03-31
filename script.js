// Abre tooltip de cada elemento e fecha os demais
function abre(event) {
  document.querySelectorAll(".hide").forEach((el) => {
    el.style.display = "none";
  });

  const tooltip = event.currentTarget.nextElementSibling;
  tooltip.style.display = "inline";
  tooltip.setAttribute("aria-live", "polite");
  tooltip.setAttribute("aria-atomic", "true");
}

// Troca a folha de estilo ativa
function css(cssFile, cssLinkIndex) {
  const oldLink = document.getElementsByTagName("link")[cssLinkIndex];
  const newLink = document.createElement("link");

  newLink.rel = "stylesheet";
  newLink.type = "text/css";
  newLink.href = cssFile;

  document.head.replaceChild(newLink, oldLink);
}

// Fecha todos os tooltips ao pressionar ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".hide").forEach((el) => {
      el.style.display = "none";
      el.setAttribute("aria-live", "off");
      el.setAttribute("aria-atomic", "false");
    });
  }
});

// Fecha todos os elementos ao clicar fora
function fecha() {
  document.querySelectorAll(".hide").forEach((el) => {
    el.style.display = "none";
    el.setAttribute("aria-live", "off");
  });
}

// Ação do checkbox para abrir os eventos relacionados ao tema
function show() {
  const checkweb = document.getElementById("checkweb");
  const checkint = document.getElementById("checkint");

  document.querySelectorAll(".web").forEach((el) => {
    el.style.display = checkweb.checked ? "block" : "none";
  });

  document.querySelectorAll(".internet").forEach((el) => {
    el.style.display = checkint.checked ? "block" : "none";
  });
}
