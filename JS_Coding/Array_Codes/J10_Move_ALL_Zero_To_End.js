function pushZeroToEnd(arr,n){
    let count=0;
    for(let i=0;i<n;i++)
        if(arr[i]!=0)
            arr[count++]=arr[i];
        
        while(count<n)
            arr[count++]=0
    
}

let arr=[1,2,0,3,0,4,0,5,0,6,8,7,0,0];
let n=arr.length;

pushZeroToEnd(arr,n);
console.log("After pushing all zeros to the end of the array: ");
console.log(arr.join(" "));