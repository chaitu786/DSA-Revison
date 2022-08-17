
// function runProgram(input){
//     input=input.trim().split("\n")
//     let arr=input[0].trim().split(" ").map(Number)
//     let j=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             if(i!=j){
//                 swap(arr,i,j)
//             }
//             j++
//         }
//     }
//     console.log(arr.join(" "))
// }
// function swap(arr,i,j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }
// if (process.env.USERNAME === "Chaithanya") {
//   runProgram(`-12 11 -13 -5 6 -7 5 -3 -6`);
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
let j=0
let arr=[12, 11, -13, -5, 6, -7, 5, -3, -6]
for(let i=0;i<arr.length;i++){
  if(arr[i]<0){
    if(i!=j){
      let temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
    }
    j++
  }
}
console.log(arr.join(" "));