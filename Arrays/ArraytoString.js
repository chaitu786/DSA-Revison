
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(' ').map(Number)
    arrtostr(N,arr)
}
function arrtostr(N,arr){
    for(let i=0;i<N;i++){
        if(arr[i]<0){
            arr[i]=0
        }
    }
    console.log(arr.join(''));
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  2 -4 6 8 -9`);
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