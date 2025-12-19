const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

let current = "0";        // nombre en cours de saisie
let total = null;         // total accumulé
let hasPlus = false;      // est-ce qu'on a appuyé sur "+"
let justEvaluated = false;

function render() {
  // Affiche l'expression du type: "12 + 3"
  let expr = "";
  if (total !== null) expr += formatNumber(total);
  if (hasPlus) expr += (expr ? " " : "") + "+";
  if (current !== "0" || (total === null && !hasPlus)) {
    expr += (expr ? " " : "") + current;
  }
  expressionEl.textContent = expr || "0";

  // Résultat instantané si possible
  if (total !== null && hasPlus) {
    const res = total + parseFloatSafe(current);
    resultEl.textContent = formatNumber(res);
  } else {
    resultEl.textContent = formatNumber(parseFloatSafe(current));
  }
}

function parseFloatSafe(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function formatNumber(n) {
  // évite l'affichage "1.0000000002" dans certains cas
  const rounded = Math.round((n + Number.EPSILON) * 1e10) / 1e10;
  return String(rounded);
}

function inputDigit(d) {
  if (justEvaluated) {
    // après "=", retaper un chiffre démarre une nouvelle saisie
    total = null;
    hasPlus = false;
    current = "0";
    justEvaluated = false;
  }

  if (current === "0") current = d;
  else current += d;

  render();
}

function inputDot() {
  if (justEvaluated) {
    total = null;
    hasPlus = false;
    current = "0";
    justEvaluated = false;
  }

  if (!current.includes(".")) current += ".";
  render();
}

function pressPlus() {
  if (justEvaluated) justEvaluated = false;

  if (total === null) {
    total = parseFloatSafe(current);
  } else if (hasPlus) {
    // si on appuie plusieurs fois sur +, on accumule
    total = total + parseFloatSafe(current);
  }

  hasPlus = true;
  current = "0";
  render();
}

function equals() {
  if (total === null) {
    render();
    return;
  }
  if (hasPlus) {
    total = total + parseFloatSafe(current);
    current = formatNumber(total);
    hasPlus = false;
    total = null;
    justEvaluated = true;
  }
  render();
}

function clearEntry() {
  current = "0";
  render();
}

function backspace() {
  if (justEvaluated) {
    // après =, backspace agit sur current
    justEvaluated = false;
  }

  if (current.length <= 1) current = "0";
  else current = current.slice(0, -1);

  // si ça finit par ".", on l'enlève
  if (current.endsWith(".")) current = current.slice(0, -1) || "0";

  render();
}

function resetAll() {
  current = "0";
  total = null;
  hasPlus = false;
  justEvaluated = false;
  render();
}

// Clicks
document.querySelectorAll("[data-digit]").forEach(btn => {
  btn.addEventListener("click", () => inputDigit(btn.dataset.digit));
});

document.querySelectorAll("[data-action]").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = btn.dataset.action;
    if (a === "dot") inputDot();
    if (a === "plus") pressPlus();
    if (a === "equals") equals();
    if (a === "clear") clearEntry();
    if (a === "back") backspace();
    if (a === "reset") resetAll();
  });
});

// Clavier
window.addEventListener("keydown", (e) => {
  const k = e.key;

  if (k >= "0" && k <= "9") return inputDigit(k);
  if (k === ".") return inputDot();
  if (k === "+") return pressPlus();
  if (k === "Enter" || k === "=") return equals();
  if (k === "Backspace") return backspace();
  if (k === "Escape") return resetAll();
});

// init
render();
