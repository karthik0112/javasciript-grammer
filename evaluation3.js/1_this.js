"strict mode";
let person = { 
    name: "karthik", 
    thisInArrow:() => { 
    console.log(this);
    console.log(this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log(this);    
    console.log(this.name); // 'this' binding works here 
    } 
   };
   person.thisInArrow(); 
   person.thisInRegular();