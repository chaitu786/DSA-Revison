let arr=[1,1,2]
let N=arr.length
let k=0

for(let i=0;i<N;i++){
    let j=i
    while(j<N && arr[i]==arr[j]){
        j++
    }
    arr[k]=arr[i]
    k++
    i=j-1
}
console.log(arr);    
for(let i=k;i<N;i++){
    // for(let j=i+1;j<N;j++){
        // if(arr[i]==arr[j]){
        //     arr[j]="_"
        // }
    // }
    arr[i]="_"
}
console.log(arr);
return (arr.join(" "));