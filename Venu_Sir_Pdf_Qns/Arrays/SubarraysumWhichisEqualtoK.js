let arr=[10, 2, -2, -20, 10]
let N=arr.length
let count=0
let K=-10

for(let i=0;i<N;i++){
    let sum=0
    for(let j=i;j<N;j++){
        sum+=arr[j]
        if(sum==K){
            count++
        }
    }
    
}
console.log(count);

let map={}
let sum=0
let res=0
map[0]=1

for(let i=0;i<N;i++){
    sum=sum+arr[i]
    res+=(map[sum-K]||0)
    map[sum]=(map[sum] || 0)+1
}
console.log(res);