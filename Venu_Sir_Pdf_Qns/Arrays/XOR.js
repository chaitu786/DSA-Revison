
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    console.log(All_Xor(N,arr));
}
function All_Xor(N,arr){
    let xor=0
    for(let i=0;i<N;i++){
        xor |= arr[i];
    }
    let res=xor*Math.pow(2,N-1)
        return res
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  1 3`);
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