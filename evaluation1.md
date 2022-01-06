### 1. Check prime number
**algorithm**

  - step 1. Start the program.
  - step 2. Write a function with parameter and assign to a variable.
  - step 3. Check the number is n%2===0.
  - step 4. if the condition is wrong then it will return false.
  - step 5. else it will return true.
  - step 6. stop

**psuedocode**
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
 
 **code**
```javascript
function isPrime(num) {
    if (num % 2 === 0) {
    return false;
   }
   return true;
}
   console.log(isPrime(6));
```
**output**
```console
false
 ```
### 2.Diffence between == and === operator
 
- The difference between == and === is that: == converts the variable values to the same type before performing comparison...
- === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

**algorithm**

  - step 1. Start the program.
  - step 2. now assigning values to a variable.
  - step 3. Then compare the values to types.
  - step 4. after comparision it will print either true or false.
  - step 5. stop

**psuedocode**
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
**code**
```javascript
var a = true;
var b = 1;
var c = true;
console.log (a == b); 
console.log (a === c);
console.log (a === b);
```
**output**
```console
true
true
false
```
### 3.how would you reverse a string in JavaScript?

**algorithm**

  - step 1. Start the program.
  - step 2. create a function with reverse string.
  - step 3. initialize the new string to variables.
  - step 4. Then add the string reversly with reversed variable.
  - step 5. Call the function with string.
  - step 6. print the result
  - step 7. stop
 
**pseudocode**
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
**code** 
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
**output**
```console
dlrow olleh
```

### 4. How would you reverse words in a sentence?

**algorithm**
  
  - step 1. Start the program.
  - step 2. create a function with parameter of reverse.
  - Step 2. Use the reverse() method to reverse the new created array
  - Step 3. Use the join(" ") method to join all elements of the array into a string
  - Step 4. Return the reversed string
  - Step 5. Call the string function with string parameters
  - Step 6. Stop.

**psuedocode**
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
**code**
```javascript
function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    return word

}
word = 'i like this program very much'
console.log(reverse(word))
```
**output**
```console
much very program this like i
```

### 5. How will you verify a word as a palindrome? 

**algorithm**

- Step 1. Start the program.
- Step 2. Create a function with string parameter
- Step 3. Initialise the varibale to know the length of string.
- Step 4. Run the for loop for iteration of half word.
- Step 5. Use if condition to check first value with last value else print not palindrome.
- Step 6. Then call the function with string parameter.
- Step 7. Stop.

**psuedocode**
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
**code**
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
**output**
```console
The string is a palindrome
NOT a palindrome
```


### 6.Write your own program to explain the difference between forEach and map?

**Map()** : If you use map then map can return new array by iterating main array.
**Foreach()** : If you use Foreach then it cannot return anything for each can iterating main array.

**algorithm**
  
- Step 1. start the program
- Step 2. Create a array with number values.
- Step 3. Use map method with the array and write the event.
- Step 4. Use the forEach to iterate the values.
- Step 5. Print the values
- Step 6. stop

**psuedocode**
```
BEGIN
INIT numbers
PRINT map(element => element * element)
PRINT forEach(element => element * element) 
```
**code**
**forEach**
```javascript
const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ]
myAwesomeArray.forEach(element => console.log(element.name))
```
**output**
```console
john
Ali
Mass
```
**code**
**map**
```javascript
const numbers = [5, 4, 3, 2, 1]
console.log(numbers.map(element => element * element)) 
```
**output**
```console
[25,16,9,4,1]
```

### 7.Generate a random number between 1 to 5?

**algorithm**

- Step 1. start the program
- Step 2. Use Math.floor to returns the largest integer less than or equal to a given number
- Step 3. Math.random to get the random value till given number.
- Step 5. Add the number 1 to avoid the 0 values.
- Step 6. Then print the number.
- Step 7. Stop.

**psuedocode**
```
BEGIN
INIT rndInt
PRINT (Math.floor((Math.random() * 5) + 1));
```
**code**
```javascript
const rndInt = Math.floor(Math.random() * 5) + 1;
console.log(rndInt);
```
**output**
```console
4
3
2
1
```

### 8. Remove duplicate from the following array?([1,2,9,4,5,8,3,5,1,4,5])

**algorithm**

- Step 1. start the program
- Step 2. Create a array with number values.
- Step 3. use SET method 
- Step 4. array initialized with SET method
- Step 5. Print the values
- Step 6. stop

**psuedocode**
```
BEGIN
INIT numbers
INIT uniquenumbers
SET numbers
PRINT uniquenumbers
```
**code**
```javascript
let numbers = [1,2,9,4,5,8,3,5,1,4,5];
let uniquenumbers = [...new Set(numbers)];
console.log(uniquenumbers);
```
**output**
```console
[1,2,9,4,5,8,3]
```

### 9. Write a program to calculate the sum of the first 10 natural numbers.

**algorithm**

- Step 1. start the program.
- Step 2. Declare two varibale sum = 0 , i = 1.
- Step 3. Use for loop to iterate the values.
- Step 4. Add the iterated values inside the for.
- Step 5. Print the value and call the function.
- Step 6. Stop.

**psuedocode**
```
BEGIN
INIT variable number
i and sum as integer; 
READ number number ; 
for i upto n increment i by 1 and i=1 
{ sum=sum+i; } 
PRINT sum; 
```
**code**
```javascript
let number=10;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
```
**output**
```console
The sum of natural numbers:55
```
### 10. Write a program to print the sum of the even and odd numbers for a given number?(100)

**algorithm**

- Step 1. start the program
- Step 2. Declare two variables odd and even with 0 value.
- Step 3. Iterate for loop till 100 times.
- Step 4. if(i % 2 == 0) then print even numbers
- Step 5. else print odd numbers.
- Step 6. Call the function.
- Step 7. Stop.


**psuedocode**
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
**code**
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
**code**
```console
total odd numbers is 2500
total even numbers is 2550
```

### 11. Write a program to merge two arrays? 

**algorithm**

- Step 1. start the program.
- Step 2. Declare two arrays arr1,arr2.
- Step 3. creat the new array 
- Step 4. to concatinate the array values to the new array.
- Step 5. Print the new array
- Step 6. Stop.

**psuedocode**
```
BEGIN
INIT arr1;
INIT arr2;
 THEN 
ADD arr1,arr2 ;
PRINT new array
``` 
**code**
```javascript
const arr1 = [1,2,9,3,5,1,4,5];
const arr2 = [11,54,70,40];

const newarray = arr1.concat(arr2); 
console.log(newarray);
```
**output**
```console
[1,2,9,3,5,1,4,5,11,54,70,40]
```

### 12. Remove duplicate from an array of an object by id and name?

**algorithm**

- Step 1. Start the program.
- Step 2. initialize a constructor and array.
- Step 3. And use filtered function to iterate the values in array.
- Step 4. to check the name and id in consructor with has() method by using declared variables 
- Step 5. Check both values using !duplicate1,duplicate2 and return the value.
- Step 6. Then call the function with array.
- Step 7. print the output.
- Step 8. stop.

**psuedocode**
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

**code**
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
**output**
```console
Set {
  1,'Stephen covey',2,'Robin Sharma',3,'Tolstoy',4,'James clear'
}
```

### 13.Compare two objects, If all properties are equal return true or return false?

**algorithm**

- Step 1. Start the program.
- Step 2. Initialize the objects.
- Step 3. To create a function with object1,object2 parameters.
- Step 4. To get the keys from two parameters then check both length.
- Step 5. To check both of properties with if condition return the boolean values.
- Step 6. Call the function with given properties.
- Step 7. Print result
- Step 8. Stop.


**psuedocode**
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

**code**
```javascript
var a={id: 1, name: "edison"};
var b={id: 1, name: "edison"};
var c={id: 1, name: "edison"};
var d={id: 2, name: "edison"};
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
```
**output**
```console
true
false
```

### 14.Take a multidimensional array and flat the array?

**algorithm**

- Step 1. start program
- Step 2. To create a muiltidimentional array.
- Step 3. To use multi.flat to flat the array to single array.
- Step 4. Print the Array.
- Step 5. Stop.

**psuedocode**
```
BEGIN
INIT multi = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
PRINT (multi.flat(Infinity));
END
```
**code**
```javascript
let multi = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
console.log(multi.flat(Infinity));
```
**output**
```console
[
     1,   4,   2,    3,
    10,  20,  20,  100,
   500, 700, 600, 2000,
  1000
]
```

### 15. Group by the id of the following array of objects using the Array.reduce method?

**algorithm**

- Step 1. Start the program.
- Step 2. Initialize the array and its objects.
- Step 3. TO use the reduce function to iterate previous value with current value.
- Step 4. Check the both values and add count into previous value or make it one
- Step 5. Print the value.
- Step 6. Stop.

**psuedocode**
```
BEGIN
INIT peoples=[{id :1 ,name:'edison'}]
DECLARE groupByid = peoples.reduce((r,a)
  r[a.id] = r[a.id] + 1 || 1;
  RETURN r;
PRINT groupByid; 
END
```
**code**
```javascript
var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);
```
**output**
```console
{ '1': 1, '2': 1, '3': 1 }
```

### 16. Write a program in Javascript to display the pattern like right angle triangle using an asterisk

**algorithm**

- Step 1. Start the program.
- Step 2. Declare one empty string and size.
- Step 3. for loop will execute and increase the i values.
- Step 4. Then print the string.
- Step 5. Stop.

**psuedocode**
```
BEGIN
INIT string = "";
INIT size = 5;
FOR(let i = 1; i <= size; i++) 
    SET string += "*";
ENDFOR
PRINT (string);
```
**code**
```javascript
var string = "";
var size =5;
for(var i=1; i<=size; i++)

{
  string= string+"*";
  console.log(string);
}
```
**output**
```console
*
**
***
****
*****
```
### 17. Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1

**algorithm**

Step 1. Start the program.
Step 2. Declare empty string and nitialize the value of 4 
Step 3. Initialize count with value of 1.
Step 4. Run for loop 4 times then run the nested for loop i times.
Step 5. Add the count value to a variable as string and it will execute "\n"
Step 6. Print the string variable.
Step 7. Stop.

**psuedocode**
```
BEGIN 
INIT string = "";
INIT size = 4; 
INIT count = 1;
FOR(let i = 1; i <= size; i++)
   FOR(let j = 1; j <= i; j++)
     SET string += " " + count;
     SETcount++;
   ENDFOR
   SET string += "\n";
ENDFOR
PRINT (string);
END
```
**code**
```javascript
let string = "";
let size = 4; 
let count = 1;
for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= i; j++) {
    string += " "+count;
    count++;
  }
  string += "\n";
}
console.log(string);
```
**output**
```console
1
2 3
4 5 6
7 8 9 10
```

### 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1

**algorithm**

- Step 1. start the program.
- Step 2. Initialize count variable and one empty string.
- Step 3. Create for loop to iterate values of specified condition.
- Step 4. After that create another for loop with condition of (2*i)-i
- Step 5. Add the count value to string and increment count.
- Step 6. print the value.
- Step 7. Stop.

**psuedocode**
```
BEGIN
INIT n;
INIT number = "";
INIT count=1;
FOR (let i = 1;i<n;i++)
  FOR (let j = 1;j<= n - i;j++) 
    SET number += " ";
    ENDFOR
  FOR (let k = 0; k < 2*i-i ; k++) 
   SET number += count;
   SET count++;
   SET number += "
   ENDFOR
  SET += "\n";
  ENDFOR
PRINT (number);
```
**code**
```javascript 
let n=5;
let num = "";
let count = 1;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n - i; j++) {
    num += " ";
  }
  for (let k = 0; k < 2*i-i; k++) {
    num +=count;
    count++;
    num +=" "; 
  }  
  num += "\n";
}
console.log(num);
```
**output**
```console
   1
  2 3
 4 5 6
7 8 9 10
```

### 19. Write a program in Javascript to display the pattern like a diamond?

**algorithm**

- Step 1. Start the program.
- Step 2. Initialize n variable and empty string.
- Step 3. create for loop and will execute 2*i-1 times for print stars.
- Step 4. To add "/n" for printing new line .
- Step 5. After that it will execute reverse pyramid.
- Step 6. print the values.
- Step 7. Stop

**psuedocode**
```
BEGIN
INIT n = 5;
INIT string = "";
FOR (let i = 1; i <= n; i++) 
  FOR (let j = 1; j < n - i + 1; j++)
   SET string += " ";
  ENDFOR
  FOR (let k = 1; k <= 2 * i - 1; k++)
   SET string += "*"; 
   SET string += "\n";
  ENDFOR
ENDFOR
 FOR (let i = 1; i <= n - 1; i++)
    FOR (let j = 1; j < i + 1; j++)
     SET string += " ";
    ENDFOR
    FOR (let k = 1; k <= 2 * (n - i) - 1; k++)
      SET string += "*"; 
      SET string += "\n";
    ENDFOR  
ENDFOR
PRINT (string);
END
```
**code**
```javascript
let n = 5;
let string= "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j < n -i + 1; j++) {
    string += " ";
  }
  // printing star
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}

// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 1; j < i+1; j++) {
    string += " ";
  }
  // printing star
  for (let k = 1;k <= 2 * (n - i) - 1;k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```
**output**
```console
    *
   ***
  *****
 *******
*********
 *******
  *****
   *** 
    *
```

### 20.Explain the following terms console.log().console.count()?

**console.log();** 

  - The log() method is useful for testing purposes.

**code**  
```javascript
console.log("hell0");
```
**output**
```console
hello
```
**console dir();**
 
  - if you want to look at all the object’s properties and methods,you can use console.dir method

**code**
```javascript
let object = { property1 : 1, property1 : 2, method : function(){} };
console.dir(object);  
```
**output**
```console
{ property: 1, prop1: 2, method: [Function: method] }
```
**console.count()**

  - The console.count() method logs the number of times that this particular call to count() has been called.

**code**
```javascript
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}
```
**output**
```console
myLabel: 1
myLabel: 2
myLabel: 3
myLabel: 4
myLabel: 5
```

**console.table**

  - The console.table() method displays tabular data as a table.

**code**
```javascript
var arr1=["Audi", "Volvo", "Ford"]
console.table(arr1);
```
**output**
```
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'Audi'  │
│    1    │ 'Volvo' │
│    2    │ 'Ford'  │
└─────────┴─────────┘
```
**console time() and console.timeEnd()**

  - The **console.time()** method starts a timer you can use to track how long an operation takes.
  - The **console.timeEnd()** stops a timer that was previously started by calling console.time().

**code** 
```javascript
console.time();
let arr = Array(1000);
for(let i=0; i<arr.length; i++) {
arr[i] = new Object();
}
console.timeEnd(); 
```
**output**
```console
default: 0.45703125 ms
```

**console.trace()**

  - The trace() method displays a trace that show how the code ended up at a certain point.

**code**
```javascript  
function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
    foo();
```
**output**
```console
bar	
foo	
(anonymous)
```

**console.group() and group end()**

  - The **group()** method starts a message group.All new messages will be written inside this group.
  - The **groupEnd()** ends a message group.

**code**
```javascript
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");  
```
**output**
```console
Hello world!
Hello again, this time inside a group!
and we are back.
```

**console.assert()**

  - The **console.assert()** method writes an error message to the console if the assertion is   false. If the assertion is true, nothing happens.

**code**
```javascript
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
assert();
```
**output**
```console
Assertion failed
```















































 



