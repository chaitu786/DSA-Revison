
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        console.log(BinaryEquivalent(N) );
    }
}
function BinaryEquivalent(N) {
    if(N<=0){
        return ""
    }
    return BinaryEquivalent(Math.floor(N/2))+(N%2)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  15
  128`);
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