
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    Rotate(N,arr)
}
function Rotate(n,arr){
    // let rotatedelem=arr[n-1]
    // for(let i=n-1;i>0;i--){
    //     arr[i]=arr[i-1]
    // }
    // arr[0]=rotatedelem
    // console.log(arr.join(" "))

    // method-2
    let i=0
    let j=n-1
    while(i!=j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
    }
    console.log(arr.join(" "))
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  1 2 3 4 5`);
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