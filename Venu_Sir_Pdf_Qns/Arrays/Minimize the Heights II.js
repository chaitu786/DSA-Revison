
function runProgram(input){
    input=input.trim().split("\n")
    let [K,N]=input[0].trim().split(" ").map(Number)
    let arr=input[0].trim().split(" ").map(Number)

    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2 4
  1 5 8 10`);
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