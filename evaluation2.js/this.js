
/*function Orange(){
    console.log(this);
}
Orange();
let orange=new Orange();*/

//"use strict";
console.log(this);
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : ()=> {
    console.log(this);
      return this.lastName;
    
    }
  };
  console.log(person.myFunction());