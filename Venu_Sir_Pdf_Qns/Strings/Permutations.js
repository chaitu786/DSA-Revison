
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let str=input[1].trim().split(" ") 
    generatePermutations(N,str,[],{})
}
function generatePermutations(N,str,arr,obj){
    console.log(arr);
    if(arr.length===str.length){
        console.log(arr.join(' '));
    }
    for(let i=0;i<N;i++){
        if(obj[str[i]]==true){
            continue
        }
        else{
            obj[str[i]]=true
            arr.push(str[i])
            generatePermutations(N,str,arr,obj)
            obj[str[i]]=false
            arr.pop()
        }
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4
  1 2 3 4`);
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