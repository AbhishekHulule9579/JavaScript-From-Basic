function reorderArray(arr,index){
    let paired=[];
    for(let i=0;i<arr.length;i++){
        paired.push([index[i],arr[i]]);
    }
    paired.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<arr.length;i++){
        arr[i]=paired[i][1];
    }
}


let arr=[10,12,9,11];
let index=[1,3,0,2];
reorderArray(arr,index);
console.log(arr.join(" "))