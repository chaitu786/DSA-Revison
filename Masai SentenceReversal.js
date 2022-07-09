
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].split(' ')
    let reverseStr=""
    for(let i=str.length-1;i>=0;i--){
        reverseStr=reverseStr+str[i]+" "
    }
    console.log(reverseStr);
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`A Transformation in education`);
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