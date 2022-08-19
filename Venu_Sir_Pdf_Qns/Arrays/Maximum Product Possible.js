
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        maxProd(N,arr)
    }
}
function maxProd(N,arr){
    let max=-Infinity
    for(let i=0;i<N;i++){
        let prod=0
        for(let j=0;j<N;j++){
            if(i!=j){
                if(arr[j]!==0){
                    prod=arr[i]*arr[j]
                }
            }
        }
        if(prod>max){
            max=prod
        }
    }
    console.log(max);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  6 
  1 0 7 2 4 0
  5
  1 2 3 4 5
  2
  0 0`);
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