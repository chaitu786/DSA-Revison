
function runProgram(input){
    input=input.trim().split("\n")
    let bag=""
    let arr=input[0].trim().split(" ").map(Number)
    for(let i=arr.length-1;i>0;i--){
        bag=bag+arr[i]+" "
    }
    console.log(bag)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1 2 3 4 5 6`);
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