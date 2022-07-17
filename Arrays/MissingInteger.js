
function runProgram(input){
    input=input.trim().split("\n")
    let arr=input[0].trim().split(' ').map(Number)
    let N=arr.length+1
    let natural_sum=N*((N+1)/2)
    let arrSum=0
    for(let i=0;i<arr.length;i++){
        arrSum=arrSum+arr[i]
    }
    console.log(natural_sum-arrSum);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4 5 1 3`);
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