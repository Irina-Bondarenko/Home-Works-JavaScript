"use strict";

// HOMEWORK #30

void function () {
    function bind(foo, context, argument) {
        return function () {
            foo.apply(context, argument);
        };
    }

    /// for testing - Start

    const objVlad = {
        name: "Vlad",
        age: 30,
        objValue: function () {
            console.log(this.name);
            console.log(this.age);
        },
    };

    const Igor = {
        name: "Igor",
        age: 20,
    };

    //// for testing - End

    const bindFoo = bind(objVlad.objValue, Igor);
    bindFoo();
}();