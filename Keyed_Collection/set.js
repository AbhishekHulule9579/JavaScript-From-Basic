const mySet = new Set();

// add values
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add("Hello");

console.log(mySet);        // Set {1,2,"Hello"}

// check value
console.log(mySet.has(1)); // true

// size
console.log(mySet.size);   // 3

// delete value
mySet.delete(1);
console.log(mySet);        

// iterate - for...of
for (let value of mySet) {
   console.log(value);
}

// iterate - forEach
mySet.forEach((value) => {
   console.log(value);
});

// initialize with array
const numbers = new Set([1,2,3,3,4]);
console.log(numbers);      // {1,2,3,4}

// objects in set
const setObj = new Set();
let obj1 = {a:1};
let obj2 = {a:1};

setObj.add(obj1);
setObj.add(obj2);
console.log(setObj.size);  // 2

// convert set to array
const arrFromSet = [...numbers];
console.log(arrFromSet);   // [1,2,3,4]

// remove duplicates from array
const arr = [1,2,2,3,3,4];
const unique = [...new Set(arr)];
console.log(unique);       // [1,2,3,4]

// clear set
mySet.clear();
console.log(mySet);        // Set {}