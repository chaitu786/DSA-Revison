
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
   
    let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line++]
        let str=input[line++]
        palcheck(n,str)
    }
}
function palcheck(N,str){
    let obj={}
    let charcount=0
    for(let i=0;i<N;i++){
        if(!obj[str[i]]){
            obj[str[i]]=1
        }
        else{
            obj[str[i]]+=1
        }
    }
   for(key in obj){
    if(obj[key]%2!==0){
        charcount++
    }
   }
   if(charcount<=1){
    console.log("possible");
   }
   else{
    console.log("NOT-possible");
   }
   console.log(obj);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
  2
6
aabbcc
5
aabcd`);
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