"use strict";

const bodyDoc = document.body;

// console.log(bodyDoc.childElementCount);
const ulChildren = bodyDoc.firstElementChild.childNodes;

// console.log(ulChildren);

let count = 0;
for (let child of ulChildren) {
    console.log(child);
    count++;
}
console.log(count);
