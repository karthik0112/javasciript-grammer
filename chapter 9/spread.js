/*function colorfun(...color){
    console .log(arguments);
}
 colorfun('green','red');

 var num = [1, 2, 3];
let numb = [4, 5, 6];
const numberss = [...num, ...numb];

console.log(numberss);*/


/*let subscribed =["netflix","amazon"];
const ott = [...subscribed,"disney","zeetv"];
console.dir(ott);*/

let arr1=[1,2,3,4,5];
let arr2=[...arr1];//spread operator//shallow copy//
arr1[0]=[9];
console.log(arr1);
console.log(arr2);
