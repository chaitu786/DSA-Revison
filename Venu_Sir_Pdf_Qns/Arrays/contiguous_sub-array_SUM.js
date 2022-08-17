
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    // let max=arr[0]
    //     let curr=arr[0]
    //     for(let i=1;i<N;i++){
    //         curr=Math.max(arr[i],curr+arr[i])
    //         max=Math.max(max,curr)
    //     }
    //     console.log(max); 

    // method2
    let sum=-Infinity
    let curr=0

    for(let i=0;i<N;i++){
        curr+=arr[i]
        if(sum<curr){
            sum=curr
        }
        if(curr<0){
            curr=0
        }
    }
    console.log(sum)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  1 2 3 -5 -5`);
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