
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].trim()
    reduce_the_str(str)
}
function reduce_the_str(str){
    let stack=[str[0]]
    for(let i=1;i<str.length;i++){
        if(str[i]===stack[stack.length-1]){
            stack.pop()
        }
        else{
            stack.push(str[i])
        }
    }
    if(stack.length===0){
        console.log("Empty String")
    }
    else{
        console.log(stack.join(""));
    }

}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`aaabccddd`);
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