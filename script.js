// calculator class functions

class Calculator {
  constructor(firstInputTextElement, secondInputTextElement) {
    this.firstInputTextElement = firstInputTextElement;
    this.secondInputTextElement = secondInputTextElement;
    this.clearAll();
  }

  clearAll() {
    this.firstInput = "";
    this.secondInput = "";
    this.operator = undefined;
  }

  appendNumber(number) {
    this.firstInput = this.firstInput.toString() + number.toString();
    // this.firstInput = number;
  }

  operation(operator) {}

  evaluate() {}

  updateInputs() {
    this.firstInputTextElement.innerText = this.firstInput;
  }
}

//Getting all needed elements from the html

const numberBtns = document.querySelectorAll(".number");

const operatorBtns = document.querySelectorAll(".operator");

const negativeSwitcher = document.getElementById("negative-swithcher");

const evalButton = document.getElementById("eval-btn");

const firstInputTextElement = document.getElementById("first-input");

const secondInputTextElement = document.getElementById("second-input");

// console.log(numbers);

//Creating new calculator
const calculator = new Calculator(
  firstInputTextElement,
  secondInputTextElement
);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateInputs();
  });
});
