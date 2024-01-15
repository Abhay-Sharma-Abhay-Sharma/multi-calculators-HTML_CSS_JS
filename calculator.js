let displayValue = '';

function appendValue(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  const result = eval(displayValue);
  displayValue = result;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
