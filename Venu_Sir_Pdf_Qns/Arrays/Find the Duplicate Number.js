let arr  = [1,3,,2,2,1,5]
let N=arr.length
// let obj={}
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]+=1
//     }
//     else{
//         obj[arr[i]]=1
//     }
// }
// console.log(obj);
// let res=-1
// for(let key in obj){
//     if(obj[key]>1){
//         res=key
//         console.log(key);
//     }
// }
let duplicate=[]
for(let i=0;i<N-1;i++){
    for(let j=i+1;j<N;j++){
        if(arr[i]==arr[j]){
            duplicate.push(arr[i])
        }
    }
}
console.log(duplicate);
