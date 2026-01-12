
function largest(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }

    }
    return max;
}

const arr=[10,20,3,99,71,85]
console.log(largest(arr))