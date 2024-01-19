"use strict";

// HOMEWORK #12

// Task#1

let x = 10;
let y = 7;

let xy = x > y ? "x больше, чем y" : "x не больше, чем y";
alert(xy);

// Task#2

let num = +prompt("Введите число");

if (num % 2 === 0 && num !== 0) {
    alert("Число " + num + " четное");
} else if (num === 0) {
    alert("Вы ввели 0 или не ввели число");
} else {
    alert("Число " + num + " нечетное");
}

// Task#3

let numInt = prompt("Введите целое число");

if (numInt == null) {
    alert("Вы не ввели число");
    numInt = 0;
}

let numIntLength = numInt.length;

numInt = +numInt;

if (numInt > 0 && numIntLength === 1) {
    alert(`Число ${numInt} однозначное положительное`);

} else if (numInt > 0 && numIntLength === 2) {
    alert(`Число ${numInt} двузначное положительное`);

} else if (numInt > 0 && numIntLength === 3) {
    alert(`Число ${numInt} трехзначное положительное`);

} else if (numInt < 0 && numIntLength === 2) {
    alert(`Число ${numInt} однозначное отрицательное`);

} else if (numInt < 0 && numIntLength === 3) {
    alert(`Число ${numInt} двузначное отрицательное`);

} else if (numInt < 0 && numIntLength === 4) {
    alert(`Число ${numInt} трехзначное отрицательное`);
}

// Task#4

let num1 = +prompt("Введите первое число, \n если число не введено, оно приравнивается к 0"
);
let num2 = +prompt("Введите второе число, \n если число не введено, оно приравнивается к 0"
);
let num3 = +prompt("Введите третье число, \n если число не введено, оно приравнивается к 0"
);

if (num1 > num2 && num1 > num3) {
    alert(`${num1} больше, чем остальные два числа`);

} else if (num2 > num1 && num2 > num3) {
    alert(`${num2} больше, чем остальные два числа`);

} else if (num3 > num1 && num3 > num2) {
    alert(`${num3} больше, чем остальные два числа`);

} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Ошибка, Вы ввели не число");

} else if (num1 === 0 || num2 === 0 || num3 === 0 || (num1 === num2 && num2 === num3)
) {
    alert("Все числа равны");
}

// Task#5

let sideA = +prompt("Введите длину стороны A треугольника");
let sideB = +prompt("Введите длину стороны B треугольника");
let sideC = +prompt("Введите длину стороны C треугольника");

let sumSidesAB = sideA + sideB;
let sumSidesAC = sideA + sideC;
let sumSidesBC = sideB + sideC;

if (sumSidesAB > sideC && sumSidesAC > sideB && sumSidesBC > sideA) {
    alert("Верно, такой треугольник может быть");

} else {
    alert("Увы, треугольник не выйдет, сумма 2-х его сторон меньше 3-ей");
}