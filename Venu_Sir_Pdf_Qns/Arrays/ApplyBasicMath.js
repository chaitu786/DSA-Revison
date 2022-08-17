let arr=[14, 7, 8, 2 ,4]
let max=Infinity
let index=-1
for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=0;j<arr.length;j++){
        if(i==j){
            continue
        }
        else{
            sum=sum+arr[j]
        }
    }
    if(sum%7==0 && max>arr[i]){
        max=arr[i]
        index=i
    }
}
console.log(index);