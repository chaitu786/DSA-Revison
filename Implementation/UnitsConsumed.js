
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    Units(N)
}
function Units(N){
    let bil_act=N-80
    let val1=0
    let val2=0
    if(bil_act>650){
        val1=bil_act-650
        val2=val1/10
        console.log(val2+150)
    }
    else if(bil_act<=650 && bil_act>150){
        val1=bil_act-150
        val2=val1/5
        console.log(val2+50)
    }
    else{
        val1=bil_act
        val2=val1/3
        console.log(val2)
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`930`);
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