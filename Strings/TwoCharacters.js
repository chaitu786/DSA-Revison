function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].trim()
    TwoChar(str)
}
function TwoChar(str){
    for(let i=0;i<str.length;i++){
            
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`beabeefeab`);
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