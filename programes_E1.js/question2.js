const checkA = true;
const checkB = 1;
const checkC = true;
console.log (checkA == checkB); // first convert 1 into boolean true then compare
console.log (checkA === checkC); // both are of same type no conversion required simple compare.
console.log (checkA === checkB); // no conversion performed and type of both operands are not of same type so expected result is false.

