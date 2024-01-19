"use strict";

// HOMEWORK #18

let arr = [1, 2, 3, -1, -2, -3];


function funArr(arr) {
    const exampleArr = [];

    if (arr.length === 0) {
        return console.log("Array is empty");
    }

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }

    if (exampleArr.length > 0) {
        return console.log(exampleArr);
    } else {
        return console.log(null);
    }
}

funArr(arr);