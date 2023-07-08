const display = document.querySelector('.display input');
let displayValue = '';

const buttonsContainer = document.querySelector('.buttons');

buttonsContainer.addEventListener('click', function(event) {
  const clickedButton = event.target;

  if (clickedButton.tagName === 'BUTTON') {
    const buttonValue = clickedButton.textContent;

    if (buttonValue === 'Clear') {
      clearDisplay();
    } else if (buttonValue === 'Delete') {
      deleteLastEntry();
    } else if (buttonValue === '=') {
      performCalculation();
    } else {
      appendToDisplay(buttonValue);
    }
  }
});

function appendToDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.value = '';
}

function deleteLastEntry() {
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}

function performCalculation() {
  let result;
  try {
    result = eval(displayValue); 
    displayValue = result.toString();
    display.value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    display.value = displayValue;
  }
}
