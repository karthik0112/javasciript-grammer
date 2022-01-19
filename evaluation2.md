### 1.Display prime numbers
**algorithm**

  - step 1. Start the program.
  - step 2. Initialize variable and assigning the value to a variable.
  - step 3. Check the condition
  - step 4. if the condition is right then it will return true.
  - step 5. else it will return false.
  - step 6. stop

**psuedocode**
```
BEGIN
  INIT num
   FOR(var i=2; i<=num;i++)
    isprime=true
    FOR(var j=2; j<i; j++){
        IF(i%j === 0 && i !== j)
        isprime=false
        ENDIF
   ENDFOR 
END
```  
 
 **code**
```javascript
var num =("200");
for(var i=2; i<=num;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
           console.log(i);       
        }
    }
```
**output**
```console
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
 ```

### 2. From two sorted arrays, how would you find the common numbers?

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize two arrays and assigning the values.
  - step 3. By using filter,to find the common numbers.
  - step 4. Print the result
  - step 5. stop.
  
**psuedocode**
```
BEGIN
  INIT a,b and c;
  a.filter(value => b.includes(value))
  PRINT c;
END  
```  

**code**
```javascript
var a = [1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];
var c = a.filter(value => b.includes(value))
console.log(c);
```
**output**
```console
[2,4,5,7]
```

### 3. Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?

**anonymous function**
* An anonymous function is a function that was declared without any named identifier to refer to it. 
* As such, an anonymous function is usually not accessible after its initial creation. 

**algorithm**

  - step 1. Start the program.
  - step 2. To create function without name.
  - step 3. Print the result
  - step 4. stop.
  
**psuedocode**
```
BEGIN
 FUNCTION setTimeout
 PRINT ;
 ENDFUNCTION
END 
```  

**code**
```javascript
setTimeout(function() {
    console.log('Execute later after 1 second')//anonymous function
}, 1000);
```
**output**
```console
Execute later after 1 second
```
**function anotomy**
* The name of the function.
* A list of parameters to the function, enclosed in parentheses and separated by commas.
* The JavaScript statements that define the function, enclosed in curly brackets, {...}.

**algorithm**

  - step 1. Start the program.
  - step 2. To create function with name.
  - step 3. After that return the arguments
  - step 4. Print the result 
  - step 5 .stop.
  
**psuedocode**
```
BEGIN
 FUNCTION add(a,b)
   RETURN a+b
 PRINT add;
 ENDFUNCTION
END 
```  

**code**
```javascript
function add(a,b){ //function anotomy
    return a+b;
}
console.log(add(1,2));
```
**output**
```console
3
```
**assigning function to variable**
* Anonymous functions can be assigned to a variable, making them named functions
again. 
* By doing this you can separate the function definition from its use in an
event-based method

**algorithm**

  - step 1. Start the program.
  - step 2. To create function and assigning the function to variable.
  - step 3. After that calling the function by using the variable name.
  - step 4. Print the result 
  - step 5 .stop.
  
**psuedocode**
```
BEGIN
 INIT show=function()
  PRINT;
 ENDFUNCTION
show(); 
END 
```  

**code**
```javascript
let show = function() {
    console.log('Anonymous function');//assigning function to variables
};

show();
```
**output**
```console
Anonymous function
```
`
### 4. Show an example ofSafeguarding function parameters?

**algorithm**

  - step 1. Start the program.
  - step 2. To create function and check the function type.
  - step 3. If condition is true it will print its function. 
  - step 4. Else it will print its not a function.
  - step 5. To create the empty array and assigning the array to the function.
  - step 6. Callig the function to the array.
  - step 7. Stop.
  
**psuedocode**
```
BEGIN
 FUNCTION fun(func)
   IF(typeof func == "function")
    PRINT func; 
    ELSE
    PRINT Its not a function 
 ENDFUNCTION
 INIT array
 INIT f=function()
 fun(array)
END 
```  

**code**
```javascript
function fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
var array = [];
var f = function () {}
fun(array);//pass array instead of function
```
**output**
```console
Its not a function
```

### 5. Explain this keyword with an example?parameters?

* The this keyword is a reference variable that refers to the current object. 
* In a function, this refers to the global object.

**algorithm**

  - step 1. Start the program.
  - step 2. To create object and its properties.
  - step 3. RETURN this.lastname
  - step 4. Print result
  - step 5.Stop. 
  
**psuedocode**
```
BEGIN
 DECLARE person
   FUNCTION myFunction:function()
    RETURN this.lastname
   ENDFUNCTION
 PRINT person.myFunction()
END 
```  

**code**
```javascript
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.lastname;
    }
  };
  console.log(person.myFunction());
```
**output**
```console
Doe
```

### 6. How ‘this’ inside the function and class?

**algorithm**

  - step 1. Start the program.
  - step 2. To create object and its properties.
  - step 3. RETURN this.lastname
  - step 4. Print result
  - step 5.Stop. 
  
**psuedocode**
```
BEGIN
 DECLARE person
   FUNCTION myFunction:function()
    RETURN this.lastname
   ENDFUNCTION
 PRINT person.myFunction()
END 
```  

**code**
```javascript
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.lastname;
    }
  };
  console.log(person.myFunction());
```
**output**
```console
Doe
```

### 7. Difference between map, reduce and filter methods? With an example

**map**
* map() creates a new array from calling a function for every array element. 
* map() calls a function once for each element in an array. 

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the variable
  - step 3. And map the function
  - step 4. Print result
  - step 5.Stop. 
  
**psuedocode**
```
BEGIN
 DECLARE number
 INIT condition
 SET number.map(value => value + 1)
 PRINT condition
END 
```  

**code**
```javascript
let number = [24,24,2,4,56,85,63];
let condition = number.map(value => value + 1);//map
console.log(condition);
```
**output**
```console
[25,25,3,5,57,86,64]
```
**filter**

* The filter() method creates a new array with all elements that pass the test implemented by the provided function.

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the variable
  - step 3. And filter the function
  - step 4. Print result
  - step 5.Stop. 
  
**psuedocode**
```
BEGIN
 DECLARE number
 INIT condition
 SET number.map(value => value < 10)
 SET filtered=number.filter(condition)
 PRINT filtered
END 
```  

**code**
```javascript
let number = [0,10,2,3,4,5,6,7]
let condition = value => value < 10;
let filtered = number.filter(condition); 
console.log(filtered);
```
**output**
```console
[0, 2, 3, 4, 5, 6, 7]
```
**reduce**
* can be used to return almost anything. 
* It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria. 
* This can remove unnecessary iterations.

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the array
  - step 3. And reduce the previousValue and currentValue
  - step 4. Print result
  - step 5.Stop. 
  
**psuedocode**
```
BEGIN
 DECLARE array
 SET (previousValue, currentValue) => previousValue + currentValue
 PRINT reducer
END 
```  
**code**
```javascript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));
```
**output**
```console
10
```

### 9. The following array of numbers show the missing number? ([1,2,3,5,6])

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the array
  - step 3. After that using arrow function to find the missing term
  - step 4. Print result
  - step 5.Stop. 

**psuedocode**
```
BEGIN
 DECLARE array
 SET arr.find((x,i) => arr[i+1]-x > 1) + 1;
 PRINT r
END 
```  
**code**
```javascript
const arr = [1,2,3,5];
r=arr.find((x,i) => arr[i+1]-x > 1) + 1;
console.log(r);
```
**output**
```console
4
```

### 11. In the Javascript function, what are the differences between call by value and reference?

**call by value**

* In Pass by Value, Function is called by directly passing the value of the variable as the argument. 
* Changing the argument inside the function doesn’t affect the variable passed from outside the function.
* Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the variable and assigning value to variable. 
  - step 3. Variable c equals value of three.
  - step 4. Print result
  - step 5. Stop. 

**psuedocode**
```
BEGIN
 DECLARE c
 SET d equals c;
 SET c equal 3
 PRINT c
 PRINT d
END 
```  
**code**
```javascript
var c = 5;//call by value
var d;
d = c;
c = 3;
console.log(c);
console.log(d);
```
**output**
```console
3
5
```

**call by reference**

* In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. 
* Changing the argument inside the function affect the variable passed from outside the function. 
* In Javascript objects and arrays follows pass by reference.

**algorithm**

  - step 1. Start the program.
  - step 2. Initialize the variable and assigning value to variable. 
  - step 3. Changing the value of a.
  - step 4. Print result
  - step 5. Stop. 

**psuedocode**
```
BEGIN
 DECLARE a
 SET y=a;
 SET a.p=7
 PRINT y.p
END 
```  
**code**
```javascript
let a={p:2}//call by reference
let y=a;
a.p=7;
console.log(y.p);
```
**output**
```console
7
```
### 14. What is ES6?

* JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

* ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.

### 15. What is an anonymous function? Where do we use it? Why do we need it?

**anonymous function**
* An anonymous function is a function that was declared without any named identifier to refer to it. 
* As such, an anonymous function is usually not accessible after its initial creation. 

**algorithm**

  - step 1. Start the program.
  - step 2. To create function without name.
  - step 3. Print the result
  - step 4. stop.
  
**psuedocode**
```
BEGIN
 FUNCTION setTimeout
 PRINT ;
 ENDFUNCTION
END 
```  

**code**
```javascript
setTimeout(function() {
    console.log('Execute later after 1 second')//anonymous function
}, 1000);
```
**output**
```console
Execute later after 1 second
```

### 16. List the differences between named function and assigning functions to variable with examples

**named funtion**
* The name of the function.
* A list of parameters to the function, enclosed in parentheses and separated by commas.
* The JavaScript statements that define the function, enclosed in curly brackets, {...}.

**algorithm**

  - step 1. Start the program.
  - step 2. To create function with name.
  - step 3. After that return the arguments
  - step 4. Print the result 
  - step 5 .stop.
  
**psuedocode**
```
BEGIN
 FUNCTION add(a,b)
   RETURN a+b
 PRINT add;
 ENDFUNCTION
END 
```  

**code**
```javascript
function add(a,b){ //named function 
    return a+b;
}
console.log(add(1,2));
```
**output**
```console
3
```

**assigning function to variable**
* Anonymous functions can be assigned to a variable, making them named functions
again. 
* By doing this you can separate the function definition from its use in an
event-based method

**algorithm**

  - step 1. Start the program.
  - step 2. To create function and assigning the function to variable.
  - step 3. After that calling the function by using the variable name.
  - step 4. Print the result 
  - step 5 .stop.
  
**psuedocode**
```
BEGIN
 INIT show=function()
  PRINT;
 ENDFUNCTION
show(); 
END 
```  

**code**
```javascript
let show = function() {
    console.log('Anonymous function');//assigning function to variables
};

show();
```
**output**
```console
Anonymous function
```








