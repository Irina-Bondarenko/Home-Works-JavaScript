"use strict";


// HOMEWORK #7


let operator = prompt("Выберите математическую операцию ( /, +, *, -)");

let num1 = +prompt("Введите первое число");

let num2 = +prompt("Введите второе число");

switch (operator) {
    case "+":
        alert(num1 + "+" + num2 + "=" + +(num1 + num2));
        break;
    case "-":
        alert(num1 + "-" + num2 + "=" + +(num1 - num2));
        break;
    case "/":
        alert(num1 + "/" + num2 + "=" + +(num1 / num2));
        break;
    case "*":
        alert(num1 + "*" + num2 + "=" + +(num1 * num2));

}