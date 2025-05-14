// Variables globales
let currentInput = '';  // Entrada actual (lo que se está escribiendo)
let previousInput = '';  // Último valor ingresado
let operation = '';  // Operación a realizar (+, -, *, /)

// Función para agregar números y operadores al display
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Función para limpiar la pantalla
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = '';
  updateDisplay();
}

// Función para limpiar la última entrada (CE)
function clearEntry() {
  currentInput = '';
  updateDisplay();
}

// Función para realizar el cálculo
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  // Si no hay valores para operar, salimos de la función
  if (isNaN(prev) || isNaN(current)) return;

  // Dependiendo de la operación, hacemos el cálculo
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    case '%':
      result = (prev * current) / 100;
      break;
    default:
      return;
  }

  // Establecemos el resultado en la pantalla
  currentInput = result.toString();
  operation = '';
  previousInput = '';
  updateDisplay();
}

// Función para actualizar el display
function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Función para seleccionar la operación
function setOperation(op) {
  if (currentInput === '') return;  // Si no hay nada en la entrada, no hace nada
  if (previousInput !== '') {
    calculateResult();  // Si ya había una operación, la realiza antes de cambiarla
  }
  operation = op;  // Guardamos la operación
  previousInput = currentInput;  // Guardamos el valor actual como valor previo
  currentInput = '';  // Limpiamos la entrada para escribir el siguiente número
}

