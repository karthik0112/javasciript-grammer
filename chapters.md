## [Chapter 1] ##

*  What is javascript? 
    
    - JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS.
    - JavaScript can calculate, manipulate and validate data. 

* PRESENTATION FORMAT;
       
    -  Namely: imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 These are all covered in this Documentation.
        
    -  import - The static import statement is used to import read only live bindings which are exported by another module. 
        
    -  The constructor method is a special method of a class for creating and initializing an object instance of that class.

## [CHAPTER 2] ##

 * Chrome console 
 
  - Many programmers only know Chrome’s console.log but the console API contains few other methods that have practical use, especially when time is of essence.
  
  - let object = { property1 : 1, property1 : 2, method : function(){} };
       copy(object);

  - It returns only JSON. JSON string format does not support methods,only properties and value pair

  * console.dir()

       - if you want to look at all the object’s properties and methods,you can use console.dir method:
  
  * console.time();
    let arr = Array(1000);
    for(let i=0; i<arr.length; i++) {
    arr[i] = new Object();
    }
    console.timeEnd();                                                     console.dir(object)     
    

  * console.error();

  - the console.error() method writes an error message to the console.
  - The console is useful for testing purposes.

  * console time

     - The console.time() method starts a timer you can use to track how long an operation takes.

  * console.time end()

       - The console.timeEnd() stops a timer that was previously started by calling console.time().
       console.timeEnd(label);
       - You can track the amount of time between function calls

   console.time();
   let arr = Array(1000);
   for(let i=0; i<arr.length; i++) {
   arr[i] = new Object();
   }
   console.timeEnd();  

  * console.clear()

      - This method clears the console
       
    * syntax;
     - console.clear();

     let obj = {};
     console.log(obj);
     console.log("object = " + obj);
     console.log( `${obj}` );


## CHAPTER 3: ##          

# * ENTRY POINT OF JS*# 

      *Every computer program has an entry point.

       *You can start writing your code directly into <script> tags. But this means it will be executed instantly and simultaneously as the script is being downloaded into the browser without concern for DOM or other media.

       This can create a problem because your code might be accessing DOM elements before they are fully downloaded from the server. To avoid this situation, you may want to wait until the DOM tree is fully available.



       DOMContentLoaded event : 

        The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 
        
        A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.

        addEventListener : The document.addEventListener() method attaches an event handler (event written in function) to the document (HTML Document).

        Ready state;

        The document.readyState property describes the loading state of the document. When the value of this property changes, a readystatechange event execute the document object.

       Values : The readyState of a document value can be following one loading The document is still loading. 
       
       interactive The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading. 
       
       complete:the document and all sub-resources have finished loading. The state indicates that the load event is to execute. 



        Dos and Don'ts;;

        Do not write your code just in <script> tags, without an entry point function.

        Do use the entry point to initialize the default state of your data and objects.


        DOM vs Media
         
       We’ve just created a safe place for initializing our application. But because DOM
      is simply a tree-like structure of all HTML elements on the page, it usually becomes
      available before the rest of the media such as images and various embeds.
 

     window.onload 
     
     This method can wait until all images and similar media have been fully downloaded.

     Including External Scripts

        <!DOCTYPE html>
        <html>
          <head>
              <title>Import Module</title>
               <script src="your-External-Script-path"></script>
         </head>
         </html>

    Import

    Starting from ES6 we should use import (and export) keyword to import variables, functions and classes from an external file. 
    
    To make a variable, object or a function available for export, the export keyword must be prepended to its definition. 
    
    Not everything in a module will be exported. Some of the items will remain private to it.
   
    Be sure to prepend export keyword to anything you want to export from the file.

    script type = "module" Whenever to export the class and start using it in the application,  
    
    we must make sure the script tag’s type attribute is changed to module (this is required.)

    
    Strict mode;

    This strict context prevents certain actions from being taken and throws more exceptions. The statement uses strict; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.

    Without strict mode, certain statements might not generate an error at all – even if they are not allowed 

    Strict mode makes it easier to write “secure” JavaScript.

    Final Words

    In a professional environment, it is common to have strict mode on, because it
   can potentially prevent many bugs from happening and generally supports better software practice.


   literal values;

   The literal representation of a number can be the digit 1, 25, 100 and so on. A
   string literal can be "some text";
   You can combine literals using operators (+,-,/,*, etc.) to produce a single result.
   For example, to perform a 5 + 2 operation, you will simply use the literal number
   values 5 and 2:

   There are different types of literals that are supported by JavaScript. 1.Integer Literals - 1; 2.String Literals - "string"; 3.Array Literals - []; 4.Object Literals - {}; 5.Boolean Literals - true/false;
   The typeof(value) function can be used to determine the type of the literal value.


   Variables

   There are 3 ways to declare a JavaScript variable: 1.var 2.let 3.const But These   declarations don't determine the variable's type.

   let & const : const is much more strict compared to let variables. let and const are stored in different memory spaces. It's not in global space.

   Examples;

   let number=1  // to assign a number

   let string=”hello” // to assign a string


    
   Dynamic Typing

   JavaScript is a dynamically-typed language. It means that variables created using
   var or let keywords can be dynamically re-assigned to a value of another type at
   some point later in your JavaScript program.

   In statically-typed languages doing that would generate an error.

   example;
   let age=45; (typeof//number)
   let name="anbu"; (typeof//string)


   Passing variables by reference

   In Pass by reference, parameters passed as an argument does not create its own copy, it refers to the original value so changes happen in any of the parameters that affect the original value.

     
     Scope Quirks

    The let keyword doesn’t hoist definitions.

    Lexical Environment :

    Do use the entry point to initialize the default state of your data and objects.

    This environment created whenever the execution context is created.

    It's a local memory + reference lexical environment parent

    Lexical Environment is a hierarchy (Sequence).

    Lexical Example :

    function a() {
        var a = 10;
        b();
        function b() { 
            console.log(a);
        }
    }
    a();    //function call   
    Note : Here b function is inside a function. It is also called as b is Lexically inside a function.


    Statements

     A statement is the smallest building block of a computer program.
    Definitions made with var, let or const keywords return undefined because they
    behave only as value assignments: the value is simply stored in the variable name:

     let a=1; // undefined
      a;    //1

    expressions

    1+1=2        //2

    Expressions don’t have to be variable definitions. You can create them
    by simply using some literal values in combination with operators.


    Function f() evaluates to value 1, because it returns 1. This is why f() is often
    referred to as a function expression.

    CHAPTER 5  [PRIMITIVE TYPES]

    JavaScript has 7 primitive types: null, undefined, number, bigint, string,
    boolean and symbol.

    Number(), BigInt(), String() and Boolean() are primitive constructor func-
    tions.

    example;

    let a=undefined;  //undefined
    let a=100n;     //bigint 

    boolean;

    The boolean primitive can be assigned either true or false value. 

    typeof(boolean) : "boolean" string
    Constructor     : new Boolean(value)

    null;

    Running typeof operator on null will say it’s an ”object”.

    Some believe this is a bug in JavaScript because null is not an object since it
    doesn’t have a constructor. And they are probably right...

    typeof(object) : "object" string
    Constructor     : none  

    undefined

    Undefined is a type of its own. It’s not an object. Just a value JavaScript will use when you named a variable but don’t assign a value to it.

    Your hoisted variables will also be automatically assigned a value of undefined. 


    Number;

    The number primitive helps us work with values in the numeric domain.

    Possible Values : -1 | 3 | 3.42 | 9.66e | Infinity | - Infinity | NaN
    typeof(boolean) : "number" string
    Constructor     : new Number(value)   

    You can define negative and positive values, decimals (more commonly known as
    floating-point numbers.) There is even a negative and positive Infinity value.
    This makes more sense if you have some background in math.

    NaN is technically a non-numeric value a statement can evaluate to. It’s available
    directly from the Number.NaN But literally, it is exactly what it says it is: neither
    "number" primitive nor Number() object. (It could be a "string", for example.)


    typeof -1;
    typeof 5;
    typeof 7;

    let number = new number(7);//undefined
    typeof number;//object
    typeof number.valueOf();//number

    This example shows distinction between primitive literal value (-1, 5, 7, etc.) and the Number object. 
    
    Once instantiated, the value is no longer exactly a literal but an object of that type.  
    
    To get ”number” type from the object use typeof on the valueOf method as seen in the previous example typeof number.valueOf();

    BIGINT;

    BigInt was added in EcmaScript10 and wasn’t available until Summer 2019.

    In the past the maximum value of a number created using a number literal or the Number() constructor was stored in Number.MAX SAFE INTEGER and was equal to 9007199254740991.

    A bigint type allows you to specify numbers greater than Number.MAX SAFE INTEGER.

     let a=BigInt(10);
     console.log(a+1n);
     const b=Number.MAX_SAFE_INTEGER;
     console.log(b);


       typeof

    Difference between numeric types:

    typeof 10;//number
    typeof 10n;//bigint

    Equality operators can be used between the two types

    10n === BigInt(10);//true
    10n == 10;//true

    Math operators only work within their own type

     string

    The string value is defined using any of the available quote characters: double quotes, single quotes, and back-tick quotes (Located on tilde key.) You can nest double quotes inside single quotes, and the other way around.

    Running typeof on a string value returns "string":

    You can also use String constructor function to build an object of string type:

    
    typeof "text"; //string
   
     const text = new Text("world"); //object
     typeof text;//object
     typeof text.valueOf();//string


     Template Strings

     Strings defined using the backtick quotes have special function.
     
     You can use them to create Template Strings (also known as Template Literals) to embed dynamic variable values inside the string:

    let apple = 10;
    let name =  `There are ${apple}, apples in the basket`;
    console.log(name);
    let firstName = "John";
    let lastName = "Doe";
    let text = `Welcome ${firstName}, ${lastName}!`;
    console.log(text);


    Symbol

    Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. 
    
    Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.

    let symbol = Symbol();
    console.log(sym);// created
   
    Symbol('sys') === Symbol('sys') //

##**Executing Methods On Primitive Types Parenthesis And Object Property Access**

   -The parenthesis operator gives you control over which statement should evaluate -first. That’s its primary purpose.

    -For example statement 5 * 10 + 2 is not the same as 5 * (10 + 2).

    -But sometimes it is used to access a member method or property. Which is demonstrated in the next source code listing. You can execute methods directly on the literal values of primitive types. Which automatically converts them to objects, so that the method can be executed.

    -In some cases – like with the primitives of type "number" – we must first wrap the literal value in parenthesis, or you’ll freeze your program.

    //1.toString();//This will freeze
    (1).toString(); //"1"
    "hello".toUpperCase(); //"HELLO"
    ("hello").toUpperCase(); 
    new Number(1).toString();//"1"

     -A literal is just a literal value. By accessing its properties, it turns into a -reference to the object instance so you can execute object methods on that value.

 * * Chaining Methods 

  * Because in JavaScript functions can return this keyword, or any other value, including functions, it’s possible to chain multiple methods using the dot operator.

  * "hello".toUpperCase().substr(1,4);//"ELLO"

## **CHAPTER 6 **

 * TYPE COERCION MADNESS

- Type Coercion :

- It's a dynamic process of type conversion.

- Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

- The javascript engine takes the right datatype literals based on operator (+,-,* etc.) and done operations.
    
               var a=undefined;
               if(a){
                console.log("true");
                 }
               else{
               console.log("false");
                }


 # *   Number And String Arithmetic 
 
   -  Naturally the arithmetic + operator requires two values.
   -  5+5; //10
   -  If both values are integers, arithmetic operation is performed. If one of them is a    string then coercion happens and string addition is invoked.

     let number =  10;
     console.log(number,typeof(number));     //10 "number"
     number = 10 + "";
     console.log(number,typeof(number));     //10 string

# Adding Multiple Values 

-   Often you will encounter statements tied together by multiple operators. What should the following statement evaluate to?

-   1+1+1+1+2+""; //"6"

-   First, all of the purely numeric values will be combined, ending up with the sum of 5   on the left hand side and "" on the right hand side

 - 5+"";
-   But this is still not enough to produce the final result. Adding a numeric value to a string value will coerce the numeric value to a string and then add them together:
Finally we arrive at "5" in string format. When adding numbers and strings, numeric values always take precedence. 

-   This seems to be a trend in JavaScript. In the next example we we will compare numbers to strings using the equality operator. JavaScript chooses to convert strings to numbers first, instead of numbers to strings.

# Operator Precedence 

-   Some operators take precedence over others. What this means is that multiplication will be evaluated before addition.

-   Let’s take this statement for example:
-   1+1+1+2*"";//3

-   Several things will happen here. The string "" will coerce to 0 and 2 * 0 will evaluate to 0.
- 1+1+1+2*"";
- 1+1+1+2*0;
- 1+1+1+0;
- 3+0;//3
# String To Number Comparison

-   When it comes to equality operator == numeric strings are evaluated to numbers in the same way the Number(string) function evaluates to numbers (or NaN).
-   According to EcmaScript specification, coercion between a string and a numeric value on both sides of the == operator can be visualized as follows.

# Comparing Numeric String To Number

- 1 == "1"; //true
- "1" == 1; //true
# Comparing Non-Numeric String To Number

-   If the string does not contain a numeric value, it will evaluate to NaN and therefore further evaluating to false:
- 1 == "a"; //false






**7.0.1 Scope**
  - Scope is simply the area enclosed by {} brackets. But be careful not to confuse it
with the identical empty object-literal syntax.
  - There are 3 unique scope types:
  - The global scope, block scope and function scope. Each expects different things
and has unique rules when it comes to variable definitions.
  - Event callback functions follow the same rules as function scope, they are just
used in a slightly different context. Loops can also have their own block-scope.

**7.1 Variable Definitions**
**Case-Sensitivity**
  - Variables are case-sensitive. This means a and A are two different variables:
```javascript
let a = 1;
let A = "hello";

console.log(a); //1
console.log(A); //hello
```
**Definitions**
 - Variables can be defined using var, let or const keywords.
Of course, if you tried to refer to a variable that wasn’t defined anywhere, you
would generate a ReferenceError error ”variable name is not defined”:
```javascript
console.log(apple);//ReferenceError: apple is not defined
{

}
```

  - Let’s use this setup to explore variable definitions using var keyword and hoisting.
  - Prior to let and const the traditional model allowed only var definitions:

  - Let’s use this setup to explore variable definitions using var keyword and hoisting.

  - Prior to let and const the traditional model allowed only var definitions
```javascript
var apple = 1;
{
  console.log(apple);//1
}
```
 - Here apple is defined in global scope. But it can also be accessed from an inner
block-scope. Anything (even a function definition) defined in global scope becomes
available anywhere in your program. The value propagates into all inner scopes.
 - When a variable is defined in global scope using var keyword, it also automatically
becomes available as a property on window object.

**Hoisting**
  - If apple was defined using var keyword inside a block-scope, it would be hoisted
back to global scope! Hoisting simply means ”raised” or ”placed on top of”.
  - Hoisting is limited to variables defined using var keyword and function name defined using function keyword.
  - Variables defined using let and const are not hoisted and their use remains limited
only to the scope in which they were defined.
  - As an exception, variables defined var keyword inside function-level scope are not
hoisted. Commonly, when we talk about hoisting block-scope is implied.
  - We will talk more about hoisting in just a moment!
  - Likewise, variables defined in global scope will propagate to pretty much every
other scope defined in global context, including block-level scope, for-loop scope,
function-level scope, and event callback functions created using setTimeout,
setInterval or addEventListener functions.
```javascript
console.log(apple); 
{
  var apple=1;
}
```
  - Variable apple is hoisted to global scope. But the value of the hoisted variable is
now undefined – not 1. Only its name definition was hoisted.
  - Hoisting is like a safety feature. You should not rely on it when writing code. You
may not retain the value of a hoisted variable in global scope, but you will still
save your program from generating an error and halting execution flow.
 - Thankfully, hoisting in JavaScript is automatic. When writing your program more
than half of the time, you won’t even need to think about it.

**Function Name Hoisting**
 - Hoisting also applies to function names. But variable hoisting always takes precedence. We’ll see how that works in this section.
 - You can call a function in your code, as long as it is defined at some point later:

**Function Name Hoisting**
  - Hoisting also applies to function names. But variable hoisting always takes precedence. We’ll see how that works in this section.
  - You can call a function in your code, as long as it is defined at some point later:
  ```javascript
  fun();
  function fun(){
    console.log("Hello from fun() function.");
  }

  ```
   -Note that the function was defined after it was called. This is legal in JavaScript.
  - Just make sure you understand that it happened because of function name hoisting
  - It goes without saying if the function was already defined prior to being called,
there’d be no hoisting but everything would still work as planned. Statements inside
a function’s body are executed when the function is called by its name. Nameless
functions can still be assigned as values themselves. (See next example.)
```javascript
function fun(){
  console.log("Hello from fun() function 1.");
  }
  //The code above is the same as:
  var fun = function(){
    console.log("Hello from fun() function 2.");
  }
```
 - It is possible to assign an anonymous function expression to a variable name.
It’s important to note, however, that anonymous functions that were assigned to
variable names are not hoisted unlike named functions.
 - This valid JavaScript code will not produce a function redefinition error.   
 - The
function will be simply overwritten by second definition.
 - Even though fun() was a function, when we created a new variable fun and
assigned another function to it, we rewired the name of the original function.
 - Having said this, what do you think will happen if we call fun() at this point?
 ```javascript
 fun();
 ```
```javascript
"Hello from fun() function 2."
```
 - You might think that the following code will produce a redefinition error:

```javascript
function fun(){
  console.log("Hello from fun() function 1.");
  }
  //The code above is the same as:
  var fun = function(){
    console.log("Hello from fun() function 2.");
  }

```
  - However, this is still perfectly valid code – no error is generated. Whenever you
have two function defined using function keyword and they happen to share the
same name, the function that was defined last will take precedence.
  - In this case if you call fun(); the console will output the second message:
```javascript
"Hello from fun() function 2."
```
  - This actually makes sense.
In following scenario variable name will take precedence over function definitions
even if it was defined prior to the second function definition with the same name:
```javascript
 var fun = function(){
    console.log("Hello from fun() function 2.");
  }

function fun(){
  console.log("Hello from fun() function 1.");
  }
  //The code above is the same as:
 
```
  - And now let’s call
  
  
   fun() to see what happens in this case:
 ```javascript
 fun();
 ```
 But this time the output is:
```javascript
 "Hello from fun() function 1."
```
 - You can see the order in which JavaScript hoists variables and functions. Functions
are hoisted first. Then variables.
**Defining Variables Inside Function Scope**
 - At this point you might want to know that variables defined inside a function will
be limited only to the scope of that function. Trying to access them outside of
the function will result in a reference error:
```javascript
//define a variable inside a block scope?
function fun()
{
var apple=1;
}
console.log(apple);//ReferanceError: apple is not defined
```

**Simple scope accessibility rules:**
 - Here var is defined in Global Scope, but its value propagates into the
block scope as well. What actually happens is, when block scope 1 cannot find
var definition in within its own brackets
  - Defining variables inside function scope is basically one way street
ordeal. Nothing can leave the confines of a function into its parent scope.
  - Functions enable closure pattern, because their variables are concealed from global
scope, but can still be accessed from other function scopes within them:
  - Nothing can get out of function scope into its outer scope. This
enables the closure pattern. We’ll take a look at it in just a moment!
  - The idea is to protect variables from the global scope but still be able to call the
function from it. We’ll take a look at this in greater detail in just a moment

**7.1.1 Variable Types**
 - JavaScript is a dynamically-typed language.
 - The type of the variable (defined using var or let keyword) can be assigned and
changed at any time during the run-time of your application, after it was already
compiled by browser’s JavaScript engine.
 - The keywords var, let and const do not determine the variable’s type. Instead,
they determine how the variable can be used: can it be used outside of the scope
in which defined? Can it be re-assigned to another value during run-time? For
example, var and let can, but const can’t.
**var ES5** 
  - The var keyword is still with us from original specification. You should probably
start using let and const instead. For the most part it is still available but only
to support legacy code.

**let ES6**
  - let defines a variable but limits its use to the scope in which it was defined.

**const ES6**
  - const is the same as let but you can’t re-assign it to a new value once defined.

**7.1.2 Scope Visibility Differences**
**No Difference In Global Scope**
 - When variables are defined in global scope there is no differences between var, let
and const in terms of scope visibility.
- They all propagate into inner block-level, function-level and event callback scopes:
 - Keywords let and const limit variable to the scope in which they were defined:
 - Variables defined using let and const are not hoisted. Only var is.

 **In Function Scope**
  - However, when it comes to functions, all variable types, including var remain
limited to their scope:
  - You cannot access variables outside of the function scope in which they were
defined regardless of which keyword was used.

**Closures**
  - A function closure is a function trapped inside another function:
  - Calling add() increments counter. This is not possible using other scope patterns.
  - add() returns an anonymous function which increments
the counter variable that was defined in an outer scope.
  - Let’s try to use that pattern to create our own closure:
 ```javascript
 var plus = (function(){
    var counter = 0;
    return function(){
        counter +=1;
        return counter;
    }
})();
plus();
 ```
  - The plus() function is defined by an anonymous function that executes itself.

**Why Are We Doing This?**
  - Inside the scope of plus, another anonymous function is created – it increments a
private variable counter and sends the result back into global scope as a function’s
return value.
  - Take away: Global Scope cannot directly access nor modify the counter variable
at any time. Only the code inside the closure allows its inner function to modify
the variable, still, without the variable leaking into Global Scope. . .
  - The whole point is that Global Scope does not need to know or understand how
the code inside plus() works. It only cares about receiving the result of plus()
operation so it can pass it to other functions, etc.
  - So why did we even bother explaining them? Beside that closures are one of the
top-asked questions on JavaScript interviews?
  - Closures are similar to the idea of encapsulation – one of the key principles of
Object Oriented Programming, where you hide the inner workings of a function or
a method from the environment from which it was called.
  - This idea of making some variables private is key to understanding many other
programming concepts.
  - If you think about it, this is exactly why let was added to JavaScript. It provides
automatic privacy for variables defined in block-level scope. Variable privacy is a
fundamental feature of many programming languages in general.

**In Block-level Local Scope**
  - The let and const keywords conceal variable visibility to scope in which they were
defined and its inner scopes.
 - Scope visibility differences surface when you start defining variables inside local
block-level scope or function-level scope.

**In Classes**
  - The class scope is simply a placeholder. Trying to define variables directly in class
scope will produce an error:
```javascript
class cat { 
  let property = 20; //"Unexpexted token" Error
  this.property = 2;
  }
```
  - Here are the proper places for defining local variables and properties. Note, in
class methods, let (or var or const) only create a local variable to that scope.
Therefore, it cannot be accessed outside of the method in which it was defined.
```javascript
 class cat {
        constructor(){
            let property = 1; //Ok: local variable 
            this.something = 2;//Ok: object property
        }
        mehtod(){
            console.log(this.property); //undefined
            console.log(this.something);//1
        }
    }
```
  - In classes variables are defined inside its constructor function or its methods:  

**7.1.3 const**
  - The const keyword is distinct from let and var.
  - It requires assignment on definition:
```javascript
let a;
console.log(a);
const b;//Uncaught SyntaxError: Missing initializer in const declaration
```
  - This makes sense because value of const cannot be reassigned.
```javascript
const speed_of_light = 186000;
speed_of_light = 1; //VM1126:2 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:2:16

```
  - It’s still possible to change values of a more complex data structure such as Array
or objects, even if variable was defined using const. Let’s take a look!

**7.1.4 const and Arrays**
 - Changing a value in the const array is still allowed:
```javascript
const A = [];
A[0] = 5; //ok
A = [2]; //Uncaught SyntaxError: Identifier 'A' has already been declared
```
  - You just can’t assign any new objects to the original variable name again.

**7.1.5 const and Object Literals**
  - Similar to arrays, when it comes to object literals, const only makes the definition
constant. But it doesn’t mean you can’t change values of the properties assigned
to a variable that was defined with const:
```javascript
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.dir(car);
//IT WILL CREATE ERROR
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

**Conclusion**
  - In case of a more complex data structure (object or array) you can think of const
as something that does not allow you to reassign it to a new object again. The
variable is locked to the original object, but you can still change the value of its
properties (or indexes, in case of an array.)
  - If the value of a variable was defined with const and a single primitive (string,
number, boolean,) such as speed of light, PI, etc, it cannot be changed.

**7.1.6 Dos and Dont’s**
  - Do not use var unless for some reason you want to hoist the variable name.
(These cases are rare and usually don’t comply with good software design.)
  - Do use let and const instead of var, wherever possible. Variable hoisting (variables defined using var) can be the cause of unpredictable bugs, because only the
variable name is hoisted, the value becomes undefined.
  - Do use const to define constants such as PI, speed of light, tax rate, etc.
 values that you know shouldn’t change during the lifetime of your application.

# **Chapter 8**
## **Operators**
**8.0.1 Arithmetic**
```console
+ Additon 
- Subraction
* Multiplication
/ Division
% Modulus
++ Increment
-- Decrement
```

  - The arithmetic operators are pretty basic. They do exactly what you expect.
  - The modulus operator returns the number of times one number fits into the other.
Here, 4 fits into 10 only 2 times – it is also often used to determine the remainder.
  - You can create statements without assigning the value to a variable name. It is
possible to type them directly into your browser’s developer console for practice:
 - That works in Chrome console. But in your source code, evaluating simple statements is meaningless:

```javascript
1+1; //2
1-2; //-1
8/2; //4
5*3; //15
```
 - More often, you will perform operations directly on variable names:
```javascript
let variable = 1; // undefined
variable + 2; //3
variable - 1; //0
variable / 2; //0.5
variable * 5; //5
variable * variable; //1
variable++; //1
variable++; //2
variable++; //3
variable--; //4
console.log(variable);
```
**8.0.2 Assignment**
```javascript
= Assignment //x=1;
+= Addition //x+=2;
-= Subraction //x-=1;
*= Multiplication //x*=2;
/= Division //x/=2;
%= Modulus //x%=1;

```

  - Assignment operators assign a value to a variable. There are several assignment
operators that can also combine assignment with one of the arithmetic operations.

**8.0.3 String**
  - Strings can be assigned to variable names or each other using the + operator which
we earlier saw used as arithmetic addition. But when one or both of the values on
either side of + operator are strings, it is treated as a string addition operator.
```javascript
x="a"; //a
x +="b"; //'ab'
'x'+'y'; //'xy'
console.log(x);
```
  - In this context the += operator can   be thought of as string concatenation operator.

**8.0.4 Comparison**
```javascript
1 == 1 ;//true
'1' == 1 ; //true Equality
'1' == '1' ; //true
1 === 1 ; //true
'1' === 1 ; //flase Equality of value and type
'1' === '1' ; //true
1 != 1 ; //false
1 != 2 ; //true Equality
2 > 1 ; //true
5 < 7 ; //true
2 >= 1; //true
2 <= 1; //flase
```
  - Triple equality operator checks for value and type.

**8.0.5 Logical**
```javascript
(5<1 && 3>2)//false AND both must be satisfied
1==1 || 2==2//true OR any one satisfies 
!true //false NOT EQUAL TO
!(1 == 2) // true

```
 - Logical operators are used to determine logic between the values of expressions or
variables.


**8.0.6 Bitwise**
  - &	AND	= Sets each bit to 1 if both bits are 1
  - |	OR =	Sets each bit to 1 if one of two bits is 1
  - ^	XOR =	Sets each bit to 1 if only one of two bits is 1
  - ~	NOT =	Inverts all the bits
  - <<	Zero = fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
  - ```>>```	Signed right shift =	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
  - ```>>>```	Zero fill right = shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
 ```javascript
 5 & 1	// 1 =	0101 & 0001	- 0001
  5 | 1	// 5 =	0101 | 0001	- 0101
  ~ 5	// 10	= ~0101	- 1010
  5 << 1	// 10	= 0101 - << 1	- 1010
  5 ^ 1	// 4 =	0101 ^ 0001	- 0100
  5 >> 1 //	2	= 0101 >> 1	- 0010
  5 >>> 1	// 2= 0101 >>> 1 - 0010
 ```
   - In binary number system decimal numbers have an equivalent represented by a
series of 0’s and 1’s. For example 5 is 0101 and 1 is 0001. Bitwise operators work
on those bits, rather than number’s decimal values.
  - We won’t go into great detail about how they work, but you can easily look them
up online. They have unique properties: for example: the << operator is the
same as multiplying a whole number by 2 and >> operator is the same as dividing
a whole number by 2. They are sometimes used as performance optimizations
because they are faster than * and / operators in terms of processor cycles.

**8.0.7 typeof**
  - The typeof operator is used to check the type of a value. It will often evaluate
to either primitive type, object or function. The value produced by the typeof
operator is always string format:
```javascript
typeof 10;//number
typeof 10n;//bigint
typeof 'text';//string
typeof NaN;//number
typeof true;//boolean
typeof [];//object
typeof {};//object
typeof Object; //function
typeof new Object();//object
typeof null;//object

```
  - NaN (Not a Number) evaluates to ’number’. This is just one of many
JavaScript quirks. However, they are not bugs and usually start to make more
sense as your knowledge of JavaScript deepens.
  - NaN lives natively on Number.NaN – it is considered to be a primitive value.
  - NaN is the symbol usually produced in the context of a numeric operation. One
such example is trying to instantiate a number object by passing a string value to
its constructor: new Number(”str”) in which case NaN would be returned.
**8.0.8 Ternary (?:)**
 - The ternary operator has the form of: statement?statement:statement;
Statements can be expressions or a single value:
```javascript
var satement = 45;
let result = 45;
result = satement ? "pass" : "fail";
console.log(result);
```
  - The ternary operator is like an inline if-statement. It does not support {} brackets
or multiple statements.
**8.0.9 delete**
  - The delete keyword can be used to delete an object property:
 ```javascript
let bird = {name:"raven",speed:"30mpg"};
console.log(bird);//{name:"raven",speed:"30mpg"};
delete bird.speed;
console.log(bird);//{name:"raven",speed:"30mpg"};
 ```
   - You cannot use delete to remove stand-alone variables. Even though, if you try
to do that, no error will be generated (unless you are in strict mode.)
**8.0.10 in**
 - The in operator can be used to check if a property name exists in an object:
```javascript
 "c" in {"a": 1, "b":2,"c":3};//true
1 in {"a": 1, "b":2,"c":3};//false
```
  - The in operator, when used together with arrays, will check if an index exists.
Note, it is ignorant of actual value (in either arrays or objects.)
```javascript
0 in["a","b","c"];//true
1 in["a","b","c"];//true
2 in["a","b","c"];//true
3 in["a","b","c"];//false
```
  - You can check for properties on built-in data types. The length property is native
to all arrays:
```javascript
"length" in [];  //true
"length" in["a","b","c"];//true
```
  - The ”length” property does not exist natively on an object unless it’s added explicitly:
```javascript
"length" in {};//false
"length" in {"length":1}//true
```
Check for presence of constructor or prototype property on an object constructor
function:
```javascript
"constructor" in Object;//true
"prototype" in Object;//true
"length" in object; //truer
```


**Chapter 9**
**...rest and ...spread**
**9.0.1 Rest Properties**
 - The ...rest syntax can help you refer to a larger number of items by extracting
them from a single function parameter name. The single ...rest parameter is
assumed to contain one or more arguments passed to the function:
  - Using ...rest properties to break down a larger number of arguments
and passing them to higher-order function Array.map()
  - We can further shorten code by moving console output to a separate print function:
 ```javascript
 let print = item => console.log(item);
 let f = (...item) => item.map(print);

 ```
 Call the f() function with an arbitrary number of arguments:
```javascript
f(1, 2, 3, 4, 3);
```
 - The function takes rest parameters: you can specify as many as you need.
Console output:

```console
1
VM214:2 2
VM214:2 3
VM214:2 4
VM214:2 3
```
 - After arrow functions were introduced in EcmaScript 6, to further shorten code
some started to name their variables using a single character:
```javascript
let f = (i...)=>i.map(v=>console.log(v));
```
  - We just used multiple language features: an arrow function, ...rest, and .map()
to abstract our code to something that looks like a math equation without sacrificing original functionality. It definitely looks cleaner than a for-loop!
  - This might make your code even shorter, but it’s probably harder to understand.
Remember, if you are working on a team, another person might be reading your
code. Sometimes that person will be you in the future.

**9.0.2 Spread Properties**
  - You can think of spread as an opposite of rest.
  - It can help you extract parts from an object.
  
  **9.0.3 ...rest and ...spread**
 - It’s tempting to call ...rest or ...spread syntax operators. And you will often hear
people refer to them as such. But in fact it is only syntax. An operator is often
thought of as something that modifies a value. Rest and spread assign values.
  - If we box them into the category of operators, perhaps we could say they would be
similar to the equality operator =. Rest and spread simply abstract it for working
with multiple assignments.
 - The rest syntax is called rest parameters, in the context of using it as a parameter
name in a function definition, where it simply means: ”the rest of arguments”.
Sometimes it is referred to as rest elements, because it assumes multiple values.
  - Both rest and spread syntax takes on the form of ...name. So what’s the
difference?
  - ...spread operator – expand iterables into one or more arguments.
  - ...rest parameter – collect all remaining parameters (”the rest of”) into an array.

**...rest**
  - Let’s say we have a simple sum() function:
  - This limits us to two arguments.
The ...rest parameters can gather an unknown number of arguments passed to
the function and store them in an array (named args in this example):
```javascript
function sum(...args){
 console.log(args);
 
 }
 sum(1,2,3,4);

```
  - It is similar to the built-in arguments array-like object. But there is a difference.
As the name suggests, rest can capture ”the rest of” parameters.
  - Keep in mind, ...rest must be either the only arguments token, or the last one on
the list. It cannot be the first argument of many:
`function sum(...args, b, c){}//error`
  - The ...rest parameters cannot appear as the leading parameter name when
followed by more parameters. You can think of it as ”the rest of” arguments when
used in this context.
`function sum(b, ...args, c){}//error`
 - Likeiwise ...rest cannot appear in the middle of an argument list. In
context of multiple function parameters, it is always the last one on the list.
 - If you don’t follow this rule, the following error will be generated in console:
 `function sum(a, b, c...args){}//correct`
```javascript
//Quirk: if you pass an array, it will register as an array:
sum([1,2,3]);//array(3)
//But you can flatter an array using spread syntax
sum(...[1,2,3]); //

```
  - In this case the three dots in ...[1,2,3] is actually ...spread. You can see from
this example that ...spread is like a reverse of ...rest: it unpacks values from an
array (or an object, as we will see later.)
  - Contrary to ...rest, ...spread is allowed to be used anywhere on a list.
  - But ...rest and ...spread can sometimes overlap:
  ```javascript
  function print(a, ...args){
    console.log(a);
    console.log(args);
  }
  print(...[1,2,3],4,5); //here it is ...spread
  //a=1
  // args =[2,3,4,5]
  ```
  - Here, first ...spread forms a complete list of arguments: 1, 2, 3, 4, 5 and
that’s what’s passed into the print function.
  - Inside the function, a equals 1, and [2, 3, 4, 5] is ”the rest of” arguments.
Here’s another example:
```javascript
function print(a,b,c, ...args)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}
print(...[1,2,3],4,5);
```
**Creating a sum() function with ...rest arguments**
  - Our first sum function using ...rest parameters might look like this
```javascript
  function sum(...args){
    let sum = 0;
    for (let temp of args)
    sum +=temp;
    return sum;
}
let add = sum(1,2,3,4,5);
console.log(add);
  
```
  - But because ...args produces an array, which makes it an iterable, we can use a
reducer to perform the sum operation:
```javascript
  function sum(...args){
    return args.reduce((k, j)=>k+j,0)
}
let add=sum(1,2,3,4,5,20);
console.log(add);

```
  - But ...rest parameters also work in arrow functions and we can further shorten
the function to following form:
```javascript
let sum = (...args)=>args.reduce((k,j)=>k+j,0);
sum(1,2,3,4,5,20);
console.log(sum);
```
  - Some people think while this format is shorter, it’s harder to read. But that’s the
trade off you get with functional programming style. People with background in
math find this format elegant. Traditional programmers might not.
**Flattening arrays with ...spread**
  - Luna would be a nice name for a female cat with silvery fur that resembles the
```javascript
moon’s surface.
let subscribed =["netflix","amazon"];
const ott = [...subscribed,"disney","zeetv"];
console.dir(ott);
```
**Using ...spread outside of arrays,objects or function parameters**
You can’t use ...spread syntax to assign values to variables.
```javascript
let a = ...[1,2,3]; //error Uncaught SyntaxError: Unexpected token '...'
```
  - Are you disappointed? Don’t be. You will love Destructuring Assignment.

**9.1 Destructuring Assignment**
  - Destructuring assignment can be used to extract multiple items from arrays and
objects and assign them to variables:
```javascript
[a,b] = [10,20];
console.log(a,b);//10 20
```
  - The above code is the same as:
```javascript
 var a = 10;
 var b = 20;
```

  - When var, let or const are not specified, var is assumed:
 ```javascript
 [a] = [1];
  console.log(window.a);// 1
 ```
   - As expected let definitions are not available as a property on window object:
 ```javascript
 let  [a] = [1];
  console.log(window.a);// undefined
 ```
  - It is possible to destructure into ...rest array:
  ```javascript
  [a,b,...rest] = [30,40,50,60,70];
console.log(a,b);
console.log(...rest);

  ```

    - Destructuring is often used to extract object properties to a matching name:
 ```javascript
let {oranges} = {orangeS :1 };
console.log(oranges);
 ```
   - The order doesn’t matter – as long as there is property grapes the value will be
assigned to the variable with the same name on the receiving end:
```javascript
let fruitBasket={apples:1,oranges:2,mangoes:3};
let {apples, mangoes} = fruitBasket;
console.log(apples+mangoes);
```
  - Extract from multiple values. Grab apples and oranges and count them:
  - Destructuring is not implicitly   recursive, second-level objects are not scanned:
    
```javascript
let {oranges} = {apple:1,inner:{orange:2}};
console.log(oranges);//undefined

```
  - But it’s possible to extract directly from object’s inner properties:
```javascript
  let deep = {
    basket:{
        fruit:{
            name: "orange",
            shape: "round",
            weight: 0.2
        }
    }
}
let {name, shape, weight} = deep.basket.fruit;
console.log(name);
console.log(shape);
console.log(weight);
```
  - If variable is not found in object, you will end up with undefined. For example, if
we attempt to destructure to property name that doesn’t exist in the object:
```javascript
let {apples}={oranges:1};
console.log(apples);//undefined
```
  - It is possible to destructure and rename at the same time:
```javascript
 let {automobile:car}={automobile:"Tesle"};
  console.log(car);//Tesla
```

**Merging objects with ...spread**
  - You can use ...spread syntax to easily merge two or more objects:
 ```javascript
 let a = {p:1,q:2,m:()=>{}};
 let b = {r:4,s:5,n:()=>{}};
 let c = {...a,...b};
 ```
   - What are the contents of object c?
  ```javascript
  console.log(c);
  ```
  Console output;
 ```console
 {p: 1, q: 2, r: 4, s: 5, m: ƒ, …}
m: ()=>{}
n: ()=>{}
p: 1
q: 2
r: 4
s: 5
[[Prototype]]: Object
 ```
   - The great thing is that it’s not just a shallow copy.
...spread copies nested properties too:
```javascript
let a = {nest:{nest:{eggs:10}}};
let b = {eggs:5};
let c = {...a,...b};
console.log(c);
```
Console output:
```console
{nest: {…}, eggs: 5}
eggs: 5
nest:
nest: {eggs: 10}
[[Prototype]]: Object
[[Prototype]]: Object
```
**Merging arrays with ...spread**
  - The same can be done with arrays:
 ```javascript
 let a = [1,2];
 let b = [3,4];
 let c = [...a,...b];
 console.log(c);
 ```
# **Chapter 10**
## **Closure**
  - Closure Introduction
There are many different ways to explain a closure. The explanations in this
chapter should not be taken for the holy grail of closures. But it is my hope that
interpretation presented in this book will be enough to deepen your understanding.
  - Feel free to play around with the examples shown here on codepen.io and see
how they work. Eventually it should sink in.
In C, and many other languages, when a function call exits, memory allocated for
that function is wiped out as part of automatic memory management on the stack.
  - But in JavaScript, variables and functions defined inside that function still remain
in memory, even after the function is called.
  - Retaining a link to variables or methods defined inside the function, after it has
already been executed, is part of how a closure works.
  - JavaScript is an ever-evolving language.
  - When closures came around, there were no classes or private variables in JavaScript.
  - It can be said that until EcmaScript 6, closures could be used to (roughly) simulate
something similar to what is known as object’s method privacy.
  - Closures are part of traditional programming style in JavaScript. They are a prime
candidate for interview questions.    Having said this, JavaScript Grammar cannot
be complete without a discussion on closures.
**What Is Closure?**
  - A closure enables you to keep a reference to all local function variables, in the
state they were found after the function exited.
  - Closures are difficult to understand, knowing nothing about scope rules and how
execution context delegates control flow in JavaScript. But I think this task can
be simplified if we start simple and take a look at a few practical examples.
  - To understand closures, we need to – at the very least – understand the following
construct. Primarily it is enabled by the idea that in JavaScript you can define a
function inside another function. Technically, that’s what a closure is.

```javascript
function global(){
    function inner(){
        console.log("inner");
    }
    inner();//Call inner
}
global();//"inner'

```
  - In the following example, global function sendMail defines an anonymous function
and assigns it to variable send. This variable is visible only from the scope of
sendEmail function, but not from global scope:
```javascript
function sendEmail(from,sub,message){
    let msg = `"${sub}">"${message}" received from "${from}"`;
    let send =function () {console.log(msg)}
    send();
}
sendEmail('Pravin','re:subject','Good news');

```
  - In JavaScript, inner functions have access to variables defined in the
scope of the function in which they are defined.
  - When we call sendEmail it will create and call send function. It is not possible
to call send() directly from global scope.
  - Console Output:
```console
  "re:subject">"Good news" received from "Pravin"
```
 - We can expose a reference to private methods (inner functions) by returning them
from the function. The following example is exactly the same as one above, except
here instead of calling the send method we return a refernce to it on line 004:
```javascript
function sendEmail(from,sub,message){
    let msg = `"${sub}">"${message}" received from "${from}"`;
    let send =function () {console.log(msg)}
    return send;
}
let ref = sendEmail('Pravin','re:subject','Good news');
ref();
```
  - Instead of calling send(), let’s return it. This way a reference to this
private method can be created in global scope.
  - Now we can call send() by reference directly from global scope.
  - Even after sendEmail function was called, msg and send variables remained in
memory. In languages like C, they would be removed from the automatic memory
  - on the stack, and we wouldn’t be able to access them. But not in JavaScript.
  - Let’s take a look at another example. First we defined print, set, increase and
decrease variables as global placeholders. 
```javascript
let print,set, increase, decrease;
function manager(){
    console.log("manager();");
    let number = 15;
    print = function(){console.log(number)}
    set = function(value) {number = value}
    increase = function() {number++}
    decrease = function() {number--}
}

```

  - In order to assign anonymous function names to global function variables, we need
to run manager() at least once.

```javascript
manager();//undefined
print();//15
for(let i = 0; i<200 ; i++) increase();
print();// 215
decrease();
print();//214
set(755);//755
let old_print = print;
manager();
print();//15
old_print();//755
```
   - The set(755) function resets the value of number to 755.
**Explanation**
  - After calling manager() for the first time. The function executed and all global
references were linked to their respective anonymous functions. This created our
first closure. Now, let’s try to use the global methods to see what happens.
  - We then calleBeautiful Closure
It can be assumed that closures are used in Functional Programming for similar
reasons to why private methods are used in Object Oriented Programming. They
provide a method API to an object in the form of a function.
What if we could advance this idea and create a closure that looked beautiful and
returned several methods rather than just one?d some methods: increase(), decrease() and set() to modify
the value of number variable defined inside manager function. At each step we
printed out the value using the print() method, to confirm it actually changed.
**Beautiful Closure**
  - It can be assumed that closures are used in Functional Programming for similar
reasons to why private methods are used in Object Oriented Programming. They
provide a method API to an object in the form of a function.
  - What if we could advance this idea and create a closure that looked beautiful and
returned several methods rather than just one?
let get = null; //placeholder for global getter function
```javascript
function closure(){
    this.inc = 0
    get = () => this.inc;//getter
    function increase() {this.inc++;}
    function decrease() {this.inc--;}
    function set(v) {this.inc = v;}
    function reset() {this.inc=0;}
    function del(){
        delete this.inc;//become undefined
        this.inc = null;
        console.log("this.inc deleted");

    }
    function readd(){
        if(!this.inc)
         this.inc = "re-added";
    }
    return [increase,decrease,set(15),reset,del,readd];
}


```
  - The del method will completely remove inc property from the object and readd will
re-add the property back. For simplicity of the explanation there is no safeguarding
against errors. But naturally, if the inc property was deleted, and an attempt to
call any of the methods was detected, a reference error would be generated.
  - Initialize closure:
 ```javascript
 let f = closure();
console.log(f)
 ```
   - Variable f now points to an array of exposed methods. We can bring them into
global scope by assigning them to unique function names:
```javascript
let inc = f[0];
let dec = f[1];
let set = f[2];
let res = f[3];
let del = f[4];
let add = f[5];
```
  - We can now call them to modify the hidden inc property:

```javascript
inc();//1
inc();//2
inc();//3
dec();//2
get();//2
set(7);//7
get();//7
res(0);//0
get();//0
```
- Finally we can delete the property itself using del method:
```javascript
//Delete property
del(0);//null
get();
```
  - Calling other functions at this point would produce a reference error, so let’s re-add
the inc property back to the object:
```javascript
//read property inc
add();
get();//"re-added"
```
 - Reset the inc property to 0 and increment it by 1:
```javascript
res();
 inc();
 get();
```
**Closing Words**
  - Whenever a function is declared inside another function, a closure is created.
  - When a function containing another function is called, a new execution context
is created, holding a fresh copy of all local variables. You can create a reference
to them in global scope, by linking to variable names defined in global scope, or
returning the closure from the outer function using return keyword.
  - A closure enables you to keep a reference to all local function variables, in the
state they were found after the function exited.
 - **Note:** new Function() constructor does not create a closure, because objects
created with new keyword also creates a stand-alone context.

**10.0.1 Arity**
  - Arity is the number of arguments a function takes.
  - You can access function’s arity via Function.length property:
```javascript
function f(a,b,c){}
let arity = f.length;
console.log(arity);
```
**10.0.2 Currying**
  - In JavaScript functions are expressions. This also means a function can return
another function. In the previous section we looked at the closure pattern. Currying
is a pattern that immediately evaluates and returns another function expression.
  - A curried function can be constructed by chaining closures by defining and immediately returning all inner functions at the same time.
  - Here is an example of a curried function:
  ```javascript
  let planets = function(a){
    return function(b){
    return 'favorite planets are ' + a + ' and ' +b;
    }

    };
    let favoritePlanet = planets('jupiter');
    let fav1 = favoritePlanet('Earth');
    console.log(fav1);
    let fav2 = favoritePlanet('Mars');
    console.log(fav2);
    let fav3 = favoritePlanet('Saturn');
    console.log(fav3);

  ```

  - Function planets returns another anonymous function. So when it is assigned
to favoritePlanets with one argument ”Jupiter”, it can be called again with a
secondary argument.
  - Here is the result of the 3 curried functions from example above:
```console
favorite planets are jupiter and Earth
favorite planets are jupiter and Mars
favorite planets are jupiter and Saturn
```
  - The inner function can be invoked immediately after the first call:
  ```javascript
    let p = planets('Earth')('Mars');
    console.log(p);
  ```
  And the result is:
  ```console
  favorite plnaets are Earth and Mars
  ```
    - Currying is originally considered to be part of functional programming style.
  - It is not a surprise then, that this older currying syntax can be rewritten into this
far more elegant arrow function format:
```javascript
let planets = (a) => (b) => 'favorite planets are ' + a + ' and ' +b;
let fav1=planets ("venus")("Mercury");
console.log(fav1);
```
And the outcome is:
```console
favorite planets are venus and Mercury
```

# **Chapter 11**
## **Loops**
 - Loops are fundamental to working with lists. The primary purpose of a loop is
to iterate over one or a set of multiple statements. Iterating is commonplace in
software development – it means to repeat an action a multiple number of times.
  - Working with loops introduces the idea of iterators. Some built-in types are
iterable. Iterables that can be passed to a for...of loops instead of using traditional
for-loop. You can say that an iterable object abstracts away the index values of
a list and helps you focus on solving the problem.
  - Array is an iterable. Object is not (objects are enumerable).
  - An iterable type guarantees the order of items in the set. This is why arrays have
an index for each item. Enumerable types do not guarantee the order in which
properties will appear when iterated.
**11.0.1 Types of loops in JavaScript**
  - There are different ways to iterate in JavaScript. Starting from classic while and
for- loops to leaning more toward functional programming style iterators: using
array’s higher-order methods. 
  - Common iterators are for, for...of, for...in, while
and Array.forEach. 
  - Some Array methods are assumed to be iterators: .values,
.keys, .map, .every, .some, .filter, .reduce and a few others. They are called
higher-order functions, because they take another function as an argument.
**Incrementing And Reducing**
  - Loops are often used for walking through a large list of objects and updating their
properties. Loops can be used for filtering out objects and reducing the list to
something more meaningful.
  - They can also be used for reducing a set of values to a single value:
```javascript
  let miles = [50,6,9,20,15,30];
// Add up all numbers using a for loop
let a = 0;
for(let i=0; i<5;i++)
   a += miles[i];
console.log(a);//99
```
  - You can implement a reducer to the same effect:
 ```javascript
 let miles = [50,6,9,20,15,30];
const R =(accumulator,value) => accumulator + value;
const result = miles.reduce(R);
console.log(result);
 ```
 **Generating HTML Elements Dynamically**
  - Create a number of HTML elements dynamically to populate the UI view:
```javascript
 for(let i=0;i<10;i++){
    i = 1;
    let element = document.createElement('div');
    element.innerHTML = 'element' + i;
    document.appendChild(element);
}
```
  - This code will add 10 div elements to the document.
  - It is possible to use appendChild method to create nested elements.


**Render lists**
  - Loops are often used together with render lists. Rendering is simply the act of
displaying something on the screen. In software development, there are plenty of
times when you need to display a list of items.

**Dynamically sorted tables**
  - Building an entire table dynamically can help you sort values by column using an
Array.entries and Array.sort methods.
  - In some cases you will have to write your own sorting function, if your table columns
are stored in an object as properties and not array items. That however, may or
may not be a good idea, depending on the data set.
**Note**
  - You cannot easily make a decision about exactly how to deal with lists, until some
sort of data layout is defined. So, choosing which type of loop to use will be often
determined by other decisions made and the layout of your custom data structures.
**11.1 for loops**
  - For loop syntax comes in three syntactic flavors:
```javascript
//For-loop with an empyt body
for(initializer; condition; increment);
//Iterate over a single statement
for(initializer; condition; increment) single_statement;
//Iterate over multiple statements
for(initializer; condition; increment){
  multiple;
  statements;
}
```
  - For loops require 3 statements separated by two semicolons, which can be any
legal JavaScript statement, a function call, or even an empty statement.
  - You’ll often use the following pattern in basic implementations: 1) initialize
counter 2) test condition and 3) increment or decrement counter.
**11.1.1 0-index based counter**
  - Initializing the for-loop counter with a 0-index based value is a good idea, because
most lists (like arrays) are 0-index based, where first item is located at array[0]
and not array[1]. This might take some time to get used to
**11.1.2 The Infinite for Loop**
  - A for loop can be defined without any of the default statements. But by doing
this you will create an infinite for-loop that will freeze your program:
```javascript
for(;;)
 console.log("hi");//Infinite foe loop *strictly don't do it.*
```
  - You probably don’t really want to do this, unless for some reason it becomes
necessary. A while loop should probably be used in this case.
**811.1.3 Multiple Statements**
  - Multiple statements can be separated by comma. In the following example the
inc() function is used to increment value of global variable counter. Note the
combination of the two statements: i++, inc():
```javascript
let counter = 0;
function inc(){counter++;console.log(counter)}
for(let i =0;i<10;i++,inc());
;
```
  - This body-less for loop progresses the counter 10 times. The actual value is
incremented inside the inc() function. This is just an example of executing multiple
statements, we should definitely avoid using global variables in these types of cases.

**Incrementing Numbers**
  - At their basic, loops can be used to increment numbers.
```javascript
  let counter = 0;
   for(let i = 0; i < 10 ; i++)
        counter++;
        console.log(counter);
```

**for loops and let scope.**
  - Bracket-less for-loop syntax is not good friends with the let keyword. The following
code will generate an error:
```javascript
for(var i=0;i<10;i++) let x = i;
```
  - A let variable cannot be defined without scope brackets. All variables defined using
let keyword require their own local scope. This is fixed by:
```javascript
for(var i=0;i<10;i++) { let x = i; }
```
**Nested for Loops**
  - Because a for loop is a JavaScript statement in itself it can be used as the iterable
statement of another for loop. This hierarchical for loop is often used for working
with 2-dimensional grids:
```javascript
for(let y=0;y<2;y++)
    for (let x=0;x<2;x++)
              console.log(x, y);
```
  - Console output (all combinations between x / y):
  
```console
  0 0
1 0
0 1
1 1

```


**Loop’s Length**

  - The condition statement will usually check if counter has reached a limit and if
so, the loop will terminate:

  - You can add brackets if you need to execute multiple statements:
```javascript
for(let i=0;i<3;i++){
    let loop = "loop";
    console.log(loop);
}
```
Console output:
```console
loop
loop
loop
```
**Skipping Steps**
  - You can skip an iteration step by using continue keyword
 ```javascript
 for(let i=0;i<3;i++){
    if(i==1)
    continue;
    console.log(i);
  }
 ```
 Console output:
```console
0
2
```
  - The continue keyword tells code flow to go to the next step without executing any
next statements in this for-loop’s scope during the current iteration step.
 **Breaking Early**
  - You can break out of a for loop by using break keyword
```javascript
 for(let i = 0;i<2;i++){
    console.log("loop");
    break;
}
```
  - Note the condition statement was skipped here. The loop will break by an explicit
command from the statement itself.
In this case the for loop will print ”loop.” to the console only once. The break
  - keyword simply exits the loop whenever it’s encountered. But it can also be
conditional (see next example.)
**Custom Breaking Condition**
  - None of the 3 statements separated by ;; in a for loop are required. It’s perfectly
legal to move the conditional test into the for loop’s body, instead of testing for
it between the parenthesis.
  - This example skips the middle statement, where we would usually create a conditional test for the counter, and replaces it by its own condition inside the loop
where it breaks out of the loop if i is greater than 1:
```javascript
for(let i = 0;;i++){
    console.log("loop, i = "+i);
    if(i>1)
    break;
}
```
  - If not for the if statement inside the for loop, it would continue indefinitely because
there are not other conditions stopping it from running.
Console output:
```console
loop, i = 0
loop, i = 1
loop, i = 2 
```
  - The word ”loop.” is printed 3 times. The condition i is greater than 1 might
deceive us into thinking that the text will be printed 2 times at most. But it’s printed 3 times! That’s because counting started with 0 and not 1, and at its
upper limit the condition evaluates to 2 and not 1.
**Breaking To Label**
  - In JavaScript, a statement can be labeled when a label name: is prepended to a
statement. Because a for loop is a statement you can label for loops.
  - Let’s try to increment value of c inside the inner loop. By choosing whether to
break the loop and jump to inner or mark label we change the pattern in which
the for loops will work:
1. This example produces 11 when breaking to mark: label.
```javascript
let c = 0;
mark: for(let i=0; i<5;i++)
    inner: for(let j=0; j<5;j++){
        c++;
        if(i==2)
        break mark;
    }
    console.log(c);//11
```
2. This example produces 21 when breaking to inner: label.
```javascript
let c = 0;
mark: for(let i=0; i<5;i++)
    inner: for(let j=0; j<5;j++){
        c++;
        if(i==2)
        break inner;
    }
    console.log(c);//21

```
  - The two examples are logically different based on which label the execution flow
of the inner for loop is transferred to.
**Breaking from a labeled block scope**
  - While we’re on the subject, you can use break keyword to break out of regular non
for-loop block scope as long as it’s labeled:
```javascript
block:{
    console.log("before");
    break block;
    console.log("after");
}

```
Console output:
```console
"before"

```
  - Execution flow never reaches ”after”.
  
  **11.2 for...of Loop**
  - Using indexed iterators, such as the for loop, can become a hassle when dealing
with arrays or object properties. Especially when their number is not known.
  - for...of loops to the rescue!
  - We’ll start with a slightly advanced example where we will use a for...of loop
together with a generator, and then discover some of the other, simpler use-cases.

**11.2.1 for...of and Generators**
  - Sometimes you might want to use a for loop with a generator – a special type of
function with star * character appended to the function* keyword.
  - When a generator function is called, the multiple yield statements inside it do not
execute at the same time, as you would normally expect. Only the first one does.
  - To execute yield statements 2 and 3, you have to call the generator function
again (two more times). Internally, the yield statement counter is incremented
automatically every time you call the generator function.
  - Generator executes a yield statement asynchronously, even though the code inside
the generator function has linear appearance. This is done on purpose - it makes
code more readable compared to alternatives (XMLHttpRequest, Ajax, etc).
```javascript
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
for(let value of generator())
  console.log(value)

```
  - The code above is equivalent to calling generator manually 3 times (When you
want to increment generator manually just make sure that you first assign it to
another variable.):

```javascript
let gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

```
  - Here’s the console output in either case:
```console
1
2
3
```
  - Generators are one-time use functions. You should not attempt to reuse a generator function more than once as if it were a regular function (after the last yield
statement has been executed.)11.2.2 **for...of and Strings**
  - Strings are iterable.
You can walk each character of a string using a for...of loop:

```javascript
let string="text";
for(let value of string)
   console.log(value); 
```
Console:
```console
t
e
x
t
```
**11.2.3 for...of and Arrays**
  - Let’s say we have an array:
 ```javascript
 let array = [0,1,2];
 ```
   - We can iterate through it without having to create index variables. Once the end
of the array is reached the loop will end automatically:
```javascript
const array = [1,2,3,4];
for(let value of array)
  console.log(value)
```
Console:
```console
1
2
3
4
```
**11.2.4 for...of and Objects**
  - It would be nice to have the ability to iterate over an object’s properties using
for...of loop, right?
```javascript
let object = {a:1,b:2,c:3};
for(let value of object)
  console.log(value)//Object is not iteratable
  
```
  - But for...of loops work only with iterable values. An object is not an iterable. (It
has enumerable properties.) One solution is to convert the object to an iterable
first before using it in a for...of loop.
**11.2.5 for...of loops and objects converted to iterables**
  - As a remedy you can first convert an object to an iterable using some of the built-in
Object methods: .keys, .values or .entries:
```javascript
let enumerable={property:1,method:()=>{}};
for (let key of Object.keys(enumerable))
  console.log(key);//property method

for (let value of Object.values(enumerable))
  console.log(value);//1 [Function: method]

for (let entry of Object.entries(enumerable))
  console.log(entry);//[ 'property', 1 ] [ 'method', [Function: method] ]
```
  - This can also be achievable by using a for...in loop instead, without having to use
any of the Object conversion methods.
We’ll take a look at that in the following section.
**11.3 for...in Loops**
  - The for...of loops (in previous section) only accept iterables. Unless the object is
first converted to an iterable, a for...of loop won’t be of any help.
  - for...in loops work with enumerable object properties. It’s a much more elegant
solution for iterating through Object properties.
  - When you have an object at hand you should probably use a for...in loop.
 ```javascript
 let object = {a:1,b:2,c:5,method:()=>{}};
for (let value in object)
   console.log(value, object[value]);
   
/*Console
a 1
b 2
c 5
method [Function: method]*/
 ```
   - A for...in loop will iterate only enumerable object properties. Not all object
properties are enumerable, even if they exist on the object. All non-enumerable
properties will be skipped by for...in iterator.
  - You won’t see constructor and prototype properties in an output from the
for...in loop. Although they exist on an object they are not considered to be
enumerable.

**11.4 While Loops**
  - A while loop will iterate for an indefinite number of times until the specified
condition (there is only one) evaluates to false. At which point your loop will stop
and execution flow will resume.
```javascript
while (condition){
  /*do something until condition is false*/
}
```
  - Once condition evaluates to false the while loop will break automatically:
```javascript
 let c = 0;
while (c++ <= 5)
console.log(c);

```
Console:
```console
1
2
3
4
5
6
```
  - A secondary condition can be tested within the loop. This makes it possible to
break from the loop earlier if needed:
```javascript
while(condition_1){
  if(condition_2)
     break;
}
```
**11.4.1 While and continue**
  - The continue keyword can be used to skip steps:
  let c = 0;
```javascript
while (c++ < 1000){
 if (c > 1)
     continue;
     console.log(c)
}
```
  - Console output:
```console
1
```
  - Just keep in mind this is just an example. In reality, this would be considered bad
code, because the if statement is still executed 1000 times. The console prints 1
only when c == 0. If you need an early exist, use break instead.

# **Chapter 12**
## **Arrays**
  - Many of the Array.* methods are iterators. Instead of passing your array into a
for or a while loop you should use built-in Array methods instead. Arrays usually
already have methods offering cleaner syntax for anything you would write yourself
to solve the same problem. So why re-invent the wheel?
  - Array methods are attached to Array.prototype property. This means you can
execute them directly from array object like array.forEach() or directly from
array’s literal value like: [1,2,3].forEach();
**12.0.1 Array.prototype.sort()**
  - Previous (pre-ES10) implementation of V8 used an unstable quick sort algorithm
for arrays containing more than 10 items.
  - A stable sorting algorithm is when two objects with equal keys appear in the same
order in the sorted output as they appear in the unsorted input. But this is no
longer the case. ES10 offers a stable array sort:

```javascript
var fruit = [
    {name:"Apple", count:13,},
    {name:"Pear", count:12,},
    {name:"Banana", count:12,},
    {name:"Strawberry", count:11,},
    {name:"Cherry", count:11,},
    {name:"Blackberry", count:10,},
    {name:"Pineapple", count:10,}

];
```

Console Output:
```javascript
//create our own criteria function:
let mySort=(a,b)=>a.count - b.count;
//Perform stable ES10 sort:
let sorted = fruit.sort(mySort);
console.log(sorted);
```
Console Output:

```console
[
  { name: 'Blackberry', count: 10 },
  { name: 'Pineapple', count: 10 },
  { name: 'Strawberry', count: 11 },
  { name: 'Cherry', count: 11 },
  { name: 'Pear', count: 12 },
  { name: 'Banana', count: 12 },
  { name: 'Apple', count: 13 }
]
```
**12.0.2 Array.forEach**
  - The forEach method will execute a function for every item in the array.
  - Each iteration step receives 3 arguments value, index, object.
It’s similar to a for-loop but it looks cleaner:
```javascript
let fruit = ['pear',
'banana',
'orange',
'apple',
'cherry'];
let print = function(item,index,object){
    console.log(item);
}
fruit.forEach(print);
```
  - Starting from ES6 it can be suggested to use arrow functions together with Array
methods. The code will be easier to read and maintain when building large scale
applications. Let’s take a look at how we can make syntax cleaner:
  - Because in JavaScript functions are also expressions, you can pass the function
directly into the forEach method:
```javascript
let print = function(item,index,object){
    console.log(item,index,object);
}
fruit.forEach(print);

```
  - But you might want to use an arrow function here: () => {}
 ```javascript
 fruit.forEach((item,index,object)=>{
console.log(item,index,object);});

 ```
   - The console output from both of the cases above:
 ```console
  pear 0 [ 'pear', 'banana', 'orange', 'apple', 'cherry' ]
banana 1 [ 'pear', 'banana', 'orange', 'apple', 'cherry' ]
orange 2 [ 'pear', 'banana', 'orange', 'apple', 'cherry' ]
apple 3 [ 'pear', 'banana', 'orange', 'apple', 'cherry' ]
cherry 4 [ 'pear', 'banana', 'orange', 'apple', 'cherry' ]
 ```
   - If you can get away with one argument and return statement you can use this slim
form:
```javascript
fruit.forEach(item=>console.log(item));
```
  - As long as you have only one single statement you can remove brackets.
```console
  pear
banana
orange
apple
cherry
```
**12.0.3 Array.every**
  - Return value: boolean
  - Not to be confused with ”execute for every item” logic of forEach. In many cases
method every will actually not run on every item in the array when at least one
item doesn’t evaluate to true based on specified condition.
  - The method every will return true if the value of every single item in the array
satisfies the condition specified in its function argument:
  - The result is true because none of the numbers in the array are greater than or
equal to 10. Let’s take at the same function with a different value set. If 10 or a
greater number was present in the array the result would be false:
  - Here one of the numbers is 256. Which can be translated to ”not every value
in the array is ¡ 10”. Hence, false is returned. It’s important to note that once
  - Array.every method encounters 256 the condition function will not execute on the
remaining items. Just a single failed test will cause false.
  - Array.every does not modify the original array. The value inside the function is a
copy, not a reference to the value in the original array
```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

// expected output: true
```
**12.0.4 Array.some**
  - Return value: boolean
Similar to Array.every except it stops looping whenever it encounters a value that
evaluates to true (and not false like in Array.every) Let’s compare:
```javascript
let number = [0,10,2,3,4,5,6,7];
let condition = value => value < 10;
let some = number.some(condition);
let every = number.every(condition);
console.log(some);
console.log(every);
```
  - Here some returns true because it checks first value: 0 for ¡ 10 and immediately
returns true without having to check the rest of the values.
  - The every method returns false on the same data set. That’s because when it
reaches the second item whose value is 10, the ¡ 10 test fails.
  - Note: Try not to think of some as an ”opposite” of every. In some cases they
return the same result on the same data set.

**12.0.5 Array.filter**
  - Return value: new array consisting only of items that passed a condition.

```javascript
 let number = [0,10,2,3,4,5,6,7]
let condition = value => value < 10;
let filtered = number.filter(condition);
console.log(filtered);
console.log(number);

```
  - The new filtered array contains all original items except 10. Because it did not pass the ¡ 10 test. In a real-world scenario the condition can be much more complex
and involve larger objects sets.
**12.0.6 Array.map**
  - Return value: a copy of the original array with modified values (if any.)

```javascript
let number = [24,24,2,4,56,85,63];
let condition = number.map(value => value + 1);
console.log(condition);
```
  - Array.map is like Array.forEach but it returns a copy of the modified array. Note
that original array is still unchanged.
**12.0.7 Array.reduce**
  - Return value: accumulator
  - Reducers are similar to other methods. Yet they are unique because they have an
accumulator value. The accumulator value must be initialized. There are different
types of reducers. In this first example we’ll take at a simple case.
  - As values are iterated this accumulator adds all numbers into a single value:
Like any other Array method that works with iterables, a reducer has access to
the value it is currently iterating (currentValue).
  - This reducer added up all the numbers into the single accumulator value and
returned it: 1 + 2 + 4 = 7.
  - How to understand reducers in more complex, practical situations?
When developing software in the real world you won’t be using reducers to count
numbers. This can be done with a simple for loop. You will encounter plenty of
situations where a set of data should be ”reduced” only to the set of important
values based on some criteria.
```javascript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```
**Array.reduce or Array.filter?**
  - There is a reason why Array object has a number of different methods that at
first sight appear to do the same things.
  - When it comes to Array methods, always try to to choose a proper tool for the
task. Don’t use reduce just because you want to use reduce – figure out if a
particular method was purposed to produces a more efficient logic.
  - It is written, somewhere, that reduce is the father of filter and map. Anything
you can do with filter and map can be done with reduce.
  - However, reduce provides a more elegant solution to adding up numbers than a
for-loop or other Array methods.
**Reducers And Updating Object Properties In A Database**
  - After an API action – update or delete an item, for example – you may want
to update the application view. But why update all objects everywhere, when you
can ”reduce” which object properties should be affected, without having to copy
entire lists of object – even the ones that weren’t affected by the API call?

**12.0.8 Practical Reducer Ideas**
  - Narrowing down on object properties
Let’s say your car listing management application has a button that updates the
price of a particular vehicle. The user sets a new price and clicks on the button.
An action is dispatched to update the vehicle in the database.
  - Then the callback function returns containing the object with all properties for
that vehicle ID (price, make, model, year). But, we only need to update the price.
  - A reducer can make sure to narrow down on (or ”hand pick”) only the vehicle
price property, not the entire set of properties on the object. The object is then
sent back to the database and application view is updated.

**Counting weekends**
  - Imagine a task where you had to implement a function that, given month would
return number of weekends, working days and holidays there are in that month. A
month could be represented by the number of days in it.
  - It’s important to keep the input values the same type as the return value of a
reducer. This is one of the main characteristics of a reducer: to reduce a set (not
necessarily by filtering, although it is a possibility.)
  - Function Purity
Reducers are often used in code written following Functional Programming style
principles. One of which is function purity. The following Dos and Dont’s
describe some of properties of a pure function.

**12.0.9 Dos and Dont’s**
  - Even though these are not absolute requirements, these ideas might be helpful for
avoiding anti-pattern code. Only use reduce() when the result has the same type
as the items and the reducer is associative: 
```javascript
[1,2,3,4,5].reduce((a,b)=>a+b, 0);
```
  - Do use it for summing up some numbers.
  - Do use it for multiplying some numbers.
  - Do use it for updating state in React.
  - Do not use it for building new lists or objects from scratch.
  - Do not use it for just about anything else (use a loop).
  - Do not use it to mutate (change original values of) its arguments.
  - Do not use it perform side effects, like API calls and routing transitions.
 - Do not use it to call non-pure functions, e.g. Date.now() or Math.random().

**12.0.10 Array.flat()**

  - Flattening a multi-dimensional array:
```javascript
  let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
multi.flat();//(7) [1, 2, 3, 4, 5, 6, Array(4)]
multi.flat().flat();//(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)]
multi.flat().flat().flat();//12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
multi.flat(Infinity);//(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

**12.0.11 Array.flatMap()**

```javascript
let array = [1,2,3,4,5];
array.map(x=>x*2);
```
  - Becomes;
```console
(5) [2, 4, 6, 8, 10]
0: 2
1: 4
2: 6
3: 8
4: 10
length: 5
```
Now flatten the map:
```javascript
let array = [1,2,3,4,5];
console.log(array.flatMap(x=>x*2));
//[ 2, 4, 6, 8, 10 ]
```
**12.0.12 String.prototype.matchAll()**
Matching multiple patterns in a string is a common problem when writing software.
Use cases include extracting name and email addresses at the same time from an
email header, scanning for presence of unique patterns, etc.
In the past, to match multiple items we used String.match with a regular expression and /g (”global”) flag or RegExp.exec and/or RegExp.test with /g.
First, let’s take a look at how the older spec worked.
String.match with string argument only returns the first match:
```javascript
let string = "hello";
let matches = string.match("l");
console.log(matches[0]);
```
  - The result is a single "l" (note: the match is stored in matches[0], not matches.)
  - Only "l" is returned from a search for "l" in the word "hello".
  - The same goes for using string.match with a regex argument. Let’s locate the "l"
character in the string "hello" using the regular expression /l/:
```javascript
let string = "hello";
let matches = string.match("l");
console.log(matches[0]);
```
**Adding /g to the mix**
  - String.match with a regex and the /g flag does return multiple matches:

```javascript
let string = "hello";
let ret = string.match(/l/g);
console.log(ret);
// ['l', 'l']
//0: "l"
//1: "l"
//length: 2

```
  - Great... we’ve got our multiple matches using < ES10. It worked all along. So
why bother with a completely new matchAll method? Well, before we can answer
this question in more detail, let’s take a look at capture groups. If nothing else,
you might learn something new about regular expressions.

**Regular Expression Capture Groups**
  - Capturing groups in regex is simply extracting a pattern from () parenthesis.
  - You can capture groups with /regex/.exec(string) and with string.match.
Regular capture group is created by wrapping a pattern in (pattern).
  - But to create groups property on resulting object it is: (?<name>pattern).
  - To create a group name: prepend ?<name> inside brackets. The resulting object
will have a new property groups.name attached (see code below.)
This is the string we will take as the specimen for our experiment:
```javascript
const string = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
while (match = regex.exec(string))
{
    let value = match[0];
    let index = match.index;
    let input = match.input;
    console.log(`${value} at ${index} with '${input}`);
    console.log(match.groups.color);
    console.log(match.groups.bird);

}
```
  - Note: match.groups.color & match.groups.bird are created
from adding ?<color> and ?<bird> to the () match in the regex string.

  - regex.exec method needs to be called multiple times to walk the entire set of
the search results. During each iteration when .exec is called, the next result is
revealed (exec doesn’t return all matches right away.) Hence, while loop

Console Output:
```console
lack*raven at 0 with 'black*raven lime*parrot white*seagull
black
raven
 lime*parrot at 11 with 'black*raven lime*parrot white*seagull
 lime
parrot
 white*seagull at 23 with 'black*raven lime*parrot white*seagull
 white
seagull
```
**But there is the quirk:**
 - If you remove /g from this regex, you will create an infinite loop cycling on the
first result forever. This has been a huge pain in the past. Imagine receiving a
regex from some database where you are unsure of whether it has /g at the end
or not. You’d have to check for it first, which would require additional code.
  - And now, we have enough background to answer the question:

**Good reasons to use .matchAll()**
1. It can be more elegant when using with capture groups. A capture group is
simply the part of regular expression with ( ) that extracts a pattern.
2. It returns an iterator instead of array. Iterators on their own are useful.
3. An iterator can be converted to an array using spread operator (...)
4. It avoids regular expressions with /g flag... useful when an unknown regular
expression is retrieved from database or outside source and used together with the
archaic RegEx object.
5. Regular expressions created using RegEx object cannot be chained using the
dot (.) operator.
6. Advanced: RegEx object changes internal .lastIndex property that tracks last matching position. This can wreck havoc in complex cases.
**How does .matchAll() work?**
  - Let’s try to match all instances of letter e and l in the word hello. Because an
iterator is returned we can walk it with a for...of loop:
```javascript
let iterator = "hello".matchAll(/[el]/);
for (const match of iterator)
  console.log(match);
```
  - Note that .matchAll method does not require /g flag.
 ```console
 [ 'e', index: 1, input: 'hello', groups: undefined ]
[ 'l', index: 2, input: 'hello', groups: undefined ]
[ 'l', index: 3, input: 'hello', groups: undefined ]
 ```
 **Capture Groups example with .matchAll()**
  - .matchAll returns an iterator so we can walk it with for...of loop.
  
```javascript 
const string = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
while (match = regex.exec(string))
{
    let value = match[0];
    let index = match.index;
    let input = match.input;
    console.log(`${value} at ${index} with '${input}`);
    console.log(match.groups.color);
    console.log(match.groups.bird);

}
```
  - Console Output:

```console
lack*raven at 0 with 'black*raven lime*parrot white*seagull
black
raven
 lime*parrot at 11 with 'black*raven lime*parrot white*seagull
 lime
parrot
 white*seagull at 23 with 'black*raven lime*parrot white*seagull
 white
```

  - Perhaps aesthetically it is very similar to the original regex.exec while loop implementation. But as stated earlier this is the better way for the reasons mentioned
above. And removing /g won’t cause an infinite loop.

**12.0.13 Dos and Dont’s**
  - Do use string.matchAll instead of regex.exec & string.match with /g flag.

**12.0.14 Comparing Two Objects**
  - It makes sense to compare two literal numeric values such as 1 === 1 or literal
boolean values true === false, but what does it mean to compare two objects?
Furthermore == and === operators won’t help because they compare by reference
and not by value: [] and [] may be equal by value but they are different arrays:
```javascript
[] === [];//false by value
let x = [];
x===x;//true only by referance
```
  - We’ll have to write our own function! One way of thinking about comparing
objects is comparing the number, type and value of all of their properties.
  - Following naming convention of strcmp: a function that compares strings in many
languages, we can write a custom function objcmp that compares two objects:
```javascript
export default function objcmp(a,b){
    //Copy properties into a and b
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);
     
    //Return early if number of properties is not equal
    if(A.length != B.length)
    return false;

    //Return early if number of properties on both objects
    for(let i = 0; i<A.length;i++)
    {
        let propName = A[i];
        //properties must equal by value *and type
        if(a[propName] !== b[propName])
        return false;
    }
    //objects are equal
    return true

}
objcmp();

```
  - The function objcmp takes two arguments: a and b, representing the two objects
we want to compare.
  - This is a non-recursive, shallow copy algorithm. In other words, we are only comparing first-class properties attached directly to the object. Properties attached to
properties are not compared. In many cases this is enough.
  - But there is another, much greater problem. In its current form the function
assumes that properties cannot point to either an array or object. Two common
data structures that are very likely to be part of an arbitrary object.
  - Even if we’re not doing a deep comparison, the function will fail if any of the
properties point to either an object or an array, regardless of whether their length
and actual values are the same:

```javascript
let a = {prop:[1,2], obj:{}};
let b = {prop:[1,2], obj:{}};
objcmp(a,b);
```
  - Our algorithm failed on [1,2] === [1,2] comparison. So how do we deal with
this situation? First, we can write our own is array function. Because array is
the only object in JavaScript with length property and at least 3 higher-order
functions: filter, reduce and map, we can say that if these methods exist on an
object, then it must be an array, with roughly 99% certainty:
```javascript
function isArray(value){
    return typeof value.reduce == "function" &&
    typeof value.filter == "function" &&
    typeof value.map == "function" &&
    typeof value.length == "number" ;


}
//Test the function 
console.log(isArray(1));//false
console.log(isArray("string"));//false
console.log(isArray({a:1}));//false
console.log(isArray(true));//false
console.log(isArray([]));//true
console.log(isArray([1,2,3,4,5]));//true
```
**12.0.15 Writing arrcmp**
  - Let’s write our own arrcmp function based on the assumption the array equality
means that each value at each corresponding index in both arrays match:

```javascript
let a = [1,2];
let b = [1,2];
let c = [5,5];
function is_array(value) {
    return typeof value.reduce=="function"&&
           typeof value.filter=="function"&&
           typeof value.map=="function"&&
           typeof value.length=="number";
}
 function arrcmp(a,b){
     // one or more values are not arrays:
     if(!(is_array(a)&&is_array(b)))
      return false;
    //Not equal by length
    if(a.length != b.length)
    return false;
    //compare by value
    for(let i=0;i<a.length;i++)
    if(a[i]!==b[i])
    return false;
    //All test passed: array a and b are equal
return true;


 }
 console.log(arrcmp(a,b));//true
 console.log(arrcmp(b,b));//true
 console.log(arrcmp(a,b));//false
```

 - There is no built in function for comparing arrays in JavaScript. There is probably
a good reason for it. How data is mapped to an array largely depends on overall
design of the data in your application.
  - After all, what exactly does it mean for two arrays to be equal? The data layout
can be different from project to project. So is the nature of what you’re trying
to accomplish, by storing data in arrays. For this reason an array does not always
guarantee integrity between its values and indexes they are stored at.
Without a concrete project, we can only assume that it does.

**12.0.16 Improving objcmp**

  - Now that we have is array and arr cmp let’s add two special case comparisons to
the objcmp function: one for arrays using our new function, and one for objects
using recursion. This deepens our algorithm and makes it less prone to bugs.
We will call objcmp from itself (line 025) if one of the object properties checks
out to be an object literal itself:
```javascript
let a = [1,2];
let b = [1,2];
let c = [5,5];
function is_array(value) {
    return typeof value.reduce=="function"&&
           typeof value.filter=="function"&&
           typeof value.map=="function"&&
           typeof value.length=="number";
}
function arrcmp(a,b){
    // one or more values are not arrays:
    if(!(is_array(a)&&is_array(b)))
     return false;
   //Not equal by length
   if(a.length != b.length)
   return false;
   //compare by value
   for(let i=0;i<a.length;i++)
   if(i[a]!==b[i])
   return false;
   //All test passed: array a and b are equal
return true;

}
function objcmp(a,b){
    //copy properties into A and B
    let A=Object.getOwnPropertyNames(a);
    let B=Object.getOwnPropertyNames(b);
    if(A.length != B.length)
     return false;
    
     for (let i=0;i<A.length;i++){
         let propName=A[i];
         let p1 = a[propName];
         let p2 = b[propName];
         
         if(is_array(p1)&&is_array(p2)){
             if(!arrcmp(p1, p2))
              return false;

         } else
         if(p1.constructor === Object &&
            p2.constructor === Object){
                if(!objcmp(p1, p2))
                  return false;
            } else if (p1 !== p2)
             return false;

     }

   return true;
}
console.log(objcmp(a,b))//true
console.log(objcmp({a:{b:12}},{a:{b:12}}));//true
console.log(objcmp({a:{b:12}},{a:{b:13}}));//false
console.log(objcmp({a:function(){}},{a:function(){}}));//false
```
  - A test for whether
property points to an array or an object literal was added. If the property is neither,
primitive value is tested as usual.

**12.0.17 Testing objcmp on a more complex object**
 - Let’s try it out in action!
```javascript
 console.log(objcmp(a,b))//true
console.log(objcmp({a:{b:12}},{a:{b:12}}));//true
console.log(objcmp({a:{b:12}},{a:{b:13}}));//false
console.log(objcmp({a:function(){}},{a:function(){}}));//false

```
  - Our object comparison function now works as expected. It’s not perfect but at
least it won’t get stuck in large majority of cases. In fact, it even checks object
properties recursively, which is a bit more of a deeper search than before.
  - Possible Improvements: You can further improve this function by checking for
arrays of objects, instead of just arrays of values.
As you can see, this is exactly why a native function for a deep search doesn’t exist.
  - It really depends on your data implementation. Who says your arrays will contain
objects or that any object property will ever point to another object? Without
this knowledge, it’s difficult to create a common-case algorithm without risking
creating an anti-pattern (when your code does more than it needs to.)

**Chapter Review**
  - Trying to solve one problem (compare two objects) led to discovery of another
problem we also needed to solve first (compare two arrays.) This is not something
we predicted at the time we thought of writing objcmp.
  - JavaScript already provides Array.isArray method – so why reinvent the wheel?
  - Taking initiative to solve any problem is what makes the distinction between a
hobbyist coder and a software developer. The skill of thinking for yourself to solve
problems, instead of using existing libraries, helps you train yourself for.
  - Writing your own code is always a good idea. If you can’t write an is array
function yourself, chances are you won’t have the practice and training to write
an important function later, one that doesn’t exist but is crucial to success of a
real-life project, facing much more complex problems.
  - This might cause you not only reputation among your peers, but the job itself.
  - Most interviews at software companies don’t test only for knowledge, they want
to see your problem-solving approach. Perhaps, it’s a good idea to develop it!

# **13.1 Functions**

  - In JavaScript there are two types of functions: the standard function that can be
defined using function keyword and an arrow function ()=>{} added later in ES6.
  - Regular functions can be called. But they can also act as object constructors,
when used together with new operator in order to create an instance of an object.
  - Note that since EcmaScript >= 6 you can use class keyword to the same effect.
  - Inside a function, the this keyword can point either to the context from which the
function was called. But it can also point to an instance of the created object, if
that function was used as an object constructor.
  - Functions have an array-like arguments object inside their scope, which holds the
length of parameters and values that were passed to the function, even if parameter
names were not present in function definition.
  - An arrow function can be called. But it cannot be used to instantiate objects.
  - Arrow functions are often used with functional programming style. Like regular
functions, they can be used to define object methods. They are also often used
as event callback functions. Inside the scope of an arrow function this keyword
points to whatever this equals to outside of its own scope.
  - Arrow functions do not have the array-like arguments inside their scope. 
 

**13.1.1 Function Anatomy**
  - The function definition consists of the function keyword followed by its name
(shown as update, in the following example) parenthesis containinga list of parameter names (a,b,c) and the function body enclosed in brackets:
```javascript
let num = 7;
let arr = [1,2];
let obj = {net:11};

function update(a,b,c,d = 'hi'){
return a,b,c,d;

}
const res=update(num,arr,obj);
console.log(res);
```
  - The return keyword is optional. But function will return anyway once all statements in its body are done executing, even if return keyword is not specified.
  - The this keyword inside an ES5 style function points to the context from which the
function was executed. Very often it is the global window object. If the function
is used to instantiate an object using new keyword then this keyword will point
to object instance that was instantiated using function.
  - The arguments is an array-like object that contains 0-index list of arguments that
were passed into the function, even if parameter names were not specified in the
function’s definition.
**13.1.2 Anonymous Functions**
  - Nameless or anonymous functions can be defined by using the same syntax but
skipping the function name.
  - Anonymous functions are often used as event callbacks, where we usually don’t
need to know what the names are – we simply want to execute them at a specific
time after an event has finished doing its work:
```javascript
setTimeout(function(){
    console.log("print something in 1 second.");
    console.log(arguments);
},1000);
```
  - Anonymous function used as a 
  setTimeout event callback.
 ```javascript
 document.addEventListner("click",function(){
   console.log("Document was clicked.");
   console.log(arguments);

 });
 ```
   - Anonymous function used to intercept a mouse click event.

**13.1.3 Assigning Functions To Variables**
  - Anonymous functions can be assigned to a variable, making them named functions
again. By doing this you can separate the function definition from its use in an
event-based method:
```javascript
let print = function(){
    console.log("Print something in 1 second.");
    console.log(arguments);
}
let clicked = function(){
    console.log("Document was clicked");
    console.log(arguments);
}
//call anonymous named functions
print();
clicked();
```
 - ”anonymous” functions that were assigned to a variable name become
named functions.
  - You can also pass them to the event functions just by their name:
```javascript
//cleaner code
 setTimeout(print,1000);
clicked();
document.addEventListener('click', clicked);
```
  - This often makes your code look cleaner. Note that different event functions
generate their own arguments, regardless of whether your anonymous function
defines parameters to catch them – they will be passed into the function:
```javascript
let clicked = function(event){
  console.log(event, event.target);
}
```
**Function Parameters**
  - Function parameters are optional. But in many cases you will find yourself defining
some. You can use default function parameters to pass things like primitives, arrays
and objects into a function. Anything that evaluates to a single value will do it:
```javascript
function fun(text, number, array, object, func, misc){
    console.log(text);
    console.log(number);
    console.log(array);
    console.log(object);
    console.log(func);
    console.log(misc);
    //Call the function by its parameter name
    func();
}

```
  - You can pass the name of another function. This way you can call that function
at some point later inside another function.
  - Let’s pass some arguments into function’s parameters:
```javascript
 function volleyball(){return "volleyball"};
fun("text",125,[1,2,3],{count:1},volleyball, volleyball());
```
  - Note that we’re passing the function name Volleyball and the result: Volleyball()
(which will evaluate to string value ”Volleyball.”) into the last two parameters of
the function Fun(); to get the following console output:

```console
text
125
[ 1, 2, 3 ]
{ count: 1 }
[Function: volleyball]
volleyball
```

  - That’s a useful variety of primitives and objects!
  - The last value is generated by ca-lling function Volleyball, which was passed into
parameter func. This means we can simply call it by calling func() instead of
Volleyball(), since func is its name inside the function.

**Checking For Types**
  - JavaScript is a dynamically-typed language. The type of a variable is determined
by its value. The variable definition simply assumes the type. This sometimes can
be the cause of subtle bugs.
  - For example, even though JavaScript provides a number of different object types
to work with, it doesn’t really provide an automatic safeguard that makes sure the
arguments passed into the function were what you expect them to be.
  - What if in the previous example, we passed an array or an object into func
parameter? The function expects it to be a function. We wouldn’t be able to
call func() if func wasn’t a function.
  - Let’s narrow down on the problem:

```javascript
function fun(func){
    console.log(func());//call the function by it's parameters name

}
var array = [];
var f = function() {return true}
fun(array);//pass array instead of function

```
  - But we cannot call an array. Hence, console output:
```console
 Uncaught TypeError: func is not a function
    at fun (<anonymous>:2:17)
    at <anonymous>:7:1

```
  - This is a problem if it happens in production code.

**Safeguarding Function Parameters**
  - The solution is to safeguard the value by checking its type. JavaScript has a
built-in directive typeof that we can use before calling the function: 

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
 - The function Fun(array) was called. The function expects a function name as
an argument but an array was sent.   - The typeof test failed and nothing happened
but at least our program didn’t break.
- You can do the same with other types if it becomes imperative that a particular
value must be in absolute compliance with a particular type.

**13.2 Origin of this keyword**

  - The this keyword was borrowed from C++. In its original design this keyword
was meant to point to an instance of an object in class definitions.
  - That’s it! There shouldn’t be much more to it.
  - But it seems like original designer of JavaScript language decided to use this
keyword to provide one extra feature: carrying a link to execution context, which
shouldn’t really be part of computer language feature design, but rather kept away
to its internal implementation:

  - You can’t avoid dealing with context in any programming language. But wiring
          
    










