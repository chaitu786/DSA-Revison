
function runProgram(input){
    input=input.trim().split("\n")
    let n=+input[0]
    let dp=[]
    for(i=0;i<=n;i++){
        dp.push(-1)
    }
    console.log(nWays(n,dp));
}
const nWays=(n,dp)=>{
    if(n==0){
        return dp[n]=1
    }
    if(n<0){
        return dp[n]=0
    }
    if(dp[n]!=-1){
        return dp[n]
    }
    return dp[n]=nWays(n-1,dp)+nWays(n-3,dp)+nWays(n-4,dp)
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