
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let arr=[]
    for(let i=0;i<tc;i++){
      var N=+input[line++]
      for(let j=0;j<N;j++){
        arr.push(input[line++].trim().split(' '))
      }
      vertical(N,arr)
      horizontal(N,arr)
    }
   
}
function horizontal(N,arr){
  console.log(N,arr);
}
function vertical(N,arr){
  console.log(N,arr);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  4
  *.*.
  .*.*
  *.*.
  .*.*
  3
  .*.
  *.*
  .*.
  3
  ..*
  **.
  ..*`);
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