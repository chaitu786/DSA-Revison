let arr=[3, 0, 6, 2, 7]
let K=9
let N=5

// sol is in O(N^2)
// let count=0
// for(let i=0;i<N;i++){
//     for(let j=i+1;j<N;j++){
//         if((arr[i]+arr[j])==K){
//             count++
//             console.log(arr[i],arr[j]);
//         }
//     }
// }
// console.log(count);

// tc=O(N)+NlogN=>O(NLogN)
let left=0
let right=N-1
let count1=0
arr.sort()
while(left<right){
    if((arr[left]+arr[right])==K){
        count1++
        console.log(arr[left],arr[right]);
        left++
        right--
    }
    else if((arr[left]+arr[right])<K){
        left++
    }
    else{
        right--
    }
}

console.log(count1);

