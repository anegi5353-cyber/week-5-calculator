
const display = document.getElementById("display");

function addValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;

    if (!expression) return;

    if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = String(
                Number(result.toPrecision(12))
            );
        }
    } catch {
        display.value = "Error";
    }
}
  
