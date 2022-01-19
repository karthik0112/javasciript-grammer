const length=5;
let string = "";
let count = 1;
for (let i = 1; i < length; i++) {
  for (let j = 1; j <= length - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2*i-i; k++) {
    string +=count;
    count++;
    string +=" "; 
  }  
  string += "\n";
}
console.log(string);