let currentInput = "";
let currentResult = 0;
let operator = "";

function appendToDisplay(value) {
    const result = document.getElementById("result");
    if (result.value === "0" || result.value === "Error") {
        result.value = value;
    } else {
        result.value += value;
    }
    currentInput += value;
}

function clearDisplay() {
    const result = document.getElementById("result");
    result.value = "0";
    currentInput = "";
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        const result = document.getElementById("result");
        result.value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        const result = document.getElementById("result");
        result.value = "Error";
        currentInput = "";
    }
}
