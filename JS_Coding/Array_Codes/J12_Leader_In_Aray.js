function printleader(arr,n){
    let max_from_right=arr[n-1];
    console.log(max_from_right);
    for(let i=n-2;i>=0;i--){
        if(max_from_right<arr[i]){
            max_from_right=arr[i];
            console.log(arr[i]+" ");
        }
    }
}



const arr=[16,17,4,3,5,2];
let n=arr.length;
printleader(arr,n);





/*
Write a program to print all the LEADERS in the array. 
An element is leader if it is greater than all the elements to its right side.
 And the rightmost element is always a leader. 
For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2. 
*/