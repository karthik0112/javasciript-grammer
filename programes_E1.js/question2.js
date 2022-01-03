var a = true;
var b = 1;
var c = true;
console.log (a == b); // first convert 1 into boolean true then compare
console.log (a === c); // both are of same type no conversion required simple compare.
console.log (a === b); // no conversion performed and type of both operands are not of same type so expected result is false.

