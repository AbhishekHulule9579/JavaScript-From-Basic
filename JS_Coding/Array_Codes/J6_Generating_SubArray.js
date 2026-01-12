function subArray(arr){
    const n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let subarr=[];
            for(let k=i;k<=j;k++){
                subarr.push(arr[k]);
            }
            console.log(subarr.join(" "));
        }
    }
}

const arr=[1,2,3,4,5]
console.log("All subArray of the Array is as follows :")
subArray(arr);