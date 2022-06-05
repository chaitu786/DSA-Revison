
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(i=0;i<tc;i++){
        let s1=input[line++].trim()
        let s2=input[line++].trim()
        if(sub(s1,s2)){
            console.log("YES");
        }
        else{
            console.log("NO");
        }

    }
}
function sub(s1,s2){
    let j=0
    for(i=0;i<s1.length&&j<s2.length;i++){
        if(s1[j]==s2[i]){
            j++
        }
    }
    return j==s2.length
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
2
abc
adbce
ax
xaa`);
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