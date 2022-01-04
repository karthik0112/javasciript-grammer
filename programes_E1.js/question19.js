let n = 5;
let string= "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j < n -i + 1; j++) {
    string += " ";
  }
  // printing star
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}

// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 1; j < i+1; j++) {
    string += " ";
  }
  // printing star
  for (let k = 1;k <= 2 * (n - i) - 1;k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);