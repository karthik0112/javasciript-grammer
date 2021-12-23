[Chapter 1] 

What is javascript?
    
    *JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS.
    *JavaScript can calculate, manipulate and validate data. 

* PRESENTATION FORMAT;
       
        * Namely: imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 These are all covered in this Documentation.
        
        * import - The static import statement is used to import read only live bindings which are exported by another module. 
        
        * The constructor method is a special method of a class for creating and initializing an object instance of that class.

[CHAPTER 2]

        Chrome console
 
        * Many programmers only know Chrome’s console.log but the console API contains few other methods that have practical use, especially when time is of essence.
  
       let object = { property1 : 1, property1 : 2, method : function(){} };
       copy(object);

       It returns only JSON. JSON string format does not support methods,only properties and value pair

       console.dir()

       if you want to look at all the object’s properties and methods,you can use console.dir method:
  
       console.time();
       let arr = Array(1000);
       for(let i=0; i<arr.length; i++) {
       arr[i] = new Object();
       }
       console.timeEnd();                                                     console.dir(object)

       console.error();

       the console.error() method writes an error message to the console.
       The console is useful for testing purposes.

       console time

       * The console.time() method starts a timer you can use to track how long an operation takes.

       console.time end()

       * The console.timeEnd() stops a timer that was previously started by calling console.time().
       console.timeEnd(label);
       * You can track the amount of time between function calls

       console.time();
       let arr = Array(1000);
       for(let i=0; i<arr.length; i++) {
       arr[i] = new Object();
       }
       console.timeEnd();  

       console.clear()

       This method clears the console
       
syntax;
     console.clear();

     let obj = {};
     console.log(obj);
     console.log("object = " + obj);
     console.log( `${obj}` );


CHAPTER 3:           ENTRY POINT OF JS

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

##**Chaining Methods**

  * Because in JavaScript functions can return this keyword, or any other value, including functions, it’s possible to chain multiple methods using the dot operator.

  * "hello".toUpperCase().substr(1,4);//"ELLO"

# CHAPTER 6 

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

# * Adding Multiple Values 

-   Often you will encounter statements tied together by multiple operators. What should the following statement evaluate to?

-   1+1+1+1+2+""; //"6"

-   First, all of the purely numeric values will be combined, ending up with the sum of 5   on the left hand side and "" on the right hand side

 - 5+"";
-   But this is still not enough to produce the final result. Adding a numeric value to a string value will coerce the numeric value to a string and then add them together:
Finally we arrive at "5" in string format. When adding numbers and strings, numeric values always take precedence. 

-   This seems to be a trend in JavaScript. In the next example we we will compare numbers to strings using the equality operator. JavaScript chooses to convert strings to numbers first, instead of numbers to strings.

* * Operator Precedence 

-   Some operators take precedence over others. What this means is that multiplication will be evaluated before addition.

-   Let’s take this statement for example:
-   1+1+1+2*"";//3

-   Several things will happen here. The string "" will coerce to 0 and 2 * 0 will evaluate to 0.
1+1+1+2*"";
1+1+1+2*0;
1+1+1+0;
3+0;//3
* * String To Number Comparison

-   When it comes to equality operator == numeric strings are evaluated to numbers in the same way the Number(string) function evaluates to numbers (or NaN).
-   According to EcmaScript specification, coercion between a string and a numeric value on both sides of the == operator can be visualized as follows.

* * Comparing Numeric String To Number

1 == "1"; //true
"1" == 1; //true

* * Comparing Non-Numeric String To Number

-   If the string does not contain a numeric value, it will evaluate to NaN and therefore further evaluating to false:
1 == "a"; //false
          
    










