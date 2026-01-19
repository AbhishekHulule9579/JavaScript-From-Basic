const prompt = require('prompt-sync')();

function search(arr,x){
    const n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;

}

let arr=[2,4,1,13,99,52,74,65,11,6]

let x=prompt("Please enter the x to find: ")
 let result=search(arr,x);
(result==-1)
    ?console.log("Element is not present in array")
    :console.log("Element is present at the index: "+result);

