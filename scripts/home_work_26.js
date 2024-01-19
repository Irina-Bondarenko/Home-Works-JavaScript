"use strict";

// HOMEWORK #26
void function () {
    function randomGenerator() {
        const array = [];

        function getRandomNumber() {
            for (let i = 0; array.length < 100; i += 1) {
                let randomNumber = Math.floor(Math.random() * 100 + 1);

                if (!array.includes(randomNumber)) {
                    // console.log(array.includes(randomNumber))
                    array.push(randomNumber);
                }
            }

            return array;
        }

        return getRandomNumber();
    }

    let randomGeneratorVariable = randomGenerator();

    console.log(randomGeneratorVariable);
}();