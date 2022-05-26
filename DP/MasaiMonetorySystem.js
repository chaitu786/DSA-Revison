
function runProgram(input){
    input=input.trim().split("\n")
    for(i=0;i<input.length;i++){
        let n=+input[i]
        console.log(masaiMonetory(n));
    }
    
}
let obj={}
function masaiMonetory(n){
    if(n==0)return 0
    if(n==1)return 1
    let x=masaiMonetory(Math.floor(n/2))
    let y=masaiMonetory(Math.floor(n/3))
    let z=masaiMonetory(Math.floor(n/4))
    obj[Math.floor(n/2)]=x
    obj[Math.floor(n/3)]=y
    obj[Math.floor(n/4)]=z
    return Math.max(n,x+y+z)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
  12
2`);
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