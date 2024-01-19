"use strict";

void function () {

    const formSelector = "#form";
    const dataLoad = localStorage.getItem(formSelector);
    const dataLoadParsed = JSON.parse(dataLoad);

    const ulCreating = document.createElement("ul");

    for (let item in dataLoadParsed) {
        const liCreating = document.createElement("li");

        if (dataLoadParsed[item] === "") {
            liCreating.innerHTML = "Error - No data";
        } else {
            liCreating.innerHTML = dataLoadParsed[item];
        }

        ulCreating.append(liCreating);
    }

    document.body.prepend(ulCreating);
}();