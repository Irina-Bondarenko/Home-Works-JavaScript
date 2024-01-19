"use strict";

void function () {

    const formSelector = "#form";
    const form = document.querySelector(formSelector);

    function inputsInArray(element) {
        return element.querySelectorAll("input");
    }

    const submitHandler = (event) => {
        const inputs = inputsInArray(event.target);
        const dataSubmitted = {};

        for (const input of inputs) {
            dataSubmitted[input.name] = input.value;
        }

        localStorage.setItem(formSelector, JSON.stringify(dataSubmitted));

    };

    form.addEventListener("submit", submitHandler);
}();