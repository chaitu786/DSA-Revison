
function runProgram(input){
    input=input.trim().split("\n")
    let n=+input[0]
    console.log(fibo(n));
}
function fibo(n){
    let dp=[]
    dp[0]=0
    dp[1]=1
    for(i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
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