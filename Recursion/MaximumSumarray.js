
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        MaxSum(N,arr)
    }
    
}
function  MaxSum(N,arr){
    // console.log(N,arr);
    let sum=-Infinity
    let maxSum=-Infinity
    for(let i=0;i<N;i++){
        sum=Math.max(0,sum)
        sum=sum+arr[i]
        maxSum=Math.max(sum,maxSum)
    }
    console.log(maxSum);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  5
  1 2 0 4 5
  5
  3 -4 1 2 -1`);
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