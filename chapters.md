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





