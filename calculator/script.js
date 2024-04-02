const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', () => {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    const selectedOperation = operation.value;

    if (isNaN(number1) || isNaN(number2)) {
        result.textContent = 'Error: Please enter valid numbers';
        return;
    }

    if (selectedOperation === 'add' ) {
        answer = number1 + number2
    } else if (selectedOperation === 'subtract') {
        answer = number1 - number2;
    }else if (selectedOperation === 'multiply') {
        answer = number1 * number2;
    }else if (selectedOperation === 'divide') {
        if (number2 === 0) {
            result.textContent = 'Error: Cannot divide by zero';
        } else {
            answer = number1 / number2;
        }
    }

    result.textContent = `Result: ${answer}`;
});
