'use strict';

const userInput = 'Введите любое число!';
const userEror = 'Было введено не число, попробуйте еще раз!';
const numbers = [];
let input;
let message;
let total = 0;
let summUserInput;

do {
    input = prompt(userInput);
    if (input === '' || isNaN(input)) {
        message = userEror;
        alert(message);
    } else numbers.push(Number(input));

} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
    summUserInput = numbers[i];
    total += summUserInput;
}

console.log(`Общая сумма чисел равна ${total}`);