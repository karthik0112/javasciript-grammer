## 1. Check prime number
* algorithm
  - step 1. Start the program.
  - step 2. Write a function with parameter and assign to a variable.
  - step 3. Check the number is n%2===0.
  - step 4. if the condition is wrong then it will return false.
  - step 5. else it will return true.
  - step 6. stop

* psuedocode
```
BEGIN
  FUNCTION isPrime(num)
    IF (num%2===0)
     RETURN false
     THEN 
     RETURN true
    ENDIF
  ENDFUNCTION  
END
```  
 
 * code
```javascript
function isPrime(num) {
    if (num % 2 === 0) {
    return false;
   }
   return true;
}
   console.log(isPrime(6));
```
## 2.Diffence between == and === operator
 
- The difference between == and === is that: == converts the variable values to the same type before performing comparison...
- === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

* algorithm
  - step 1. Start the program.
  - step 2. now assigning values to a variable.
  - step 3. Then compare the values to types.
  - step 4. after comparision it will print either true or false.
  - step 5. stop

* psuedocode
```
BEGIN
  INIT a
  INIT b,c
  COMPARE a == b
    PRINT TRUE
  CHECK a === c 
    PRINT TRUE 
  THEN
END 
``` 
* code
```javascript
var a = true;
var b = 1;
var c = true;
console.log (a == b); 
console.log (a === c);
console.log (a === b);
```
## 3.how would you reverse a string in JavaScript?

* algorithm
  - step 1. Start the program.
  - step 2. create a function with reverse string.
  - step 3. initialize the new string to variables.
  - step 4. Then add the string reversly with reversed variable.
  - step 5. Call the function with string.
  - step 6. print the result
  - step 7. stop
 
* pseudocode
```
 BEGIN
  FUNCTION reverseString(str)  
   INIT newString
   FOR (i = str.length -1; i >= 0; i--)
    SET newString = str[i]
   ENDFOR
   RETURN newString
  SET result
  PRINT result
END 
``` 
* code 
```javascript
function reverseString(str) {
    let newString = "";
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = ('hello world');

const result = reverseString(string);
console.log(result);
```
## 4. How would you reverse words in a sentence?

* algorithm
  
  - step 1. Start the program.
  - step 2. create a function with parameter of reverse.
  - Step 2. Use the reverse() method to reverse the new created array
  - Step 3. Use the join(" ") method to join all elements of the array into a string
  - Step 4. Return the reversed string
  - Step 5. Call the string function with string parameters
  - Step 6. Stop.

* psuedocode
```
BEGIN
  FUNCTION reverse(word)
    SET word.split(" ")
    SET reverse.join(" ")  
    RETURN word
  END FUNCTION
  SET word
  PRINT result
```    
* code
```javascript
function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    return word

}
word = 'i like this program very much'
console.log(reverse(word))
```

## 5. How will you verify a word as a palindrome? 

* algorithm

- Step 1. Use strict mode as public.
- Step 2. Create a function with string parameter
- Step 3. Initialise the varibale to know the length of string.
- Step 4. Run the for loop for iteration of half word.
- Step 5. Use if condition to check first value with last value else print not palindrome.
- Step 6. Then call the function with string parameter.
- Step 7. Stop.

* psuedocode
```
BEGIN
FUNCTION checkPalindrome(str)
     SET len = str.length;
     FOR (let i = 0; i < len / 2; i++)
       IF str[i] !== str[len - 1 - i]) 
         RETURN (It is not a palindrome.)
        ENDIF
       ENDFOR
     RETURN (It is a palindrome)
PRINT (checkPalindrome("redivider")
PRINT (checkPalindrome("redivide")
```
* code
```javascript
function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("The string is a palindrome");
}
console.log(checkPalindrome("redivider"));
console.log(checkPalindrome("karthi"));
```

## 6.Write your own program to explain the difference between forEach and map?
* Map() : If you use map then map can return new array by iterating main array.
* Foreach() : If you use Foreach then it cannot return anything for each can iterating main array.

* algorithm
  
- Step 1. start the program
- Step 2. Create a array with number values.
- Step 3. Use map method with the array and write the event.
- Step 4. Use the forEach to iterate the values.
- Step 5. Print the values
- Step 6. stop

* psuedocode
```
BEGIN
INIT numbers
PRINT map(element => element * element)
PRINT forEach(element => element * element) 
```
* code
```javascript
const numbers = [5, 4, 3, 2, 1]
console.log(numbers.map(element => element * element)) 

console.log(numbers.forEach(element => element * element))
```

## 7.Generate a random number between 1 to 5?

* algorithm

- Step 1. start the program
- Step 2. Use Math.floor to returns the largest integer less than or equal to a given number
- Step 3. Math.random to get the random value till given number.
- Step 5. Add the number 1 to avoid the 0 values.
- Step 6. Then print the number.
- Step 7. Stop.

* psuedocode
```
BEGIN
INIT rndInt
PRINT (Math.floor((Math.random() * 5) + 1));
```
* code
```javascript
const rndInt = Math.floor(Math.random() * 5) + 1;
console.log(rndInt);
```

## 8. Remove duplicate from the following array?([1,2,9,4,5,8,3,5,1,4,5])

* algorithm

- Step 1. start the program
- Step 2. Create a array with number values.
- Step 3. use SET method 
- Step 4. array initialized with SET method
- Step 5. Print the values
- Step 6. stop

* psuedocode
```
BEGIN
INIT numbers
INIT uniquenumbers
SET numbers
PRINT uniquenumbers
```
* code
```javascript
let numbers = [1,2,9,4,5,8,3,5,1,4,5];
let uniquenumbers = [...new Set(numbers)];

console.log(uniquenumbers);
```

## 9. Write a program to calculate the sum of the first 10 natural numbers.
* algorithm

- Step 1. start the program.
- Step 2. Declare two varibale sum = 0 , i = 1.
- Step 3. Use for loop to iterate the values.
- Step 4. Add the iterated values inside the for.
- Step 5. Print the value and call the function.
- Step 6. Stop.

* psuedocode
```
BEGIN
INIT variable number
i and sum as integer; 
READ number number ; 
for i upto n increment i by 1 and i=1 
{ sum=sum+i; } 
PRINT sum; 
```
* code
```javascript
let number=10;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
```
## 10. Write a program to print the sum of the even and odd numbers for a given number?(100)

* algorithm

- Step 1. start the program
- Step 2. Declare two variables odd and even with 0 value.
- Step 3. Iterate for loop till 100 times.
- Step 4. if(i % 2 == 0) then print even numbers
- Step 5. else print odd numbers.
- Step 6. Call the function.
- Step 7. Stop.


* psuedocode
```
BEGIN
  INIT a=100;
  INIT even=0,odd=0;
  FOR(let i=0;i<=value;i++) DO
    IF (i % 2 == 0) THEN
      even = even + i;
    ELSE 
      odd = odd + i;
    ENDIF
  PRINT ("The sum of even numbers:",even);
  PRINT ("The sum of odd numbers:",odd); 
END
```  
* code
```javascript
var a =100;
odd_sum=0;even_sum=0;
for (i = 1; i <=a; i++)
  {
    if (i % 2 == 0)
      even_sum = even_sum + i;
    else
      odd_sum = odd_sum + i;
  }
console.log("total odd numbers is", odd_sum);
console.log("total even numbers", even_sum);
```
## 11. Write a program to merge two arrays? 

* algorithm

- Step 1. start the program.
- Step 2. Declare two arrays arr1,arr2.
- Step 3. creat the new array 
- Step 4. to concatinate the array values to the new array.
- Step 5. Print the new array
- Step 6. Stop.

* psuedocode
```
BEGIN
INIT arr1;
INIT arr2;
 THEN 
ADD arr1,arr2 ;
PRINT new array
``` 
* code
```javascript
const arr1 = [1,2,9,3,5,1,4,5];
const arr2 = [11,54,70,40];

const newarray = arr1.concat(arr2); 
console.log(newarray);
```

## 12. Remove duplicate from an array of an object by id and name?

* algorithm

- Step 1. Start the program.
- Step 2. initialize a constructor and array.
- Step 3. And use filtered function to iterate the values in array.
- Step 4. to check the name and id in consructor with has() method by using declared variables 
- Step 5. Check both values using !duplicate1,duplicate2 and return the value.
- Step 6. Then call the function with array.
- Step 7. print the output.
- Step 8. stop.

* psuedocode
```
BEGIN
INIT set();
DECLARE arr and assigning the objects;
FUNCTION using filtered=arr.filter();
  SET add values.id
  SET add values.name
  RETURN !duplicate1,!duplicate2
ENDFUNCTION
PRINT a;
END
```  

* code
```javascript
let a = new Set();
let arr = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];

const filteredArr = arr.filter(values => {
  const duplicate1= a.has(values.id);
  a.add(values.id);
  const duplicate2= a.has(values.id);
  a.add(values.name);
  return !duplicate1,!duplicate2 ;
});
console.log(a);
```

## 13.Compare two objects, If all properties are equal return true or return false?

* algorithm
* psuedocode
```
BEGIN
INIT a,b,c and d
FUNCTION cmp(object1,object2)
    INIT keys1 = Object.keys(object1);
    INIT keys2 = Object.keys(object2);
    IF(keys1.length !== keys2.length)THEN
      RETURN false;
    ENDIF
    FOR(let key of keys1) 
       IF(object1[key] !== object2[key]) THEN
         RETURN false;
       ELSE
         RETURN true;
       ENDIF
    ENDFOR
ENDFUNCTION
END
```

* code
```javascript
var a={id: 1, name: "edison"};
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
  console.log(cmp(c, d)); // => false
  


## 14.Take a multidimensional array and flat the array?

* algorithm

- Step 1. start program
- Step 2. To create a muiltidimentional array.
- Step 3. To use multi.flat to flat the array to single array.
- Step 4. Print the Array.
- Step 5. Stop.

* psuedocode
```
BEGIN
INIT multi = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]];
PRINT (multi.flat(Infinity));
END
```
* code
```javascript
let multi = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
console.log(multi.flat(Infinity));
```

## 15. Group by the id of the following array of objects using the Array.reduce method?

* algorithm

- Step 1. Start the program.
- Step 2. Initialize the array and its objects.
- Step 3. TO use the reduce function to iterate previous value with current value.
- Step 4. Check the both value and add count into previous value or make it one
- Step 5. Print the value.
- Step 6. Stop.

* psuedocode
```
BEGIN
INIT peoples=[{id :1 ,name:'edison'}]
DECLARE groupByid = peoples.reduce((r,a)
  r[a.id] = r[a.id] + 1 || 1;
  RETURN r;
PRINT groupByid; 
END
```
* code
```javascript
var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);
```



























 



