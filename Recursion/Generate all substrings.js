
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[1].trim()
    let arr=input[2].trim()
    generateSubStrings(N,arr)
    // console.log(N,arr);
}
function generateSubStrings(N,arr){
    // tc-On^2
     for(let i=0;i<arr.length;i++){
        let substr=""
        for(let j=i;j<+N;j++){
            substr+=arr[j]
            console.log(substr)
        }
    }
    // tc-On^3
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<=N;j++){
    //         console.log(arr.substr(i,j));
    //     }
    // }

    
   
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  4 
  aman`);
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