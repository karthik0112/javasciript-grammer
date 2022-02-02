"use strict";
//'this' inside class
class thisClass{
    constructor(name) { 
      this.name=name;
    }
    hello(){
      console.log(this.name);
    }
}
const obj = new thisClass("karthi");
obj.hello();