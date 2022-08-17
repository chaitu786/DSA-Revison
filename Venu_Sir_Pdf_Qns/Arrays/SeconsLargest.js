let arr=[10,11,1,2,3,4,5]
let n=7
let large=-Infinity
let secondLarge=-Infinity

// for(let i=0;i<n;i++){
//     if(arr[i]>large){
//         large=arr[i]
//     }
// }
// console.log(large);

// for(let i=0;i<n;i++){
//     if(arr[i]>secondLarge && arr[i]<large){
//         secondLarge=arr[i]
//     }
// }
// console.log(secondLarge);
arr.sort((a,b)=>a-b) //NLogN

// console.log(arr);

for(let i=0;i<arr.length;i++){
    if(i==arr.length-2){
        console.log(arr[i]);
        break
    }
}



