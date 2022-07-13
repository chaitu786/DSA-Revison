function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
    let tc=+input[2]
    let line=3
    for(let i=0;i<tc;i++){
        let K=+input[line++]
        console.log(shopAndSoap(N,arr,K));
    }
}
function shopAndSoap(N,arr,K){
    let left=0
    let right=N-1
    let count=0
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]<K){
            count=mid+1
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return (count);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  1 4 10 5 6
  4
  2
  3
  5
  11`);
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