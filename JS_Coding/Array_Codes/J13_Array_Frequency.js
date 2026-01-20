function sortByFrequency(arr){
    const freqMap={};
    arr.forEach(num=>{
        freqMap[num]=(freqMap[num]||0)+1;
    });
    return arr.sort((a,b)=>{
        if(freqMap[a]!==freqMap[b]){
            return freqMap[a]-freqMap[b];
        }
        else{
            return a-b;
        }
    });
}

const arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 8];
console.log("The array sorted according to the frequency: "+ sortByFrequency(arr));