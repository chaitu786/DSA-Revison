
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let  i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        console.log(Dominate(N,arr));
    }
}
function Dominate(N,arr){
    let obj={}
    for(let i=0;i<N;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }
        else{
            obj[arr[i]]=1
        }
    }
    let max=-Infinity
    for(let key in obj){
        // console.log(obj[key]);
        if(obj[key]>max){
            max=obj[key]
        }
    }
    let count=0
    for(let key in obj){
        // console.log(obj[key]);
        if(obj[key]==max){
            count++
        }
    }
    return count==1?"YES":"NO"
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  5
  1 2 2 2 2
  5
  1 2 2 3 3`);
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