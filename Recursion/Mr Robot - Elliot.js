
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    let bag=""
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let str=input[line++].trim()
        let left=0
        let right=str.length-1
        console.log(Robot(str,left,right,bag))
    }
}
function Robot(str,left,right,bag){
    let mid=Math.floor((left+right)/2)
    // console.log(mid);
    if(left>right){
        return bag
    }
    bag=bag+str[mid]+Robot(str,left,mid-1,bag)+Robot(str,mid+1,right,bag)
    return bag
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  3
  abc
  4
  abcd
  11
  abcdefghijk`);
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