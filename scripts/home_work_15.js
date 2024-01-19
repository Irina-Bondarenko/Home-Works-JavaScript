"use strict";

// HOMEWORK #15

const num = +prompt("Введите число");

if (isNaN(num)) {
    alert("Вы ввели не число");

} else if (num === 1) {
    console.log(false);

} else if (num < 1) {
    console.log(NaN);
}

else if (num > 0) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
            break;
        }
    }

}