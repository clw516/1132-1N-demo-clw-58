const userInput = document.querySelector('.input-number');
const addBtn = document.querySelector('.btn-add');
const divideBtn = document.querySelector('.btn-divide');

const currentResultOutput = document.querySelector('.current-result');
const currentCalculationOutput = document.querySelector('.current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

//console.log('userInput', userInput);
//console.log('addBtn' , addBtn);
//console.log('currentResultOutput' , currentResultOutput);

function getUserInput() {
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function add() {
  const operand1 = parseFloat(currentResult);
  const operand2 = getUserInput();
  currentResult = operand1 + operand2;
  //currentResultOutput.textContent = currentResult;
  const calText = `${operand1} + ${operand2}`;
  console.log(`${calText} = ${currentResult}`);
  //currentCalculationOutput.textContent = calText;
  outputResult(currentResult, calText);
}

addBtn.addEventListener('click', add);

function divide() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (operand2 == 0) alert('cannot divide by 0');
  else {
    currentResult = (operand1 / operand2).toFixed(2);
    //currentResultOutput.textContent = currentResult;
    const calText = `${operand1} / ${operand2}`;
    console.log(`${calText} = ${currentResult}`);
    //currentCalculationOutput.textContent = calText;
    outputResult(currentResult, calText);
  }
}

divideBtn.addEventListener('click', divide);
