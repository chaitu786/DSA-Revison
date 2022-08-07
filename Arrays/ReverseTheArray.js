
function runProgram(input){
    input=input.trim().split("\n")
    let arr=input[0].split("").map(Number)
    let arr1=[]
    for(let i=arr.length-1;i>=0;i--){
        arr1.push(arr[i])
    }
    console.log(arr1.join(" "));
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4521`);
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