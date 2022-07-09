
function runProgram(input){
    input=input.trim().split("\n")
    let arr=input[0].split(" ").map(Number)
    let sum=0
    let N=arr.length+1
    let actual_Sum=(N*((N+1)/2))
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let num=actual_Sum-sum
    console.log(num);
    
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