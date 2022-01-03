/*function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) { 
      if(n % i === 0) return false; 
    }
    return n > 1; 
  console.log(isPrimeNumber(1)); 
  console.log(isPrimeNumber(2));  
  console.log(isPrimeNumber(9));  
  console.log(isPrimeNumber(11)); 
}*/

function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) { 
      if(n % i === 0) return false;
    }
    return n > 1;return true;
  }
  
  console.log(isPrimeNumber(5));  
  console.log(isPrimeNumber(2));  
  console.log(isPrimeNumber(9));  
  console.log(isPrimeNumber(11));



function isPrime(num) {
    if (num % 2 === 0) {
    return false;
   }
   return true;
}
   console.log(isPrime(1));
  
  