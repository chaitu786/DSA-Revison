
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    console.log(nWays(N));
    
}
function nWays(N){
    if(N==0){
        return 1
    }
    if(N<0){
        return 0
    }
    return nWays(N-1)+nWays(N-2)+nWays(N-3)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4`);
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