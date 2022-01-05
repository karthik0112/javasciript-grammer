let n=5;
let num = "";
let count = 1;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n - i; j++) {
    num += " ";
  }
  for (let k = 0; k < 2*i-i; k++) {
    num +=count;
    count++;
    num +=" "; 
  }  
  num += "\n";
}
console.log(num);