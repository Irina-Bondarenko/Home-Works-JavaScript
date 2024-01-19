"use strict";

// HOMEWORK #27
void function () {
    function makeCounter(number) {
        let num = 0;
        let qtyValue = 0;
        let qtyIncrease = 0;
        let qtyDecrease = 0;

        return function counter() {
            return {
                value: () => {
                    qtyValue = qtyValue + 1;
                    return num;
                },

                increase: () => {
                    qtyIncrease = qtyIncrease + 1;
                    num = num + 1;
                    return num;
                },

                decrease: () => {
                    qtyDecrease = qtyDecrease + 1;
                    num = num - 1;
                    return num;
                },

                getStatic: () => {
                    return {
                        qtyValue,
                        qtyIncrease,
                        qtyDecrease,
                    };
                },

                zeroing: () => {
                    qtyValue = 0;
                    qtyIncrease = 0;
                    qtyDecrease = 0;
                    return "The counter now is empty";
                },
            };
        };
    }
    let makeCounterVar = makeCounter();
    console.log(makeCounterVar().increase());
    console.log(makeCounterVar().increase());
    console.log(makeCounterVar().increase());
    console.log(makeCounterVar().decrease());
    console.log(makeCounterVar().value());

    console.log(makeCounterVar().getStatic());

    console.log(makeCounterVar().zeroing());

    console.log(makeCounterVar().getStatic());
}();