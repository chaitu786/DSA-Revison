let arr=[2, -2, 0, 3, 4]
let N=5
let K=5
let left=0;
let right=N-1
let mid=(left+right)/2
while(left<right){
    if(arr[mid]==K){
        console.log(K,"Is there")
        break
    }
    else if(arr[mid]<K){
        mid++
    }
    else{
        mid--
    }
    console.log("No There");
    break
}