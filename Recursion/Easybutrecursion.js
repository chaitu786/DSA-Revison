
function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
   var line=1;
   for(var i=0;i<tc;i++){
       var N=+input[line++]
       var str=input[line++].trim().split(" ").map(Number)
       var x=sum(N,str)
       console.log(x)
   }
}
function sum(N,str){
    if(N<=0){
        return 0
    }
    return sum(N-1,str)+str[N-1]
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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