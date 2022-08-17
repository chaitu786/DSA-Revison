let N=4
let arr1=[4,5,7,7]
let arr2=[9,2,5,7]

// for(let i=0;i<N;i++){
//     for(let j=0;j<N;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }
// Tc=>O(N^2)

// let obj={}
// for(let i=0;i<N;i++){
//     if(!obj[arr1[i]]){
//         obj[arr1[i]]=1
//     }
// }
// for(let i=0;i<N;i++){
//     if(obj[arr2[i]]){
//         console.log(arr2[i]);
//     }
// }
// tc->O(N)
//sc ->O(N)

let left=0
let right=0
arr1.sort()
arr2.sort()
// [4,5,7,7]
// let arr2=[9,2,5,7]
// while(left<right){
//     if(arr1[left]==arr2[right]){//4==2-fasle 2->5==
//         console.log(arr1[left]);
//         left++
//         right++
//     }
//     else if(arr1[left]>arr2[right]){//4>2-->true
//         left++
//     }
//     else{
//         right++
//     }
// }
// console.log(arr1,arr2);
