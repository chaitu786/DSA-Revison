function runProgram(input){
    input=input.trim().split("\n")
    let n=+input[0].trim()
    let ar=[]
    let line=1
    for(let i=0;i<n;i++){
        arr.push(input[line++].trim().split(' ').map(Number))
    }
    Pattern(n,ar)
}
function Pattern(n,arr){
    let bag=""
    for(let i=n-1;i>=0;i--){
        bag=bag+arr[i][0]+" "
    }
    for(let i=1;i<n;i++){
        bag+=arr[i][i]+" "
    }
    for(let i=n-2;i>=0;i--){
        bag=bag+arr[i][n-1]+" "
    }
    console.log(bag);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  1 2 3
  4 5 6
  7 8 9`);
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