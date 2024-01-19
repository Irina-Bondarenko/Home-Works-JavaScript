"use strict";

// HOMEWORK #14

let num = +prompt("Введите число");
let simpleTrue = false;

if (isNaN(num)) {
    alert("Вы ввели не число");

} else if (num === 1) {
    console.log(false);

} else if (num > 0) {
    for (let simple = 2; simple < num; simple++) {
        if (num % simple === 0) {
            break;
        } else {
            simpleTrue = true;
        }
    }
    console.log(simpleTrue);

} else {
    alert("Жаль, что Вы не ввели число");
}