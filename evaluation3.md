### 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example? 
  
   - The value of this inside a function is usually defined by the function's call. So, this can have different values inside it for each execution of the function.

**Algorithm**

- Step 1. Use strict mode as public. Declare a variable with a value.
- Step 2. Declare arrow function and access the variable a by this.name
- Step 3. Create arrow function inside a object and call the variable a by this.name
- Step 4. Create a object and create a property with value and a arrow function.
- Step 5. Access the value from arrow function.
- Step 6. Call the function.


**Psuedocode**
```markdown
"use strict";
INIT person ;
FUNCTION 
    PRINT result;
    PRINT result;
END FUNCTION 
FUNCTION      
    PRINT result;    
    PRINT result;
END FUNCTION
person.thisInArrow(); 
person.thisInRegular();
```

**Code**
```javascript
"strict mode";
let person = { 
    name: "karthik", 
    fun1:function (){
    console.log(this.name);
    }
    thisInArrow:() => { 
    console.log(this);
    console.log(func1());; // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log(this);    
    console.log(this.name); // 'this' binding works here 
    } 
   };
   person.thisInArrow(); 
   person.thisInRegular();
```

**Output**
```console
Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} 
{name: 'karthik', thisInArrow: ƒ, thisInRegular: ƒ}
 karthik
```

### 2. How would you create all permutations of a string?
 - A Permutation of a string is another string that contains same characters, only the order of characters can be different. 

**Algorithm**

- Step 1. Use strict mode as public. Declare a variable.
- Step 2. Create a function with parameters.
- Step 3. Check the length of the string and increase the count at every time.
- Step 4. Declare a for loop and run till the length of the string.
- Step 5. Use recursion method to call the function again and again.
- Step 6. Outside the function check length and type of string then call the function.


**Psuedocode**
```
BEGIN
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
END
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

- Step 1. Create a html file.
- Step 2. Inside the script tag write a function with name of clicked.
- Step 3. Print something inside the function.
- Step 4. Add event of click then function is executed.

**Psuedocode**
```html
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

```html
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

- Step 1. Create a html file.
- Step 2. Inside the script tag write arrow function clicked.
- Step 3. Print something inside the function.
- Step 4. Add event of click then function is executed.

**Psuedocode**
```html
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
- The following example demonstrates to invoke static method within the non static method.
**Algorithm**

- Step 1. Use strict mode as public.
- Step 2. Declare a class inside the static method.
- Step 3. Then return the value.
- Step 4. Create new constructor object for the class.
- Step 5.  Use the constructor call the method of class.
 

**Psuedocode**

```
BEGIN
"use strict"
CLASS Static1 
    static example1() 
    RETURN "static method 1"
    example2()
    PRINT (static1.example1());
    stc=new Static1()
Stc.example2())
END
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

- Step 1. Use strict mode as public.
- Step 2. Create a class inside the class create a method and return something.
- Step 3. Create new constructor object for the class.
- Step 4. Use the constructor call the method of class.

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

## 6. How does “this” works inside the Class method with an example?

**Algorithm**

- Step 1. Use strict mode as public.
- Step 2. Create a class with parameters and create a method.
- Step 3. Use this keyword to access constructor value inside the method.
- Step 4. Create constructor object and pass the value.
- Step 5. Call the method.

**Psuedocode**
```markdown
CLASS thisClass{
    constructor(name)
        this.name = name;
    hello(){
        PRINT(this.name);
ENDCLASS
INIT obj = new thisClass("karthi");
obj.hello();
```

**Code**
```javascript
"use strict";
//'this' inside class
class thisClass{
    constructor(name) { 
      this.name=name;
    }
    hello(){
      console.log(this.name);
    }
}
const obj = new thisClass("karthi");
obj.hello();

```

*Output*

```console
karthi
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

- Step 1. Use strict mode as public.
- Step 2. Declare the function with name and print the statement.
- Step 3. Again create the function and call the method.
- Step 4. Then call the function.


**Psuedocode**
```
BEGIN
FUNCTION stageTwo() () 
    PRINT(("Inside Level Two!")
    FUNCTION END
FUCNTION stageOne() 
    stageTwo()
    FUNCTION END
FUNCTION main()
    stageOne()
    main()
FUNCTION END
END
```
**Code**
```javascript
"use strict";
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

/*(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    },0);
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 500);
  
    console.log('this is the end');
  
  })();*/
```

*Output*

```console
Inside Level Two!
```

### 9. Create a custom event listener and explain?
 - It demonstrates how to create and dispatch DOM events. Such events are commonly called synthetic events, as opposed to the events fired by the browser itself.

**Algorithm**

- Step 1. Use strict mode as public.
- Step 2. Create a new event as start.
- Step 3. Add the event listener.
- Step 4. Dispatch the event. 

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

## 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?

**Constructor**

**Algorithm**

- Step 1. Use strict mode as public.
- Step 2. Create a class with parameters and create a method.
- Step 3. Use this keyword to access constructor value inside the method.
- Step 4. Create constructor object and pass the value.
- Step 5. Call the method.

**Psuedocode**
```markdown
CLASS thisClass{
    constructor(name)
        this.name = name;
    hello(){
        PRINT(this.name);
ENDCLASS
INIT obj = new thisClass("karthi");
obj.hello();
```

**Code**
```javascript
"use strict";
//'this' inside class
class thisClass{
    constructor(name) { 
      this.name=name;
    }
    hello(){
      console.log(this.name);
    }
}
const obj = new thisClass("karthi");
obj.hello();
```

*Output*

```console
karthi
```

**Algorithm**

- Step 1. Use strict mode as public.
- Step 2. Create a class with parameters and create a method.
- Step 3. Use this keyword to access constructor value inside the method.
- Step 4. Create a child class for person use super keyword to access the properties of parent class.
- Step 5. Call the parent method in child method.
- Step 6. Create constructor object for child class and call the method.

**Psuedocode**
```
"use strict";
CLASS Person
    constructor(name) 
      this.personName = name;
    person1() 
      RETURN " my name is "+ this.personName;
CLASSEND
CLASS Student extends Person 
    constructor(name,age) 
      super(name);
      this.age = age;
    person2() 
      RETURN super.person1() + ', iam ' +this.age;
INIT person3=new Student("karthi","22");
PRINT(person3.person2());
```

**Code**
```javascript
//super
"use strict";
class Person {
    constructor(name) {
       this.personName = name;
    }
    person1() {
       return " my name is "+ this.personName;
    }
 }
 class Student extends Person {
    constructor(name,age) {
        super(name);
       this.age=age;
    }
    person2() {
       return super.person1()+', iam ' +this.age;
    }
 }

 const person3=new Student("karthi",22);
 console.log(person3.person2());
```

*Output*

```console
my name is karthi, iam 22
```


