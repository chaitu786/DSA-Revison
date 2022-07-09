
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        let arr=input[line++]
        console.log(substr(N,arr));
    }
}
function substr(N,arr){
    const set= new Set()
    for(let i=0;i<=N;i++){
        for(let j=i+1;j<=N;j++){
            set.add(arr.substring(i,j))
        }
    }
    return set.size
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  5
  abcde
  3
  aaa`);
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