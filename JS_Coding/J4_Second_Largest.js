
function secondLargest(arr){
    let n=arr.length;
    let largest =-1;
    let secondlarge=-1;
    for(let i=0;i<n;i++){
        if(arr[i]>largest)
            largest=arr[i];
    }
        for(let i=0;i<n;i++){
            if(arr[i]>secondlarge && arr[i]!==largest){
                secondlarge=arr[i];
            }
        }
    return secondLarge;
}

let arr=[30,50,1,2,99,88,74,98];
console.log(secondLargest(arr));