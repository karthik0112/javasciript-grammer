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

## 5. How will you verify a word as a palindrome? Algorithm

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

## Write your own program to explain the difference between forEach and map? .map

* algorithm
* psuedocode
* code



 



