
// function runProgram(input){
//   input=input.trim().split("\n")
//   let tc=+input[0]
//   let line=1
//   for(let i=0;i<tc;i++){
//       let n=+input[line++]
//       let arr=input[line++].split(" ").map(Number)
//       console.log(Maximumrectangleareainahistogram(n,arr))
//   }
// }
// function Maximumrectangleareainahistogram(N,arr){
//   // let max_area=-Infinity
//   // for(let i=0;i<N;i++){
//   //   length
//   //   let area=length*arr[i]
//   // }
//   let left=[]
//   let right=[]
//   for(let i=0;i<N;i++){
//     for(let j=N-1;j)
//   }
// }
// if (process.env.USERNAME === "Chaithanya") {
//   runProgram(`2
//   4
//   2 3 4 5
//   6
//   7 5 4 3 6 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }