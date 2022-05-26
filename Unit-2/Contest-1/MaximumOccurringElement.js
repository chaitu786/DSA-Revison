
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].split(" ").map(Number)
   var max=-Infinity
    for(i=0;i<N;i++){
        var count=0
        for(j=0;j<N;j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        if(count>max){
            max=count
            var ans=arr[i]
        }
    }
    console.log(ans)
    
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
  5
0 2 0 6 9`);
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