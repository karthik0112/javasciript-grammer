/*const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ]
myAwesomeArray.forEach(element => console.log(element.name))*/

const newArray = [5, 4, 3, 2, 1]
//let arr=newArray.map((item) => item * item);
//console.log(arr);
function item(x){
  return x*x
}
  console.log(newArray.map(item));
 
