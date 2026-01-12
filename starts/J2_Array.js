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
let d=[10,20,30,40,50]
d.pop()
console.log(d)

console.log("************ Array shift method ****************")
let d1=[10,20,30,40,50]
d1.shift();
console.log(d1)

console.log("******************* Array Splice ******************")
let d2=[10,20,30,40,50]
d2.splice(1,3)
console.log(d2)
d2.splice(2,4,5,67,8,9,3)
console.log(d2)

console.log("******************Array Map method ************")
let e=[4,9,16,25];
let sub=e.map(squart);
function squart(){
    return e.map(Math.sqrt);
}
console.log(sub);

console.log(" ******************* Array Filter Method ***************")
let f=[1,2,3,4,5,6];
let f1=f.filter((num)=>num>2);
console.log(f1)

console.log("*************** Array Reduce Method ************")
let g=[99,50,45,6,3,1];
let subb=g.reduce(geeks)
function geeks(tot,num){
    return tot-num;
}
console.log(subb)

console.log("***************Array Reduce Method *****************")
let h=[1,2,3,4,5,6,7,8,9]
h.reverse();
console.log(h)

console.log("************** Array values() method ************")
const k=["Apple","Moto","Blackberry","Samsung"];
const ress=k.values();
for(const value of ress){
    console.log(value)
}