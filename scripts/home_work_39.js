"use strict";

void function () {
    let cache = new Map();

    function cacheFunc(funcGen) {
        if (cache.size >= 10) {
            cache.clear();
            console.log("Кеш был очищен");
            return;
        }

        let someResult = funcGen();
        const dataResult = someResult % 2;

        if (dataResult === 0) {
            console.log("Вы ввели четное число");
        } else {
            console.log("Вы ввели НЕчетное число");
        }

        if (!cache.has(someResult)) {
            console.log("Adding data...");
            cache.set(someResult, dataResult);
        } else {
            console.log("Searching data...");
        }

        return cache.get(someResult);
    }

    function funcGen() {
        let arg1 = +prompt("Input first number");

        if (isNaN(arg1)) {
            console.log("You entered not a number/s");
            return;
        }

        return arg1;
    }

    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen);
    cacheFunc(funcGen); //11
}();