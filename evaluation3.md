
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
"use strict";
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