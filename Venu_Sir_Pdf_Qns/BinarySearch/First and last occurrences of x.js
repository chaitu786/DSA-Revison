// method one TC-O(N)
let arr=[1,3, 5, 5, 5, 5, 67, 123, 125]
let n=9
let x=5
let left=-1
let right=-1
for(let i=0;i<n;i++){
    if(x!=arr[i]){
        continue
    }
    if(left==-1){
       left=i
    }
    right=i
}
console.log(left,right)

// method2-Binary search.