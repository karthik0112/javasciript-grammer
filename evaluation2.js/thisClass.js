"use strict";
//'this' inside function
let thisFunction = function () {
    return this;
};
let obj = new thisFunction();
console.log(obj);