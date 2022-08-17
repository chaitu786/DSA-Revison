let arr=[1,1,5,4,3,2,3,4,5,1]
let ans=[]
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            if(!ans.includes(arr[i])){
                ans.push(arr[i])
            }
        }
    }
}
console.log(ans);
// let obj={}
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]+=1
//     }
//     else{
//         obj[arr[i]]=1
//     }
// }
// let bag=""
// for(let key in obj){
//     if(obj[key]>1){
//         bag+=key+" "
//     }
// }
// console.log(bag);
