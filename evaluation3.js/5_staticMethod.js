       "use strict";
       /*class static1{
            static example1() {
                return "static method 1"
            }
            static example1() { 
                return "static method 2"
            }
  
        }
        console.log(static1.example1());*/

    
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