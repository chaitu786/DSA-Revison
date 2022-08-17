let arr=[1,2,5,6,8,9,7].sort((a,b)=>a-b)
let K=9

let left=0
let right=arr.length-1
let mid=Math.floor((left+right)/2)

while(left<right){
    if(arr[mid]===K){
        console.log("Its There");
        break
    }
    else if(arr[mid]<K){
        mid++
    }
    else{
        mid--
    }
}
