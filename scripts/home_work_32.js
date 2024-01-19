"use strict";

const ulDoc = document.getElementById("ulId");

// console.log(ulDoc.childNodes);

let attr = Array.from(ulDoc.attributes);

// Массив атрибутов
console.log(attr);

const arrayOfAttrName = [];
const arrayOfAttrValue = [];

for (let i = 0; i < attr.length; i++) {
    arrayOfAttrName.push(attr[i].name)
    arrayOfAttrValue.push(attr[i].value)

}

// Массив имен атрибутов
console.log(arrayOfAttrName);

// Массив значений атрибутов
console.log(arrayOfAttrValue);

/////////////////////

ulDoc.lastElementChild.innerHTML = "«Привет меня зовут » + Java Script";

/////////////////////

ulDoc.firstElementChild.setAttribute("data-my-name", "Java Script");

/////////////////////

ulDoc.removeAttribute("data-dog-tail");