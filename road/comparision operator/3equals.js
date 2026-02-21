// same type comparison
console.log(5 === 5);              // true
console.log("hi" === "hi");        // true
console.log(true === true);        // true
// number & string (no coercion)
console.log(5 === "5");            // false
// boolean & number
console.log(true === 1);           // false
console.log(false === 0);          // false
// null & undefined
console.log(null === undefined);   // false
// empty string & 0
console.log("" === 0);             // false
// tricky cases
console.log("0" === 0);            // false
console.log(" " === 0);            // false
console.log([] === 0);             // false
console.log([] === "");            // false
console.log([1] === 1);            // false
// false cases (different value)
console.log(5 === 6);              // false
console.log("5" === "6");          // false
// object comparison (reference check)
let a = {};
let b = {};
console.log(a === b);              // false
// same reference object
let c = {};
let d = c;
console.log(c === d);              // true