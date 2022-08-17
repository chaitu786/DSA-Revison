
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    let min=Infinity;
    let max=-Infinity
    for(let i=0;i<N;i++){
        if(arr[i]<min){
            min=arr[i]
        }
       else if(arr[i]>max){
        max=arr[i]
       }
    }
    console.log(min,max);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`8
  -8 -6 8 15 0 2 5 -25`);
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