let a=["HTML","CSS","JS"]
console.log(a.length)

console.log("********* To String Method ***********");
let s=a.toString();
console.log(s)

console.log("****************** Array Join Method *************")
let b=["HTML","CSS","JS","React","Java"]
console.log(b.join("|"))

let emp={
    name:"Abhi",
    salary:"50000",
    department:"Software"
}
console.log(delete emp.salary)
console.log(emp)

console.log("*********** Array Concat ************")
let a1=[11,12,13]
let a2=[14,15,16]
let a3=[17]
let newarr=a1.concat(a2,a3)
console.log(newarr)

console.log("************ Array Flat ************")
const a4=[[1,2,3],4,[5,6,7,8],9,10,[11,12,13]]
const a5=a4.flat(Infinity)
console.log(a5)

console.log("************ Array Push method ************")
const a6=[10,20,30,40]
a6.push(50,60);
a6.push(70)
console.log(a6)

console.log("************ Array unshift method ************")
let c=[20,30,40]
c.unshift(10,20)
console.log(c)

console.log("************ Array Pop method ************")
