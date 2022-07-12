
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[1].trim()
    console.log(Santosh_Profit(N));
}
function Santosh_Profit(N){
    if(N==0){
        return 1
    }
    if(N<0){
        return 0
    }
    return Santosh_Profit(N-4)+Santosh_Profit(N-8)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  12`);
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