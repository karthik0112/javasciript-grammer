var a = [1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];
var c = a.filter(value => b.includes(value))
console.log(c)