function reverseArray(arr){
    let n=arr.length;
    let temp=new Array(n);
    for(let i=0;i<n;i++){
        temp[i]=arr[n-i-1]
    }  
    for(let i=0;i<n;i++){
        arr[i]=temp[i]
    }
}

const arr=[1,2,3,4,5,6]
reverseArray(arr);
console.log(arr.join(" "))