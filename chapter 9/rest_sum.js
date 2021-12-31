function sum(...args){
    let sum = 0;
    for (let temp of args)
    sum +=temp;
    return sum;
}
let add = sum(1,2,3,4,5);
console.log(add);