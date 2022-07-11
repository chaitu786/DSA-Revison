
function runProgram(input){
    input=input.trim().split("\n")
    let [x,n]=input[0].split(" ").map(Number)
    console.log(et(x,n).toFixed(4));
}
function et(x,n){
    if(n==0){
        return 1
    }
   return Math.pow(x,n)/factorial(n)+et(x,n-1)
}
function factorial(n){
    if(n==0){
        return 1
    }
    return n*factorial(n-1)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4 2`);
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