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






