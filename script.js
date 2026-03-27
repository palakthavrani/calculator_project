// Get display
let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        // Evaluate expression
        let result = eval(display.value);

        // Show result
        display.value = result;

    } catch {
        display.value = "Error";
    }
}
