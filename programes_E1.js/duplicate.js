const numbers = [1,2,9,4,5,8,3,5,1,4,5];
const uniqueNumbers = [];
numbers.forEach((item) => {  
    if(!uniqueNumbers.includes(item)){  
       uniqueNumbers.push(item);  
    }  
 });  
console.log(uniqueNumbers);


/*let numbers = [1,2,9,4,5,8,3,5,1,4,5]  
let usingFilter = () => {  
return unique = numbers.filter(function(item,index){  
      return numbers.indexOf(item) == index;  
   });  
}
console.log(usingFilter(numbers));*/
