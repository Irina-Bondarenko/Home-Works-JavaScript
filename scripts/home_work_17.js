"use strict";

// HOMEWORK #17


function padString(str, length, symbol, bul = true) {
    if (str === undefined) {
        return "String was not entered";
    }

    else if (length === undefined) {
        return "Final string length was not entered";
    }

    else if (symbol === undefined) {
        return "Symbol for adding was not entered";
    }

    let strLength = str.length;

    if (strLength > length) {
        let num = +-str.length;
        str = str.substring(num, length);
        return str;
    } else if (strLength < length && bul === true) {
        let def = length - strLength;
        str = str + symbol.repeat(def);
        return str;
    } else if (strLength < length && bul === false) {
        let def = length - strLength;
        str = symbol.repeat(def) + str;
        return str;
    } else {
        console.log("No");
    }
}

console.log(padString("hello", 2, "*", false));