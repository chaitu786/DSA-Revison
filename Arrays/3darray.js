
function runProgram(input){
    input=input.trim().split("\n")
    let [N,M,K]=input[0].trim().split(' ').map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    Three_D_arr(N,M,K,arr)
}
function Three_D_arr(N,M,K,arr){
    let x=0
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            let str=""
            for(let k=0;k<K;k++){
                str+=arr[x]+" "
                x++
            }
            console.log(str);
        }
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2 2 2
  1 2 3 4 5 6 7 8`);
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