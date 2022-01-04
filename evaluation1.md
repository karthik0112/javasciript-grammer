## 1.prime number
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
 



