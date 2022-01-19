const objectA={id: 1, name: "edison"};
const objectB={id: 1, name: "edison"};
const objectC={id: 1, name: "edison"};
const objectD={id: 2, name: "edison"};
function compareObjects(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  console.log(compareObjects(objectA, objectC)); // => true
  console.log(compareObjects( objectC,objectD)); // => false
  