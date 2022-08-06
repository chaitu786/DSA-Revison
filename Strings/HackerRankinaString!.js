
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let str=input[line++].trim()
        findstr(str)
    }
}
function findstr(s){
    // let j=0
    // let str="hackerrank"
    let str=["h","a",'c','k','e','r','r','a','n','k']
    // for(let i=0;i<s.length;i++){
    //     if(s[i]==str[j]){
    //         j++
    //     }
    // }
    // if(j===str.length){
    //     console.log("Yes")
    // }
    // else{
    //     console.log("No");
    // }
    for(let i=0;i<s.length;i++){
        if(s[i]==str[0]){
            str.shift()
        }
    }
    if(str.length===0){
        console.log("YES")
    }
    else{
        console.log("No")
    }

}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  hereiamstackerrank
  hackerworld`);
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