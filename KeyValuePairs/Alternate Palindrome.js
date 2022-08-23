
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let str=input[line++].trim().split(" ")
        console.log(Pal(N,str));
    }
}
function Pal(N,str){
    let map={}
    let count=0
    for(let i=0;i<N;i++){
        if(!map[str[i]]){
            map[str[i]]=1
        }
        else{
            map[str[i]]+=1
        }
    }
    for(let key in map){
        if(map[key]%2!=0){
            count++
        }
    }
    // console.log(map);
    return count<=1?"Yes":"No"
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  1
  a
  3
  aab
  4
  abbb`);
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