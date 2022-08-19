let arr=[1, 2, 3, 4, 5]
let N=5
let x=arr[N-1]
for(let i=N-1;i>=0;i--){
    arr[i]=arr[i-1]
}
arr[0]=x
console.log(arr);

