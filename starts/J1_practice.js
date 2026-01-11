let a=[10,20,30,40];
let last=a[a.length-1];
console.log(last);
a[1]=99;
console.log(a)

let b=["HTML","CSS","JS","Java","Python","AWS"];
b.push("Node.js")
b.unshift("Web development")
console.log(b)

console.log("Array Length ")
let len=b.length;
console.log(len)

console.log("THe original array is --->"+b)
let lst=b.pop();
console.log("The array after the removing the last element --->"+b)
let fst=b.shift();
console.log("The array after removing first element ---> "+b)
b.splice(1,2);
console.log("After removing the 2 element from index 1 --->"+ b)


console.log("-------------- C -------------")
let c=["HTML","CSS","JS"]
c.length=7;
console.log("*** After increasing the length of the array *-->"+c);
c.length=2;
console.log("****After decreasing the size of the array **----> "+c)

console.log("***********iterating to the each element **********")
for(let i=0;i<b.length;i++){
    console.log(b[i]);
}

console.log("************ Array Concatentation **************")
let d = ["HTML", "CSS", "JS", "React"];
let e = ["Node.js", "Expess.js"];

let concatArray=d.concat(e);
console.log(concatArray);

console.log("********* Conversion of array to String ******")
let f = ["HTML", "CSS", "JS", "React"];
console.log(f.toString());

console.log("*********** Check Type of an Array ***********")
console.log(f)
console.log(typeof f)