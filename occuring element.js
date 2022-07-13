
function runProgram(input){
    input=input.trim().split("\n")
    // let arr=input[0].split(" ").map(Number)
    // let obj={}
    // for(let i=0;i<arr.length;i++){
    //     if(!obj[arr[i]]){
    //         obj[arr[i]]=1
    //     }
    //     else{
    //         obj[arr[i]]+=1
    //     }
    // }
    // console.log(obj)
    const arr = [1,2,3,3,2,1,4,5,10,9,8]
    let count = new Array(arr.length + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]+1] += 1
    }
    console.log(count);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
  1 5 8 6 4 5 4 6 8 4 6 7 9 9 1`);
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