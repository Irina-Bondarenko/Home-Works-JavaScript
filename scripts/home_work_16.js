"use strict";

// HOMEWORK #16

const num = +prompt("Введите число");
const pow = +prompt("Введите степень");

let numAfterPow = 0;
function powFunc(num, pow = 1) {
    if (isNaN(num) || isNaN(pow)) {
        return "Вы ввели не число";
    } else if (num === 0 || pow === 0) {
        return "Вы ввели не число";
    } else {
        numAfterPow = num ** pow;
        return numAfterPow;
    }
}

console.log(powFunc(num, pow));