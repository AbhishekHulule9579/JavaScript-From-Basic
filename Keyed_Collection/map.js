// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Alice');
myMap.set(1, 'number key');
myMap.set(true, 'boolean key');
myMap.set({a: 1}, 'object key'); // Objects can be keys

// Get values
console.log(myMap.get('name')); // Output: Alice
console.log(myMap.get(1));      // Output: number key

// Check existence
console.log(myMap.has('name')); // Output: true

// Get the size
console.log(myMap.size);        // Output: 4

// Iterate over the Map
for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//delete entry
myMap.delete("name");
for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//using for loop 
console.log("Using for loop ")
for(let[key,value]of myMap){
    console.log(key,value);
}

//using for each loop 
console.log("Using for each loop ")
myMap.forEach((value,key) => {
    console.log(key,value);
});

console.log("Clearing the map")
// clear map
myMap.clear();
for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}