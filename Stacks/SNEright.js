
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    sneRight(N,arr)
}
function sneRight(N,arr){
    // console.log(N,arr);
    let stack=new Array(N).fill(0)
    // console.log(stack);
    let left=[]
    left[0]=-1
    for(let i=1;i<N;i++){
        while(stack.length>0&& arr[i]<arr[stack.length-1]){
            stack.pop()
        }
        if(stack.length==0){
            left[i]=-1
        }
        else{
            left[i]=stack.length-1;
        }
        stack.push(i)
    }
    let count=0
    for(let i=0;i<stack.length;i++){
        if(stack[i]!=0){count++}
    }
    console.log(left)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  4 2 1 3 7`);
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