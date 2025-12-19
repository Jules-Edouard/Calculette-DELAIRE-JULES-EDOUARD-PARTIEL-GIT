const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

let current = "0";
let total = null;
let operator = null;
let justEvaluated = false;

function render() {
  let expr = "";

  if (total !== null) {
    expr += total;
  }

  if (operator !== null) {
    expr += " " + operator;
  }

  if (current !== "0" || total === null) {
    expr += " " + current;
  }

  expressionEl.textContent = expr.trim();
  resultEl.textContent = calculatePreview();
}

function calculatePreview() {
  const currentNumber = parseFloat(current);

  if (total === null || operator === null) {
    return current;
  }

  if (operator === "+") {
    return total + currentNumber;
  }

  if (operator === "-") {
    return total - currentNumber;
  }

  if (operator === "*") {
    return total * currentNumber;
  }

  return current;
}

function inputDigit(digit) {
  if (justEvaluated) {
    current = "0";
    total = null;
    operator = null;
    justEvaluated = false;
  }

  if (current === "0") {
    current = digit;
  } else {
    current += digit;
  }

  render();
}

function inputDot() {
  if (!current.includes(".")) {
    current += ".";
  }
  render();
}

function setOperator(op) {
  if (total === null) {
    total = parseFloat(current);
  } else if (operator !== null) {
    total = calculatePreview();
  }

  operator = op;
  current = "0";
  justEvaluated = false;
  render();
}

function equals() {
  if (operator === null || total === null) return;

  total = calculatePreview();
  current = total.toString();
  operator = null;
  justEvaluated = true;
  render();
}

function clearEntry() {
  current = "0";
  render();
}

function resetAll() {
  current = "0";
  total = null;
  operator = null;
  justEvaluated = false;
  render();
}

/* Boutons */
document.querySelectorAll("[data-digit]").forEach(btn => {
  btn.addEventListener("click", () => inputDigit(btn.dataset.digit));
});

document.querySelector("[data-action='plus']")
  ?.addEventListener("click", () => setOperator("+"));

document.querySelector("[data-action='minus']")
  ?.addEventListener("click", () => setOperator("-"));

document.querySelector("[data-action='multiply']")
  ?.addEventListener("click", () => setOperator("*"));

document.querySelector("[data-action='equals']")
  ?.addEventListener("click", equals);

document.querySelector("[data-action='dot']")
  ?.addEventListener("click", inputDot);

document.querySelector("[data-action='clear']")
  ?.addEventListener("click", clearEntry);

document.querySelector("[data-action='reset']")
  ?.addEventListener("click", resetAll);

/* Clavier */
window.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") inputDigit(e.key);
  if (e.key === ".") inputDot();
  if (e.key === "+") setOperator("+");
  if (e.key === "-") setOperator("-");
  if (e.key === "*") setOperator("*");
  if (e.key === "Enter") equals();
  if (e.key === "Escape") resetAll();
});

render();
