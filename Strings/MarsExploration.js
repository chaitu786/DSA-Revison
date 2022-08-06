
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].trim()
    let msg="SOS"
    ChangingElem(str,msg)
}
function ChangingElem(str,msg){
    let count=0
    for(let i=0;i<str.length;i++){
        let x=i%3
        if(str[i]!==msg[x]){
            count++
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`SOSSPSSQSSOR`);
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