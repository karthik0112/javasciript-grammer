let a = [1,2];
let b = [1,2];
let c = [5,5];
function is_array(value) {
    return typeof value.reduce=="function"&&
           typeof value.filter=="function"&&
           typeof value.map=="function"&&
           typeof value.length=="number";
}
function arrcmp(a,b){
    // one or more values are not arrays:
    if(!(is_array(a)&&is_array(b)))
     return false;
   //Not equal by length
   if(a.length != b.length)
   return false;
   //compare by value
   for(let i=0;i<a.length;i++)
   if(a[i]!==b[i])
   return false;
   //All test passed: array a and b are equal
return true;

}
 console.log(arrcmp(a,b));//true
 console.log(arrcmp(b,b));//true
 console.log(arrcmp(a,c));//false
 /*var a={id: 1, name: "edison"};
var b={id: 1, name: "edison"};
var c={id: 1, name: "edison"};
var d={id: 1, name: "edison"};
function cmp(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  console.log(cmp(a, c)); // => true
  console.log(cmp(c, d)); // => false*/
  