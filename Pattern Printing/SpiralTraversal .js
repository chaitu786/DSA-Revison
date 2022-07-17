
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[1].trim().split(' ').map(Number)
    let line=2
    let arr=[]
    for(let i=0;i<N;i++){
        arr.push(input[line++].trim().split(' ').map(Number))
    }
    SpiralTraversal(arr,N,K)
    // let tc=+input[0]
    // let line=2
 
    // for(let i=0;i<tc;i++){
    //     let [N,K]=input[line++].trim().split(' ').map(Number)
    //     let arr=[]
    //     for(let j=0;j<N;j++){
    //         arr.push(input[line++].trim().split(' ').map(Number))
    //     }
    //     console.log(arr,K);
       
    // }
}
function SpiralTraversal(arr,N,K){
    let top=0
    let left=0
    let right=K-1
    let bottom=N-1
    let bag=""
    let count=0
    while(count<N*K){
        for(let i=top;i<=bottom && count<N*K;i++){
            bag=bag+arr[i][left]+" "
            count++
        }
        left++
        for(let i=left;i<=right && count<N*K;i++){
            bag=bag+arr[bottom][i]+" "
            count++
        }
        bottom--
        for(let i=bottom;i>=top && count<N*K;i--){
            bag=bag+arr[i][right]+" "
            count++
        }
        right--
        for(let i=right;i>=left && count<N*K;i--){
            bag=bag+arr[top][i]+" "
            count++
        }
        top++
    }
    console.log(bag);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  4 3
  1 10 9
  2 11 8
  3 12 7
  4 5 6 `);
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