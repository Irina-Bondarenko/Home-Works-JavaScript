"use strict";

// HOMEWORK #29

void function () {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep() {
            // показывает текущую ступеньку
            alert(this.step);
            return this;
        },
    };

    // console.log(ladder.up());
    // console.log(ladder.up());
    // console.log(ladder.down());
    // console.log(ladder.showStep());

    console.log(ladder.up().up().down().showStep());
}();