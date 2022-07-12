
function runProgram(input){
    input=input.trim().split("\n")
    let arr=input[1].trim().split(" ").map(Number)
    GeneratePermutations(arr,[],{})
}
function GeneratePermutations(arr,stack,obj){
  if(arr.length==stack.length){
    console.log(stack.join(' '))
  }
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
      continue
    }
    else{
      obj[arr[i]]=true
      stack.push(arr[i])
      GeneratePermutations(arr,stack,obj)
      obj[arr[i]]=false
      stack.pop()
    }
  }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  1 2 3`);
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