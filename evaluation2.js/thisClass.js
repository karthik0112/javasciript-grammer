"use strict";
//'this' inside function
let thisFunction = function () {
    return this;
};
let obj = new thisFunction();
console.log(obj);


  
/*"use strict";
//'this' inside class
class thisClass{
    constructor() {
      return this;
    }
}
let obj = new thisClass();
console.log(obj);*/
