function rotateleft(a){
    if(a.length<0){
        return a;
    }
    let element1=a[0];
    let remaining =a.slice(1);

    return[...remaining,element1];
}

const a=[1,2,3,4,5]
const result=rotateleft(a);
console.log("The original array is "+a)
console.log("The left rotate of the first array element is: "+result);