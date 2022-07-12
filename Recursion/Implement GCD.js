
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(i=0;i<tc;i++){
        let [n,r]=input[line++].trim().split(" ").map(Number)
        console.log(ImplementGCD(n,r))
    }
}

function ImplementGCD(n,r){
    if(n==r){
        return n
    }
    else if(r%n==0){
        return n
    }
    else if(n%r==0){
        return r
    }
    else if(n<r){
        return ImplementGCD(n,r%n)
    }
    return ImplementGCD(n,r%n)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  6 9
  2 25`);
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