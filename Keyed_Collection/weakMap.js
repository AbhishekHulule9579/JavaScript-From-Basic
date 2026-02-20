// Create a new WeakMap
const myWeakMap = new WeakMap();

// Add key-value pairs
const obj1 = { key: "name" };
const obj2 = { id: 1 };
const obj3 = { flag: true };
const obj4 = { a: 1 };

myWeakMap.set(obj1, 'Alice');        // ✅ Works (object key)
myWeakMap.set(obj2, 'number key');   // ✅ Works
myWeakMap.set(obj3, 'boolean key');  // ✅ Works
myWeakMap.set(obj4, 'object key');   // ✅ Works

// ❌ These will NOT work (only objects allowed as keys)

// myWeakMap.set('name', 'Alice');  // ❌ Error
// myWeakMap.set(1, 'number key');  // ❌ Error
// myWeakMap.set(true, 'boolean key'); // ❌ Error

// Get values
console.log(myWeakMap.get(obj1));  // ✅ Output: Alice
console.log(myWeakMap.get(obj2));  // ✅ Output: number key

// Check existence
console.log(myWeakMap.has(obj1));  // ✅ true

// ❌ WeakMap does NOT have size property
// console.log(myWeakMap.size);  // ❌ undefined

// ❌ WeakMap is NOT iterable
// for (const [key, value] of myWeakMap.entries()) {
//   console.log(key, value);
// }   // ❌ Error

// ❌ Cannot use for...of directly
// for (let [key,value] of myWeakMap) {
//    console.log(key,value);
// }  // ❌ Error

// ❌ Cannot use forEach
// myWeakMap.forEach((value,key) => {
//    console.log(key,value);
// });  // ❌ Error

// Delete entry
myWeakMap.delete(obj1);   // ✅ Works
console.log(myWeakMap.has(obj1));  // false

// ❌ WeakMap does NOT have clear()
// myWeakMap.clear();   // ❌ Error