//const multi = [1,4,2,3,[10,20,20], [100,500,700,600],
//[2000,1000]];
//console.log(multi.flat(Infinity));
/*let array = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]];

let newArr = array.concat(); 
console.log(newArr);*/
const Array = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]
let newArray = [];

for(let i = 0; i < Array.length; i++)
{
    newArray = newArray.concat(Array[i]);
}

console.log(newArray);