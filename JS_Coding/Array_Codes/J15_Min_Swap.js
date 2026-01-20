function minswap(arr){
    let temp=[...arr].sort((a,b)=>a-b);
    let pos=new Map();
    for(let i=0;i<arr.length;i++){
        pos.set(arr[i],i);
    }
    let swaps=0;
    for (let i = 0; i < arr.length; i++) {
        if (temp[i] !== arr[i]) {

            // Index of the element that should be at index i.
            let ind = pos.get(temp[i]);
            [arr[i], arr[ind]] = [arr[ind], arr[i]];

            // Update the indices in the map
            pos.set(arr[i], i);
            pos.set(arr[ind], ind);

            swaps++;
        }
    }
    return swaps;
}

const arr=[1,2,3,4,6,5]
console.log(minswap(arr));
