//const multi = [1,4,2,3,[10,20,20], [100,500,700,600],
//[2000,1000]];
//console.log(multi.flat(Infinity));
/*let array = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]];

let newArr = array.concat(); 
console.log(newArr);*/
const arr =[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]  

// To flat single level array
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
console.log(arr);