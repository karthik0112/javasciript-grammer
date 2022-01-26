"use strict";
//'this' inside function
const thisFunction = function () {
    return this;
};
const obj = new thisFunction();
console.log(obj);


  
/*"use strict";
//'this' inside class
class thisClass{
    constructor() {
      return this;
    }
}
const obj = new thisClass();
console.log(obj);*/
