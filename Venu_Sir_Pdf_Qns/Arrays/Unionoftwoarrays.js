
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let arr1=input[1].trim().split(" ").map(Number)
    let arr2=input[2].trim().split(" ").map(Number)
    Union(N,K,arr1,arr2)
}
function Union(N,K,arr1,arr2){
    let obj={}
    for(let i=0;i<N;i++){
        if(!obj[arr1[i]]){
            obj[arr1[i]]=1
        }
    }
    for(let j=0;j<K;j++){
        if(!obj[arr2[j]]){
            obj[arr2[j]]=1
        }
    }
    console.log(Object.keys(obj).length)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5 3
1 2 3 4 5
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