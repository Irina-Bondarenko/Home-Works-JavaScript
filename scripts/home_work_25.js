"use strict";

// HOMEWORK #25

function funcSum() {
    let num = 0;


    return (number) => {
        num += number;
        return num;
    };
}

let Sum = funcSum();
console.log(Sum(2));
console.log(Sum(3));
console.log(Sum(5));
