### 2. How would you create all permutations of a string?
 - A Permutation of a string is another string that contains same characters, only the order of characters can be different. 

**Algorithm**

Step 1. Use strict mode as public. Declare a variable.
Step 2. Create a function with parameters.
Step 3. Check the length of the string and increase the count at every time.
Step 4. Declare a for loop and run till the length of the string.
Step 5. Use recursion method to call the function again and again.
Step 6. Outside the function check length and type of string then call the function.


**Psuedocode**
```
"use strict"
INIT string="ABC";
FUNCTION permutation( string, result)
    IF(string.length === 0)THEN
        count++;
        PRINT(result);
    ELSE
        FOR(let i = 0; i < string.length ; i++ )DO
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        ENDFOR
    ENDIF
FUNCTIONEND
IF(typeof string === "string")THEN
    IF(string.length > 0)THEN
        var count = 0;
        permutation( string, "");
        PRINT("Total number of permutation are :",count);
    ELSE
        PRINT("This is empty string");
    ENDIF

ELSE
        PRINT("This is not string")
ENDIF
```
**Code**
```javascript
"use strict";
let string="ABC";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}

```
*Output*
```console
ABC
ACB
BAC
BCA
CAB
CBA
Total number of permutation are : 6
```


### 3. What is the difference between when classic and arrow functions are used as event callbacks?

**Classic function**

**Algorithm**

Step 1. Create a html file.
Step 2. Inside the script tag write a function with name of clicked.
Step 3. Print something inside the function.
Step 4. Add event of click then function is executed.

**Psuedocode**
```htm
<html>
    <head>
        <title>Classic event call back</title>
        <script>
            FUNCTION clicked(){
                PRINT("You Clicked!!!");
                PRINT(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>

```

**Code**

```htm
<html>
    <head>
        <title>Arrow event call back</title>
        <script>
            function clicked(){
                console.log("You Clicked!!!");
                console.log(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>

```
*Output*
```console
You Clicked!!!
```

**Arrow Function**

**Algorithm**

Step 1. Create a html file.
Step 2. Inside the script tag write arrow function clicked.
Step 3. Print something inside the function.
Step 4. Add event of click then function is executed.

**Psuedocode**
```htm
<html>
    <head>
        <title>Arrow event call back</title>
        <script>
            let clicked = () =>{
                PRINT("You Clicked!!!");
                PRINT(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>
```

**Code**
```html
<html>
    <head>
        <title>Arrow event call back</title>
        <script>
            let clicked = () =>{
                console.log("You Clicked!!!");
                console.log(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>
```

*Output*
```console
You Clicked!!!
```

### 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

```javascript
for(var i = 0; i < 10; i++) {
  let k=i;
setTimeout(function() {
console.log(k);
}, 10(k+1));
}
```

*Output*
```console
0
1
2
3
4
5
6
7
8
9
```


## 5. Explain the Class instance method and static method with an example?

**Static Method**
 - If it's a static method (doesn't use any instance data), then declare it as a static method and you can directly call it.

**Algorithm**

Step 1. Use strict mode as public.
Step 2. Declare a class inside the class create a method.
Step 3. Then return the value.
Step 4. Outside the class call the method of class directly.

**Psuedocode**

```
"use strict"
CLASS Static1 
    static example1() 
    RETURN "static method 1"
    example2()
    PRINT (static1.example1());
    stc=new Static1()
Stc.example2())
```
**Code**

```javascript
"use strict"
       class static1 { 
            static example1() {
                return "static method 1"
            }
            example2() { 
                console.log(static1.example1());
            }
        }
        let stc  = new static1();
        stc.example2(); 
```

*Output*

```console
static method 1
```

**Instance Method**
- if it's an instance method, then you would typically create an object of type one and then call the method on that object (usually in the constructor).
 
**Algorithm**

Step 1. Use strict mode as public.
Step 2. Create a class inside the class create a method and return something.
Step 3. Create new constructor object for the class.
Step 4. Use the constructor call the method of class.

**Psuedocode**
```
"use strict"
CLASS Rectngle()
    rec() 
    RETURN "my width is"+" "+this.width
INIT rectangle2 = new Rectangle("4");
PRINT(rectangle2.rec());
```

**Code**
```javascript
"use strict";
class Rectangle {
    constructor (width){
        console.log(this);
        this.width=width;
    }
    rec(){
      return "my width is"+" "+this.width
    }

    };
let rectangle2 = new Rectangle("4");
console.log(rectangle2.rec());
```

*Output*
```console
instance method has been called.
```

### 7. What is the execution order of the following block of code?
```javascript
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()
```
*Output*
```console
[Function: ex]
[Function: ex2]
[Function: ex1]
```

## 8. Explain the event loop with an example?

 - JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.


**Algorithm**

Step 1. Use strict mode as public.
Step 2. Declare the annonymous function.
Step 3. Create two set timeout function and print something.
Step 4. Then call the fucntion.


**Psuedocode**
```
FUNCTION stageTwo() () {
PRINT('this is just a message');
    PRINT(("Inside Level Two!")
  
    setTimeout(FUCNTION cb() {
      PRINT('Callback 1: this is a msg from call back');
    },0); 
  
    
  
    setTimeout(FUNCTION cb1() {
      PRINT('Callback 2: this is a msg from call back');
    }, 500);
  
    PRINT('this is the end');
  
  })();
```
**Code**
```javascript
function stageTwo() {
    console.log("Inside Level Two!")
    }
    
    function stageOne() {
    stageTwo()
    }
    
    function main() {
    stageOne()
    }
    main()

(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    },0);
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 500);
  
    console.log('this is the end');
  
  })();
```

*Output*

```console
Inside Level Two!
```

### 9. Create a custom event listener and explain?
 - It demonstrates how to create and dispatch DOM events. Such events are commonly called synthetic events, as opposed to the events fired by the browser itself.

**Algorithm**

Step 1. Use strict mode as public.
Step 2. Create a new event as start.
Step 3. Add the event listener.
Step 4. Dispatch the event. 

**Psuedocode**
```
"use strict";
INIT startEvent = new Event("start");
document.addEventListener("start",FUNCTION(event) PRINT("hello world") PRINT(event),FALSE)
document.dispatchEvent(startEvent);
```
**Code**
```javascript
"use strict";
//create a new custom event  “start”
let startEvent = new Event("start");
//listen for the "start" event
document.addEventListener("start",function(event){console.log("hello world");console.log(event);},false);
//dispatch the “start” event
document.dispatchEvent(startEvent);

```
*Output*
```console
hello world
Event {isTrusted: false, type: 'start', target: document, currentTarget: document, eventPhase: 2, …}
true

```

