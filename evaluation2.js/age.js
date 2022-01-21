"use strict";
const year_born = 2000;
let d = new Date();
let n = d.getFullYear();
function getAge(birthYear){
	let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const calculatedAge = getAge(year_born);
console.log("your age is " +  calculatedAge);