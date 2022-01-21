"use strict";
const Array1 = [1,2,3,4,5,6,7,8,9,10];
const Array2 = [2,4,5,7,11,15];
const filteredArray = Array1.filter(value => Array2.includes(value))
console.log(filteredArray);