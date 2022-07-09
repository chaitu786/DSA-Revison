
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        let str=input[line++]
        // console.log(N,str)
        console.log(checkPal(N,str));
    }
    
}
function checkPal(N,str){
    let count=0
    let mid=Math.floor(N/2)
    for(let i=0;i<mid;i++){
        let left=i
        let right=mid-left-1
        while(left<right){
            if(str[left]===str[right]){
                break
            }
            else{
                right--
            }
        }
        if(left===right){
            return -1
        }
        else{
            for(let j=right;j<N-left-i;j++){
                let swap=str[j]
                str[j]=str[j+1]
                str[j+1]=swap
                count++
            }
        }
    }
    return count
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  5
  aabcb
  8
  adbcdbad `);
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