
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let arr =input[1].trim().split(" ").map(Number)
    TakeOutmax(N,K,arr)
}
function TakeOutmax(N,K,arr){
  let sum=0
  for(let i=0;i<K;i++){
    sum=sum+arr[i]
  }
  let sumMax=sum
  for(let i=K;i<N;i++){
    sumMax+=arr[i]-arr[i-K]
    sum=Math.max(sum,sumMax)
  }
  console.log(sum);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`10 3
  -1 -1 -2 1 -2 4 1 9 3 9`);
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