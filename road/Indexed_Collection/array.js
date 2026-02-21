// create array
let arr = [1, 2, 3, 4];
console.log(arr);           // [1,2,3,4]
// access elements
let names = ["Abhi", "Rahul", "Neha"];
console.log(names[0]);      // Abhi
console.log(names[1]);      // Rahul
// modify element
let nums = [10, 20, 30];
nums[1] = 50;
console.log(nums);          // [10,50,30]
// mixed types
let mixed = [10, "Hello", true, {a:1}];
console.log(mixed);         // [10,"Hello",true,{a:1}]
// length
console.log(arr.length);    // 4
// push (add end)
arr.push(5);
console.log(arr);           // [1,2,3,4,5]
// unshift (add start)
arr.unshift(0);
console.log(arr);           // [0,1,2,3,4,5]
// pop (remove end)
arr.pop();
console.log(arr);           // [0,1,2,3,4]
// shift (remove start)
arr.shift();
console.log(arr);           // [1,2,3,4]
// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);      // 1 2 3 4
}
// for...of
for (let value of arr) {
  console.log(value);       // 1 2 3 4
}
// forEach
arr.forEach(v => console.log(v));  // 1 2 3 4
// map (double values)
let doubled = arr.map(n => n * 2);
console.log(doubled);       // [2,4,6,8]
// filter (even numbers)
let even = arr.filter(n => n % 2 === 0);
console.log(even);          // [2,4]
// find (first >2)
let found = arr.find(n => n > 2);
console.log(found);         // 3
// includes
console.log(arr.includes(2));  // true
// dynamic index
arr[6] = 10;
console.log(arr);           // [1,2,3,4, empty, empty, 10]
console.log(arr.length);    // 7