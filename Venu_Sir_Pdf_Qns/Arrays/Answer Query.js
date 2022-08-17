
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    let tc=+input[2].trim()
    let line=3
    for(let i=0;i<tc;i++){
        let arrs=input[line++].trim().split(" ").map(Number)
        ans(arrs,N,arr,tc)
    }
}
function ans(arrs,N,arr,tc){
    let arr12=[]
    let count=0
    let x=0
    for(let i=0;i<N;i++){
        if(i>=arrs[0]-1 && i<arrs[1]){
            if(arr[i]>=arrs[2] && arr[i]<=arrs[3]){
                count++
            }
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  1 2 3 4 5
  3
  1 3 2 4
  2 4 1 2
  3 5 1 2`);
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