
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    let ReverseArr=[]
    for(let i=N-1;i>=0;i--){
        ReverseArr.push(arr[i])
    }
    console.log(ReverseArr.join(" "));
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  12 34 11 9 18`);
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