
function runProgram(input){
    input=input.trim().split("\n")
    let line=input[0].trim()
    pangrams(line)
}
function pangrams(line){
    let str=line.toLowerCase()
    let obj={}
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]] && str[i]!==" "){
            obj[str[i]]=1
        }
    }

    if(Object.keys(obj).length===26){
        return console.log("pangram")
    }
    else{
        return console.log("not pangram")
    }

}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`We promptly judged antique ivory buckles for the next prize`);
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