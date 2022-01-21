"use strict";
const findMissingNumber = (array) => {
    for (let i = 1; i <= array.length; i++) {
      if (array[i - 1] !== i) {
        return i;
      }
    }
  }
  const array = [1, 2, 3, 5];
  console.log(findMissingNumber(array));