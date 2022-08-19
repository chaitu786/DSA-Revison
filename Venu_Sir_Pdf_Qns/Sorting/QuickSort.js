let arr=[30,50,7,80,56,4]
let left=0
let right=arr.length-1
function QuickSort(arr,left,right){
   if(left>=right){
     return 
   }
   let index=Partition(arr,left,right)
   QuickSort(arr,index+1,right)
   QuickSort(arr,left,index-1)
}

function Partition(arr,left,right){
    let i=left;
    let j=right;
    let pivot=arr[left]

    while(i<j){
        while(arr[i]<=pivot && i<right){
            i++
        }
        while(arr[j]>pivot && j>left){
            j--
        }
        if(i<j){
            swap(arr,i,j)
        }
    }
    swap(arr,left,j)
    return j
}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
QuickSort(arr,left,right)
console.log(arr.join(" "));