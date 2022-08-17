let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0
for(let i=0;i<arr.length;i++){
    if(isPrime(arr[i])){
        sum=sum+arr[i]
    }
}
console.log(sum);
function isPrime(n){
    // let count=0
    // for(let i=1;i<=n;i++){
    //     if(n%i==0){
    //         count++
    //     }
    // }
    // if(count==2){
    //     return true
    // }
    // else{
    //     return false
    // }

    if(n==1){
        return false
    }
    for(let i=2;i<=Math.ceil(n/2);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}