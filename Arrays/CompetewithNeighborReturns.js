
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    neighbour(N,arr)
}
function neighbour(N,arr){
    let count=0
    for(let i=0;i<N;i++){
        if(i==0){
            if(arr[i]>arr[i+1]){
                count++
            }
        }
        else if(i==N-1){
            if(arr[i]>arr[i-1]){
                count++
            }
        }
        else{
            if(arr[i]>arr[i+1]&& arr[i]>arr[i-1]){
                count++
            }
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4
  8 15 3 7`);
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