// same type comparison
console.log(5 == 5);              // true
console.log("hi" == "hi");        // true
console.log(true == true);        // true
// number & string (string → number)
console.log(5 == "5");            // true
// boolean & number (true→1, false→0)
console.log(true == 1);           // true
console.log(false == 0);          // true
// null & undefined
console.log(null == undefined);   // true
// empty string & 0
console.log("" == 0);             // true
// tricky cases
console.log("0" == 0);            // true
console.log(" " == 0);            // true
console.log([] == 0);             // true
console.log([] == "");            // true
console.log([1] == 1);            // true
// false cases
console.log(5 == 6);              // false
console.log("5" == "6");          // false
console.log(true == 2);           // false
// object comparison (different reference)
let a = {};
let b = {};
console.log(a == b);              // false
