
/*function Orange(){
    console.log(this);
}
Orange();
let orange=new Orange();*/


const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.lastName;
    }
  };
  console.log(person.myFunction());