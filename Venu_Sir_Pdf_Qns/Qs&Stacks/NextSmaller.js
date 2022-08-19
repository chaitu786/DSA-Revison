let arr=[4,8,5,2,25]
let N=arr.length

// for(let i=0;i<N;i++){
//     let res=-1
//     for(let j=i+1;j<N;j++){
//         if(arr[i]>arr[j]){
//             res=arr[j]
//             break
//         }
//     }
//     console.log(res);
// }
;let stack=[]
let ans=[]
for(let i=N-1;i>=0;i--){
    while(stack.length>0 && arr[i]<=stack[stack.length-1]){
        stack.pop()
    }
    if(stack.length==0){
        ans.push(-1)
    }
    else{
        ans.push(stack[stack.length-1])
    }
    stack.push(arr[i])
}
console.log(ans.reverse().join(" "));