
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let [N,K]=input[line++].trim().split(" ").map(Number)
        let arr=input[line++].trim().split(" ").map(Number)
        TwoSum(N,K,arr)
    }
}
function TwoSum(N,K,arr){
    let left=0
    let right=N-1
    let count=0
    while(left<right){
        let sum=0
        sum=arr[left]+arr[right]
        if(sum<K){
            left++
        }
        else if(sum>K){
            right--
        }
        else{
            console.log(left,right)
            count++
            break
        }
    }
    if(count==0){
        console.log(-1,-1);
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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