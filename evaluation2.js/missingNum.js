const arr = [1,2,3,5];
r=arr.find((x,i) => arr[i+1]-x > 1) + 1;
console.log(r);
