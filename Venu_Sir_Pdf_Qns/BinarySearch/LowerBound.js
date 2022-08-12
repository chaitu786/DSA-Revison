
function runProgram(input){
    input=input.trim().split("\n")
    let[N,K]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    console.log(LowerNound(N,K,arr))
}
function LowerNound(N,K,arr){
    let left=0
    let right=N-1
    let res=-1
    while(left<=right){
        let left=0
        let right=N-1
        let res=-1
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]==K){
                res=mid
                right=mid-1;
            }else if(arr[mid]<K){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return res
    }
    return res
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5 2
  1 1 2 2 5`);
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