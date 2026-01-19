function checkSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}


const arr=[1,2,3,4,5,6]
const arr2=[6,5,4,3,2,1]
console.log(checkSorted(arr))
console.log(checkSorted(arr2))