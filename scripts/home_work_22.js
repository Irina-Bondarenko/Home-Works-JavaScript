"use strict";

// HOMEWORK #22

void function () {
    /// 1 ///
    console.log("Task#1 - Method indexOf");

    let index1 = null;

    let arr = [8, 5, 3, 9, 22, 4, 21, 5];

    function indexOf(item, fromIndex = 0) {
        if (fromIndex < 0) {
            fromIndex = arr.length - -fromIndex;
        } else if (fromIndex >= arr.length) {
            index1 = -1;
        }
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === item) {
                return (index1 = i);
            } else {
                index1 = -1;
            }
        }
        return index1;
    }

    console.log(indexOf(5, -8));

    /// 2 ///
    console.log("Task#2 - Method lastIndexOf");

    let arr2 = [8, 5, 3, 9, 22, 4, 21, 3, 9];

    let index2 = null;

    function lastIndexOf(item, fromIndex) {
        for (let i = fromIndex; i >= 0; i--) {
            if (arr2[i] === item) {
                return (index2 = i);
            } else {
                index2 = -1;
            }
        }
        return index2;
    }

    console.log(lastIndexOf(9, 7));

    /// 3 ///
    console.log("Task#3 - Method find");

    let arr3 = [5, 3, 9, 4, 21, 3, 9];

    function findCallback(elem) {
        return elem % 2 === 0;
    }

    function findFunc(callback, arr) {
        let value = undefined;

        for (let i = 0; i <= arr.length; i++) {
            if (callback(arr[i]) === true) {
                return (value = arr[i]);
            }
        }
        return value;
    }

    const find = findFunc(findCallback, arr3);
    console.log(find);

    /// 4 ///
    console.log("Task#4 - Method findIndex");

    let arr4 = [5, 3, 9, 4, 21, 3, 9];

    const findIndexCallback = (elem) => elem % 2 === 0;

    function findIndexFunc(callback, arr) {
        let value1 = -1;

        for (let i = 0; i <= arr.length; i++) {
            if (callback(arr[i]) === true) {
                return (value1 = i);
            }
        }
        return value1;
    }

    const findIndex = findIndexFunc(findIndexCallback, arr4);
    console.log(findIndex);

    /// 5 ///
    console.log("Task#5 - Method includes");

    let arr5 = [5, 3, 9, 4, 21, 3, 9];

    function includes(elem, indexFrom = 0) {
        if (indexFrom < 0) {
            indexFrom = arr5.length + indexFrom;
        }
        let value2 = false;
        for (let i = indexFrom; i <= arr5.length; i++) {
            if (elem === arr5[i]) {
                return true;
            }
        }
        return value2;
    }

    const includesChecking = includes(21, -3);
    console.log(includesChecking);

    // / 6 ///
    console.log("Task#6 - Method every");

    let arr6 = [5, 3, 9, 4, 21, 3, 9];
    let arr7 = [30, 90, 40, 210, 30, 90];

    const everyCallback = (elem) => elem > 10;

    function every(callback, arr) {
        let value3 = true;
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i]) === false) {
                return false;
            }
        }
        return value3;
    }

    const everyCheckingFalse = every(everyCallback, arr6);
    const everyCheckingTrue = every(everyCallback, arr7);

    console.log(everyCheckingFalse);
    console.log(everyCheckingTrue);

    /// 7 ///
    console.log("Task#7 - Method some");

    let arr8 = [5, 3, 9, 4, 21, 3, 9];
    let arr9 = [3, 9, 4, 2, 3, 9];

    const someCallback = (elem) => elem > 10;

    function some(callback, arr) {
        let value4 = false;
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i]) === true || arr.length === undefined) {
                return true;
            }
        }
        return value4;
    }

    const someCheckingTrue = some(someCallback, arr8);
    const someCheckingFalse = some(someCallback, arr9);

    console.log(someCheckingFalse);
    console.log(someCheckingTrue);
}();