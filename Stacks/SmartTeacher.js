
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        let str1=input[line++].trim()
        let str2=input[line++].trim()
        if(find(N,str1,str2)){
          console.log("CORRECT")
        }
        else{
          console.log("WRONG")
        }
    }
}
function find(N,str1,str2){
  let p1=0
  let p2=0
  let stack1=[]
  let stack2=[]
  while(stack1.length<N){
    if(stack1.length>0&&str1[p1]=="#"){
      stack1.pop()
      p1++
    }
    else{
      stack1.push(str1[p1])
      // stack2.push(str2[p2])
      p1++
      // p2++
    }
  }
  while(stack2.length<N){
    if(stack2.length>0&&str2[p2]=="#"){
      stack2.pop()
      p2++
    }
    else{
      stack2.push(str2[p2])
      // stack2.push(str2[p2])
      p2++
      // p2++
    }
  }
  // console.log(stack1.join(""),stack2.join(""))
//  for(let i=0;i<N;i++){
  if(stack1.join("")==stack2.join('')){
    return true
  }
  return false
//  }
 
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  4
  ab#c
  ad#c
  4
  ab##
  c#d#
  3
  aab
  aa#`);
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