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

  delete() {
    this.firstInput = this.firstInput.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.firstInput.includes(".")) return;
    this.firstInput = this.firstInput.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.firstInput === "") return;
    if (this.secondInput !== "") {
      this.compute();
    }
    this.operator = operator;
    this.secondInput = this.firstInput;
    this.firstInput = "";
  }

  evaluate() {
    let evaluation;
    const second = parseFloat(this.secondInput);
    const first = parseFloat(this.firstInput);
    if (isNaN(second) || isNaN(first)) return;
    switch (this.operator) {
      case "+":
        evaluation = second + first;
        break;
      case "-":
        evaluation = second - first;
        break;
      case "*":
        evaluation = second * first;
        break;
      case "÷":
        evaluation = second / first;
        break;
      default:
        return;
    }
    this.firstInput = evaluation;
    this.operation = undefined;
    this.secondInput = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateInputs() {
    this.firstInputTextElement.innerText = this.getDisplayNumber(
      this.firstInput
    );
    if (this.operator != null) {
      this.secondInputTextElement.innerText = `${this.getDisplayNumber(
        this.secondInput
      )} ${this.operator}`;
    } else {
      this.secondInputTextElement.innerText = "";
    }
  }
}

//Getting all needed elements from the html
const clearBtn = document.getElementById("clear-btn");

const delBtn = document.getElementById("del-btn");

const numberBtns = document.querySelectorAll(".number");

const operatorBtns = document.querySelectorAll(".operator");

const negativeSwitcher = document.getElementById("negative-switcher");

const evalButton = document.getElementById("eval-btn");

const firstInputTextElement = document.getElementById("first-input");

const secondInputTextElement = document.getElementById("second-input");

// console.log(numbers);

//Creating calculator
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

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateInputs();
  });
});

evalButton.addEventListener("click", (button) => {
  calculator.evaluate();
  calculator.updateInputs();
});

clearBtn.addEventListener("click", (button) => {
  calculator.clearAll();
  calculator.updateInputs();
});

delBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateInputs();
});
