/*class cat {
     let property = 20; //"Unexpexted token" Error
     this.property = 2;
    }*/
    class cat {
        constructor(){
            let property = 1; //Ok: local variable 
            this.something = 2;//Ok: object property
        }
        method(){
            console.log(this.property); //undefined
            console.log(this.something);//1
        }
    }
    let catt=new cat();
    catt.method();