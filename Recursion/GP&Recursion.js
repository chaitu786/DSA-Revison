
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].split(" ").map(Number)
    console.log(gp(N,K).toFixed(4))
}
function gp(N,K){
    if(N==0){
        return 1
    }
    return 1/Math.pow(K,N)+ gp(N-1,K)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3 5`);
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