function removeDuplicate(arr){
    const s=new Set();
    let idx=0;
    for(let i=0;i<arr.length;i++){
        if(!s.has(arr[i])){
            s.add(arr[i]);
            arr[idx++]=arr[i];
        }
    }
    return idx;
}

const arr=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
const res=removeDuplicate(arr);
console.log(arr.slice(0,res).join(' '))