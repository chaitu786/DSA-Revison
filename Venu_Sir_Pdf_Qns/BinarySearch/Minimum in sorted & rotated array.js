
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    console.log(Min(N,arr))
}
function Min(N,arr){
    let left=0
    let right=N-1
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]>arr[right]){
            left=mid+1
        }
        else if(arr[mid]==arr[right]){
            right--
        }
        else{
            right=mid
        }
    }
    return arr[right]
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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