"use strict";

// HOMEWORK #28

void function () {
    let numberFirst = 0;
    let numberSecond = 0;

    let calculator = {
        read() {
            calculator.numberFirst = +prompt("Insert First Number");
            calculator.numberSecond = +prompt("Insert Second Number");
            return "Thank you for data inserting";

            if (isNaN(this.numberFirst) || isNaN(this.numberSecond)) {
                alert("You inserted incorrect data");
            }
        },

        sum() {
            return this.numberFirst + this.numberSecond;
        },

        multiply() {
            return this.numberFirst * this.numberSecond;
        },
    };

    console.log(calculator.read());
    console.log(calculator.sum());
    console.log(calculator.multiply());
}();