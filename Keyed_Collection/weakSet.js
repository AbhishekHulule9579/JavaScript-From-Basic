const myWeakSet = new WeakSet();

let obj1 = { name: "Abhi" };
let obj2 = { age: 23 };

// add objects
myWeakSet.add(obj1);
myWeakSet.add(obj2);

// check value
console.log(myWeakSet.has(obj1)); // true

// delete value
myWeakSet.delete(obj1);
console.log(myWeakSet.has(obj1)); // false

// ❌ primitives not allowed
// myWeakSet.add(10);
// myWeakSet.add("Hello");
// myWeakSet.add(true);

// ❌ not iterable
// console.log(myWeakSet.size);
// myWeakSet.clear();
// for (let v of myWeakSet) {}
// myWeakSet.forEach(() => {});

// garbage collection example
let user = { id: 1 };
myWeakSet.add(user);

user = null;