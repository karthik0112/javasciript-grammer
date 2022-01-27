"use strict";
const year_born = 2000;
function getAge(birthYear){
	const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const calculatedAge = getAge(year_born);
console.log("your age is " +  calculatedAge);