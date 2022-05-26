
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let arr=[]
    for(a=0;a<tc;a++){
        let [N,K]=input[line++].split(' ').map(Number)
        for(b=0;b<N;b++){
            let arr1=input[line++].split(' ').map(Number)
            arr.push(arr1)
        }
    }   
    console.log(arr);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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