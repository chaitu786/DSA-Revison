let arr=[4,5,6,7,0,1,2]
let K=0
let left=0
let right=arr.length-1
function SearchNum(arr,K,left,right){
    let mid=Math.floor((left+right)/2)
   if(left>right){
    return 1
   }
   if(arr[mid]==K){
    return mid
   }
   if(arr[left]<=arr[mid]){
    if(arr[left]<=K && arr[mid]>=K){
        return SearchNum(arr,K,left,mid-1)
    }
    return SearchNum(arr,K,mid+1,right)
   }
   else{
    if(arr[mid]<=K && arr[right]>=K){
        return SearchNum(arr,K,mid+1,right) 
    }
    return SearchNum(arr,K,left,mid-1)
   }
}
console.log(SearchNum(arr,K,left,right));