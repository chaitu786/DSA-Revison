
function runProgram(input){
    input=input.trim().split("\n")
    let[N,K]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    let left=0
    let right=N-1
    console.log(Search(N,K,arr,left,right));
}
function Search(N,K,arr,left,right){
    let mid=Math.floor((left+right)/2)
    if(left>right){
        return -1
    }
    if(arr[mid]==K){
        return mid
    }
    if(arr[left]<=arr[mid]){
        if(arr[left]<=K && arr[mid]>=K){
            return Search(N,K,arr,left,mid-1)
        }
        return Search(N,K,arr,mid+1,right)
    }
    else{
        if(arr[mid]<=K && arr[right]>=K){
            return Search(N,K,arr,mid+1,right)
        }
        return Search(N,K,arr,left,mid-1)
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5 1
  3 4 5 1 2`);
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