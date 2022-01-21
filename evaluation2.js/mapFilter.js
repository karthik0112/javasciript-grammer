"use strict";
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));//reduce

"use strict";
let number = [24,24,2,4,56,85,63];
let condition = number.map(value => value + 1);//map
console.log(condition);

/*let number = [0,10,2,3,4,5,6,7]
let condition = value => value < 10;
let filtered = number.filter(condition); //filter
console.log(filtered);*/
