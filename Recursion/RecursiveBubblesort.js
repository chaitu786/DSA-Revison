
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    console.log(Sort(N,arr));
}
function Sort(N,arr){
    if(N==0){
        return arr.join(" ")
    }
    for(let i=0;i<N;i++){
        if(arr[i]>arr[i+1]){
            let swap=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=swap
        }
    }
    return Sort(N-1,arr)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  3 5 0 9 8`);
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