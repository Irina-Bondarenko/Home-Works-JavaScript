"use strict";

// HOMEWORK #24

let numForChecking = 18765;
let iterationsQty = 0;
let reversedNum = 0;

function palindrome(number) {
    function getReversedNum(number) {
        reversedNum = Number([...number.toString()].reverse().join(""));
        return reversedNum;
    }

    getReversedNum(number);

    if (numForChecking === reversedNum) {
        return {
            number,
            iterationsQty,
        };
    } else {
        numForChecking += reversedNum;
        iterationsQty++;
    }

    return palindrome(numForChecking);
}

console.log(palindrome(numForChecking));