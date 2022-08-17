
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
    let K=+input[2].trim()
    Kthelem(N,arr,K)
}
function Kthelem(N,arr,K){
    console.log(arr[K-1])
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`6
  7 10 4 3 20 15
  3`);
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