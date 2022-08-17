
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line++]
        let arr=input[line++].trim().split(' ')
        console.log(remove(n,arr).length);
        console.log(remove(n,arr));
    }
}

function remove(n,arr){
    // let ans=[]
    // let count=0
    // for(let i=0;i<n;i++){
    //     if(!ans.includes(arr[i])){
    //         count++
    //         ans.push(arr[i])
    //     }
    // }
    // console.log(count);
    // console.log(ans.join(" "));

    return arr.filter((el,index)=>arr.indexOf(el)===index)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  3
  1 1 2
  4
  1 1 3 3`);
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