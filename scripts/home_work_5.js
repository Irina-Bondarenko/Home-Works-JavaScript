"use strict";

// HOMEWORK #9

// Task# 1

// let numOrStr = prompt("Введите данные");
//
// if (numOrStr === null) {
//     console.log("вы отменили")
// }
//
// else if (numOrStr.trim () === "") {
//     console.log("Empty String")
// }
//
// else if (isNaN(+numOrStr)) {
//     console.log("Number is Ba_NaN")
// }

let numOrStr = prompt("Введите число");

if (numOrStr === null || numOrStr.trim() === "" || isNaN(+numOrStr)) {
    console.log("Error");

} else {
    console.log("Correct, it is a Number");
}

// Task# 2

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//   console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//   console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//   console.log(' number is Ba_NaN')
// } else {
//   console.log('OK!')
// }

let numOrStr2 = prompt("input number or string");
console.log(numOrStr2);

switch (true) {
    case numOrStr2 === null:
        console.log("вы отменили");
        break;

    case numOrStr2.trim() === "":
        console.log("Empty String");
        break;

    case isNaN(+numOrStr2):
        console.log(" number is Ba_NaN");
        break;

    default:
        console.log("OK!");
}