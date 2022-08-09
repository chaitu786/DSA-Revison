
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        let arr=input[line++].trim().split(" ").map(Number)
        SolveFinacial(N,arr)
    }
}
const SolveFinacial=(N,arr)=>{
    console.log(N,arr);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  6
  100 60 70 65 80 85`);
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