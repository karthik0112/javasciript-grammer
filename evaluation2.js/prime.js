"use strict";
const checkPrime =("200");

for( let i=2; i<=checkPrime;i++){

        let isPrime = true;

        for(let j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
           console.log(i);       
        }
    }