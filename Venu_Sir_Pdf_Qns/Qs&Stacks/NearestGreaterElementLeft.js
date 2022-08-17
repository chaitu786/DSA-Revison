let arr=[2,6,3,7,9,4,7,4,5]
function greaterElem(){
    let stack=[]
    let ans=[]
    for(let i=0;i<arr.length;i++){
        while(stack.length>0 && arr[i]>stack[stack.length-1]){
            stack.pop()
        }
        if(stack.length==0){
            ans.push(-1)
        }
        else{
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    console.log(ans);
}
greaterElem()

let out=[-1]
for(let i=1;i<arr.length;i++){
    let res=-1
    for(let j=i-1;j>=0;j--){
        if(arr[i]<arr[j]){
            res=arr[j]
            break
        }
    }
    out.push(res)
}
console.log(out);
