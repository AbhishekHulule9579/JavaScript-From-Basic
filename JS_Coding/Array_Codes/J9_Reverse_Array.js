const a=[1,2,3,4,5,6];
for(let i=0;i<Math.floor(a.length/2);i++){
    let temp=a[i];
    a[i]=a[a.length-i-1]
    a[a.length-i-1]=temp;
}
console.log(a);