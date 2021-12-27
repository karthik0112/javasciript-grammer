let a = undefined;
let b = null;
let c =12;
let d = 40.3;
let e = 100n;
let f = "hello";
let g = Symbol();
console.log(typeof g);
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz