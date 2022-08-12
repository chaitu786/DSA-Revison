let N=4
let left=0
let right=N-1
let res
while(left<right){
    let mid=Math.floor((left+right)/2)
    if(mid*mid==N){
        console.log(mid);
        break
    }
    if(mid*mid<N){
        left=mid+1
        res=mid
    }
    else{
        right=mid-1
    }
}
// console.log(res);