"use strict";

// HOMEWORK #13

// Task#1

for (let task1 = 0; task1 <= 100; task1++) {
    console.log(task1);
}

// Task#2

for (let task2 = 100; task2 >= 0; task2--) {
    console.log(task2);
}

// Task#3

for (let task3 = 0; ; task3++) {
    if (task3 % 2 === 0) {
        console.log(task3);
    }

    if (task3 >= 100) {
        break;
    }
}

// Task#4

const arr4 = [1, 2, 3, 4, 5];
let sum4 = 0;

for (let task4 = arr4.length; ; task4--) {
    if (task4 >= 0) {
        sum4 += task4;
    } else {
        break;
    }
}

console.log(sum4);

// Task#4

const arr5 = [1, 2, 3, 4, 5];
let sum5 = 0;

for (let task4 = arr5.length; ; task4--) {
    if (task4 >= 0) {
        let pow = task4 ** 2;
        sum5 += pow;
    } else {
        break;
    }
}

console.log(sum5);
