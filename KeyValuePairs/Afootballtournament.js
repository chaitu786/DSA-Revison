
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let goals=[]
    let line=1
    for(let i=0;i<N;i++){
        goals.push(input[line++].trim())
    }
    Football(goals,N);
}
function Football(goals,N){
    let obj={}
    for(let i=0;i<N;i++){
        if(!obj[goals[i]]){
            obj[goals[i]]=1
        }
        else{
            obj[goals[i]]+=1
        }
    }
    let max=-Infinity
    let x
   for(key in obj){
    if(obj[key]>max){
        max=obj[key]
        x=key
    }
   }
   console.log(x);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  A
  ABA
  ABA
  A
  A`);
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