
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0]
    let bag=""
    let x=0
    Generateallsubsequence(str,bag,x)
}
function Generateallsubsequence(str,bag,x){
    if(bag.length>0){
        console.log(bag)
    }
    if(x==str.length){
        return
    }
    for(let i=x;i<str.length;i++){
        bag+=str[i]
        Generateallsubsequence(str,bag,i+1)
        bag=bag.slice(0,-1)
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`abcd`);
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