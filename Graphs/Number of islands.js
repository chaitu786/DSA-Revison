
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let line=1
    let arr=[]
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim().split(" "))
    }
    console.log(NoOfIce(N,arr,K));
}
function NoOfIce(N,arr,K){
    // console.log(arr);
    let count=0
    for(let i = 0; i < N; i++){
        for(let j = 0; j < K; j++){
            if(arr[i][j] == '1'){
                count++;
                CountLanss(arr,i,j,N,K);
            }
        }
    
    }
    return count
}
function CountLanss(arr,i,j,N,K){
    if(i < 0 || i >= N || j < 0 || j >= K || arr[i][j] == '0'){
        return 
    }   
    arr[i][j]=0
    CountLanss(arr,i+1,j,N,K)
    CountLanss(arr,i-1,j,N,K)
    CountLanss(arr,i,j+1,N,K)
    CountLanss(arr,i,j-1,N,K)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4 5
  1 1 0 0 0
  1 1 0 0 0
  0 0 1 0 0
  0 0 0 1 1`);
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