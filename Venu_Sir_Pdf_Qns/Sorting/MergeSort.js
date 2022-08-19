let arr=[30,50,7,80,56,4]
let left=0
let right=arr.length-1
MergeSort(arr,left,right)
console.log(arr.join(" "));
function MergeSort(arr,left,right){
    if(left>=right){
        return
    }
   let middle=Math.floor((left+right)/2)
   MergeSort(arr,left,middle)
   MergeSort(arr,middle+1,right)
   MergeArr(arr,left,right,middle)
}
function MergeArr(arr,left,right,middle){
  let arr1=[]
  let arr2=[]
  let i=0
  let j=0
  let curr=left
  for(let a=left;a<=middle;a++){
    arr1.push(arr[a])
  }
  for(let b=middle+1;b<=right;b++){
    arr2.push(arr[b])
  }

  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j]){
        arr[curr]=arr1[i]
        i++
    }
    else{
        arr[curr]=arr2[j]
        j++
    }
    curr++
  }
  while(i<arr1.length){
    arr[curr]=arr1[i]
        i++
        curr++
  }
  while(j<arr2.length){
    arr[curr]=arr2[j]
        j++
        curr++
  }
}