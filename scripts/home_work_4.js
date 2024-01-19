"use strict";

// HOMEWORK #8

// Task# 1

let alpha = Boolean(Number("10")) + 1; // 2
console.log(alpha);
// не пустое значение Boolean = 1. Затем 1 + 1 = 2


let bravo = "sub" + Number(false); // sub0
console.log(bravo);
// Number преобразует false в 0. Затем конкатенация sub + 0 = sub0


let charlie = 16  *  "      91    "; // 1456
console.log(charlie);
// математическая операция преобразует строку "      91    " в число 91. Затем 91 * 16 = 1456


let delta = true-70; // -69
console.log(delta)
// математическая операция преобразует true в 1. Затем 1 - 70 = -69


let echo = Number(1 + String(1)) + 1; // 12
console.log(echo);
// сперва происходит конкатенация числа 1 и стоки "1" = "11". Затем Number преобразует строку "11" в число 11.
// Затем 11 + 1 = 12


// Task# 2

let hourRequest = +prompt("Введите количество часов");

if (hourRequest > 0) {
    let secondCalc = hourRequest * 60 * 60;
    alert (secondCalc);
}
else {
    alert("Вы ввели неверные данные")
}

// Task# 3

// let num = 1;
// num = num + 12;
// num = num — 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num — 1;
// alert(num);

let num = 1;
num += 12; // 13
num -= 14; // -1
num *= 5; // -5
num /= 7; // -0.7142857142857143
num += 1; // 0.2857142857142857
num -= 1; // -0.7142857142857143
alert(num);