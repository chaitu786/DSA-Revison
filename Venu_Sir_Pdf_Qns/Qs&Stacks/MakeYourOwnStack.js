let arr=new Array

const Push=(data)=>{
    arr[arr.length]=data
}

const Pop=()=>{
    arr.length--
}
const Peek=()=>{
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr.length--
}

const UnShift=(num)=>{
    arr[arr.length]=arr[arr.length-1]
    for(let i=arr.length-2;i>0;i--){
        arr[i]=arr[i-1]
    }
    arr[0]=num
}

Push(1)
Push(2)
Push(2)
Push(2)
Pop()
Peek()
console.log(arr);
UnShift(10)
console.log(arr);
