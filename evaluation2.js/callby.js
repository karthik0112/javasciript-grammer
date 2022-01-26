"use strict";
const a={p:2}//call by reference
const y=a;
a.p=7;
console.log(y.p);

"use strict";
let valueC = 5;//call by value
const valueD= valueC;
valueC = 3;
console.log(valueC);
console.log(valueD);