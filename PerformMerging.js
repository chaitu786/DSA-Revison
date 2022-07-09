
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr1=input[1].trim().split(" ").map(Number)
    let arr2=input[2].trim().split(" ").map(Number)
    let left=0
    let right=0
    let merge=[]

    while(left<N&&right<N){
        if(arr1[left]<arr2[right]){
            merge.push(arr1[left++])
        }
        else{
            merge.push(arr2[right++])
        }
    }
    while(left<N){
        merge.push(arr1[left++])
    }
    while(right<N){
        merge.push(arr2[right++])
    }
    console.log(merge.join(" "));
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4
  1 5 7 9
  2 4 6 8`);
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