// method one TC-O(N)
let arr=[1, 3, 5, 5, 5, 5, 7, 123, 125]
let n=9
let x=5
// let left=-1
// let right=-1
// for(let i=0;i<n;i++){
//     if(x!=arr[i]){
//         continue
//     }
//     if(left==-1){
//        left=i
//     }
//     right=i
// }
// console.log(left,right)

// method2-Binary search.

// Tc-LogN
console.log(first(arr,x,n));
function first(arr,x,n){
    let left=0,right=n-1
    let res=0
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]<x){
            left=mid+1
        }
        else if(arr[mid]>x){
            right=mid-1
        }
        else{
            res=mid
            right=mid-1
        }
    }
    return res
}
console.log(second(arr,x,n));
function second(arr,x,n){
    let res=0
    let left=0,right=n-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]<x){
            left=mid+1
        }
        else if(arr[mid]>x){
            right=mid-1
        }
        else{
            res=mid
            left=mid+1
        }
    }
    return res
}