"use strict";
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));//reduce

"use strict";
const number = [24,24,2,4,56,85,63];
const condition = number.map(value => value + 1);//map
console.log(condition);

/*"use strict";
const number = [0,10,2,3,4,5,6,7]
const condition = value => value < 10;
const filtered = number.filter(condition); //filter
console.log(filtered);*/
