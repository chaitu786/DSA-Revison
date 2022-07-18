
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=[]
    let line=1
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim())
    }
    console.log(FindPlace(arr,N));
}
function FindPlace(arr,N){
    for(let i=0;i<N;i++){
        if(arr[i]=="India"){
            return i+1
        }
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  Russia
  USA
  Japan
  China
  India`);
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