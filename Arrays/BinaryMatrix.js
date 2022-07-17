
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let line=1
    let arr=[]
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim().split(" ").map(Number))
    }
    BinaryMatrix(N,K,arr)
}
function BinaryMatrix(N,K,arr){
    for(let i=0;i<N;i++){
        var bag=""
        for(let j=0;j<K;j++){
            if(arr[i][j]==0){
                arr[i][j]=1
                bag+=arr[i][j]+" "
            }
            else{
                arr[i][j]=0
                bag+=arr[i][j]+" "
            }
        }
        console.log(bag);
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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