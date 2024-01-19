"use strict";

// HOMEWORK #23

//1//
console.log("Task#1");

function factorial(a) {
    if (a === 1 || a === 0) {
        return 1;
    }

    return a * factorial(a - 1);
}

console.log(factorial(8));

//2//
console.log("Task#2");

function powRecursion(num, pow) {
    if (pow === 1) {
        return num;
    }

    return num * powRecursion(num, pow - 1);
}

console.log(powRecursion(5, 5));


//3//
console.log("Task#3");

function recursionWithoutSum(a, b) {
    if (b == 0) {
        return a;
    }

    return recursionWithoutSum(a + 1, b - 1);
}

console.log(recursionWithoutSum(8, 10));