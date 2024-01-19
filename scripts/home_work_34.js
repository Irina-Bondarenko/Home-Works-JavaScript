"use strict";

void function () {
    const tableCreate = document.createElement("table");

    let num = 1;

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");

        for (let k = 0; k < 10; k++) {
            const col = document.createElement("td");
            col.innerHTML = `${num++}`;
            row.append(col);
        }
        tableCreate.append(row);
    }

    return document.body.append(tableCreate);
}();