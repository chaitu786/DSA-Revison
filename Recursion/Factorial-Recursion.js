
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    console.log(factorial(N));
}
const factorial=(N)=>{
    if(N==0){
        return 1
    }
    return N*factorial(N-1)
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