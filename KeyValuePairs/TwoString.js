function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let str1=input[line++].trim().split("")
        let str2=input[line++].trim().split("")
        console.log(Strings_2(str1,str2))
    }
}
function Strings_2(str1,str2){
    let obj={}
    for(let i=0;i<str1.length;i++){
        if(obj[str1[i]]){
           obj[str1[i]]+=1 
        }
        else{
            obj[str1[i]]=1
        }
    }
    for(let j=0;j<str2.length;j++){
        if(obj[str2[j]]){
            return "YES"
        }
    }
    return "NO"
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  hello
  world
  hi
  world`);
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
