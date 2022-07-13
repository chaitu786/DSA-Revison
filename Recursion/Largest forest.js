
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=[]
    let line=1
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim().split(''))
    }
    let max=-Infinity
    for(let i=0;i<N;i++){
        for(j=0;j<N;j++){
            if(arr[i][j]=="T"){
                count=0
                Largestforest(i,j,arr)
                if(max<count){
                    max=count
                }
            }
        }
    }
    console.log(max);
}
var count=0
function  Largestforest(i,j,arr){
    if(i<0 || j<0 || i==arr.length || j==arr.length || arr[i][j]=="W"){
        return 
    }
    arr[i][j]="W"
    count++
    Largestforest(i,j+1,arr)
    Largestforest(i,j-1,arr)
    Largestforest(i+1,j,arr)
    Largestforest(i-1,j,arr)
    
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  TTTWW
  TWWTT
  TWWTT
  TWTTT
  WWTTT`);
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