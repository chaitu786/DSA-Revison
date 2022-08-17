let arr=[-1,1,5,6,-7,-8,3,4,-9,-2,2,4]

// let j=0
// for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             if(i!=j){
//                 let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//             }
//             j++
//         }
// }
// console.log(arr.join(" "));

let left=0
let right=arr.length-1
while(left<right){
    if(arr[left]<0){
        left++
    }
    else if(arr[right]>0){
        right--
    }
    else{
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
    }
}
console.log(arr);