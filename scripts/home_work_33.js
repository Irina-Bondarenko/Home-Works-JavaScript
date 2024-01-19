"use strict";

let generateUl = function (array) {
    let generateList = function (array, elem) {
        for (let item of array) {
            const li = document.createElement("li");

            if (Array.isArray(item)) {
                let ulInner = document.createElement("ul");
                li.append(generateList(item, ulInner));
            } else {
                li.innerHTML = item;
            }

            elem.append(li);
        }
        return elem;
    };
    return generateList(array, document.createElement("ul"));
};

let fooGenerate = generateUl([1, 2, [1, 2, 3], 3, 4, [1, 2, 3]]);

document.body.append(fooGenerate);