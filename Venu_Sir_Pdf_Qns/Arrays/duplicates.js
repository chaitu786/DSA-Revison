let arr=[1,2,2,3,3,4,4,5,6,7,7,8,8,9,9]
let N=arr.length

let index=0
let bag=[]
for(let i=0;i<N;i++){
    let count=0
    for(let j=0;j<N;j++){
        if(arr[i]!=arr[j]){
           if(!bag.includes(arr[i])){
            bag.push(arr[i])
           }
        }
    }
}
console.log(bag);
for(let i=0;i<N;i++){
    let j=i
    while(j<N&&arr[i]==arr[j]){
        j++
    }
    arr[index]=arr[i]
    index++
    i=j-1
}
for(let i=index;i<N;i++){
    arr[i]="_"
}
console.log(arr);
let ans=[]
for(let i=0;i<N;i++){
    if(!ans.includes(arr[i])){
        ans.push(arr[i])
    }
}
console.log(ans);
