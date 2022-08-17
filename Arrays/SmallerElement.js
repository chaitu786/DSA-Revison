let arr=[1,2,10,9,7,6,4,4,1]
console.log(-1);
// for(let i=1;i<arr.length;i++){
//     let min=-1
//     for(let j=i-1;j>=0;j--){
//         if(arr[i]>arr[j]){
//             // console.log(arr[j]);
//             min=arr[j]
//             break
//         }
//     }
//     console.log(min);
// }

let stack=[]
let ans=[]
for(let i=1;i<arr.length;i++){
    // while(arr[i]>=stack[stack.length-1]){
    //     stack.pop()
    // }
    // if(stack.length===0){
    //     ans[i]=-1
    // }
    // else{
    //     ans[i]=stack[stack.length-1]
    // }
    // stack.push(arr[i])
}
console.log(ans.join(" "));
