const arr1 = new Int8Array(4);
console.log(arr1);   // [0,0,0,0]

const arr2 = new Int8Array([10, 20, 30]);
console.log(arr2);   // [10,20,30]

const arr3 = new Int16Array(3);
arr3[0] = 100;
arr3[1] = 200;
console.log(arr3[0]);  // 100
console.log(arr3);     

const arr4 = new Int8Array(2);
arr4[0] = 5;
arr4[1] = 10;
arr4[2] = 20;   // ignored
console.log(arr4);  // [5,10]

const arr5 = new Int8Array([1,2,3,4]);
arr5.forEach(v => console.log(v));

const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
view[0] = 100;
console.log(view[0]);  // 100
console.log(view);