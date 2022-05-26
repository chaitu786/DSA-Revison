
function runProgram(input){
    input=input.trim().split("\n")
    let [N,M]=input[0].split(' ').map(Number)
    let line=1
    let arr=[]
    for(a=0;a<N;a++){
        let num=input[line++].split(' ').map(Number)
        arr.push(num)
    }
    
    for(i=0;i<N;i++){
        var bag=""
        for(j=0;j<M;j++){
            if(arr[i][j]==1){
                arr[i][j]=0
                bag=bag+arr[i][j]+" "
            }
            else if(arr[i][j]==0){
                arr[i][j]=1
                bag=bag+arr[i][j]+" "
            }
            
        }
        console.log(bag);
    }
   
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
3 2
1 0
0 1
1 1`);
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