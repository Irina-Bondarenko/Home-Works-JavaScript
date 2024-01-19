"use strict";

// HOMEWORK #10

let a = +prompt("Please enter the data");

// 1
let task1 = a === 0 ? "Верно" : "Не верно";
console.log(task1);

// 2
let task2 = a > 0 ? "Верно" : "Не верно";
console.log(task2);

// 3
let task3 = a < 0 ? "Верно" : "Не верно";
console.log(task3);

// 4
let task4 = a >= 0 ? "Верно" : "Не верно";
console.log(task4);

// 5
let task5 = a <= 0 ? "Верно" : "Не верно";
console.log(task5);

// 6
let task6 = a !== 0 ? "Верно" : "Не верно";
console.log(task6);

// 7
let task7 = a === "test" ? "Верно" : "Не верно";
console.log(task7);

// 8
let task8 = a === "1" ? "Верно" : "Не верно";
console.log(task8);

// 9
if (a > 0 && a < 5) {
    alert("Верно");
} else {
    alert("Не верно");
}

// 10
if (a === 0 || a === 2) {
    a += 7;
    alert(a);
} else {
    a /= 10;
    alert(a);
}

let b = +prompt("Please enter the data again");

// 11
if (a <= 1 || b >= 3) {
    let sum = +(a + b);
    alert(sum);
} else {
    let sub = +(a - b);
    alert(sub);
}

// 12
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    alert("Верно");
} else {
    alert("Не верно");
}

// 13

let num = +prompt("Введите значение от 1 до 4 включительно");
let result = null;
switch (num) {
    case 1:
        result = "зима";
        alert(result);
        break;

    case 2:
        result = "весна";
        alert(result);
        break;

    case 3:
        result = "лето";
        alert(result);
        break;

    case 4:
        result = "осень";
        alert(result);
        break;
}
