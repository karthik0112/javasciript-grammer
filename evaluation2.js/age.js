const year_born = 1990;
let d = new Date();
let n = d.getFullYear();
function getAge(birthYear){
	let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
console.log("your age is " +  calculatedAge);