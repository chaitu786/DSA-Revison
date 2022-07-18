
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    nobbyExam(N,K,arr)
}
function nobbyExam(N,K,arr){
    let solvedQns=0
    let skippedQns=0
    for(let i=0;i<N;i++){
        if(arr[i]<=K && skippedQns<2){
            solvedQns++
        }
        else{
            skippedQns++
        }
    }
    console.log(solvedQns);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`7 6
  4 3 7 6 7 2 2`);
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