let arr=[1,3,3]
let N=3
let repeatedNum=0
let obj={}
for(let i=0;i<N;i++){
    if(obj[arr[i]]){
        obj[arr[i]]+=1
        repeatedNum=arr[i]
    }
    else{
        obj[arr[i]]=1
    }
}
let size1=N+1
let Natural=size1*((size1+1)/2)

let sum=0
for(let i=0;i<N;i++){
    sum=sum+arr[i]
}
console.log(repeatedNum,Natural);