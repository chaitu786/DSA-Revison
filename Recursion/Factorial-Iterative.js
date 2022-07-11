
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    console.log(factorial(N));
}
function factorial(N){
    let ans=1
    for(let i=2;i<=N;i++){
        ans=ans*i
    }
    return ans
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5`);
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