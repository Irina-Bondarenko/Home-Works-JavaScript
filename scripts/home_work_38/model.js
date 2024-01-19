"use strict";

function model() {
    return {
        dbName: null,
        currentID: null,
        status: "no-status",

        setDBName(key) {
            if (!key.trim()) throw new Error("Incorrect key");

            this.dbName = key;
        },

        getData() {
            return JSON.parse(localStorage.getItem(this.dbName));
        },

        setStatus(id, selectValue) {
            const currentData = this.getData();

            currentData.forEach((item) => {
                if (item.id === id) {
                    item.status = selectValue;
                }
            });

            localStorage.setItem(this.dbName, JSON.stringify(currentData));
            console.log(currentData);
        },

        setData(data) {
            let response = null;
            const todoItemData = structuredClone(data);
            const savedData = this.getData();
            const dataToSave = savedData ? savedData : [];

            todoItemData.id = this.currentID;
            todoItemData.status = this.status;

            dataToSave.push(todoItemData);

            try {
                localStorage.setItem(this.dbName, JSON.stringify(dataToSave));
                response = { success: true, savedData: todoItemData };
                this.currentID += 1;
            } catch (error) {
                response = { success: false, errors: error };
            }
            return response;
        },

        removeTodoItem(id) {
            const data = this.getData();

            const updatedData = data.filter((todoItem) => todoItem.id !== id);

            if (updatedData.length) {
                localStorage.setItem(this.dbName, JSON.stringify(updatedData));
            } else {
                localStorage.removeItem(this.dbName);
            }
        },

        init(dbKey) {
            this.setDBName(dbKey);

            const savedData = this.getData();

            this.currentID = savedData ? savedData[savedData.length - 1].id + 1 : 1;
        },
    };
}