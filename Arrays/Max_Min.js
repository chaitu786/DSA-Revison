
function runProgram(input){
    input=input.trim().split("\n")
    let arr=input[0].trim().split(",").map(Number)
    // console.log(arr);
    let max=-Infinity
    let min=Infinity
    for(let i=0;i<arr.length;i++){
        // if(arr[i]>max){
        //     max=arr[i]
        // }
         if(arr[i]<min){
            mix=arr[i]
        }
    }
    console.log(max,min);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1000,100,-1000,1,100000`);
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