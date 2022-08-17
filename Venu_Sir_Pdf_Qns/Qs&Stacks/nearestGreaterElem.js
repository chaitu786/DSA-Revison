
function runProgram(input){
    // input=input.trim().split("\n")
    let arr=input.trim().split(" ").map(Number)
    Greater(arr)
}
function Greater(arr){

let stack=[]
let stack2=[]

let left_ans=[]
let right_ans=[]

let ans=[]

for(let i=0;i<arr.length;i++){
    while(stack.length>0 && arr[i]>=arr[stack[stack.length-1]]){
        stack.pop()
    }
    if(stack.length==0){
        left_ans.push(-1)
    }
    else{
        left_ans.push(stack[stack.length-1])
    }
    stack.push(i)
}

for(let i=arr.length-1;i>=0;i--){
    while(stack2.length>0 && arr[i]>=arr[stack2[stack2.length-1]]){
        stack2.pop()
    }
    if(stack2.length==0){
        right_ans.push(-1)
    }
    else{
        right_ans.push(stack2[stack2.length-1])
    }
    stack2.push(i)
}
right_ans=right_ans.reverse()
// console.log(left_ans+"\n"+ right_ans.reverse());
// 3 2 1 3 1
// -1,0,1,-1,3
// -1,3,3,-1,-1
console.log(arr,"inp");
for(let i=0;i<arr.length;i++){ //0 1
    if(left_ans[i]==right_ans[i]){ //true false
        ans.push(-1) //-1
    }
    else{
        if(left_ans[i]==-1){
            ans.push(arr[right_ans[i]])
        }
        else if(right_ans[i]==-1){
            ans.push(arr[left_ans[i]])
        }
        else{
            let left=Math.abs(i-left_ans[i]) //1
            // console.log(left);
            let right=Math.abs(i-right_ans[i]) //2

            if(left<=right){
                ans.push(arr[left_ans[i]])
            }
            else{
                ans.push(arr[right_ans[i]])
            }
        }
    }
}
console.log(left_ans,"le");
console.log(right_ans,"ri");
console.log(ans.join(" "),"ans");
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3 2 1 3 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}