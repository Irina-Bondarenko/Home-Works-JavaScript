"use strict";


// HOMEWORK #6


// Task #1

let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

console.log(user);

delete user.name;


// Task #2

// Можно ли изменить объект, объявленный с помощью const?
//
// const user = {
//
//     name: «John»
//
// };
//
// // это будет работать?
//
// user.name = «Pete»;

const user2 = {
    name: "John"};

user2.name = "Pete";

console.log(user2);

// Будет работать, так как объявление const защищает от изменений только саму переменную user2,
// а не её содержимое.



// Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}

console.log(sum);


