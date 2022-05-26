
function runProgram(input){
    input=input.trim().split("\n")
    let s1=input[0].trim()
    let s2=input[1].trim()
    // console.log(s1,s2);
    let dp=Array(s1.length+1).fill(0)
    for(i=0;i<dp.length;i++){
        dp[i]=Array(s2.length+1).fill(0)
    }
    // console.log(dp);
    for(i=1;i<s1.length+1;i++){
        for(j=1;j<s2.length+1;j++){
            if(s1[i-1]===s2[j-1]){
                dp[i][j]=1+dp[i-1][j-1]
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
            }
        }
    }
    console.log(dp[s1.length][s2.length])
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
  AEDFHR
ABCDGH`);
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