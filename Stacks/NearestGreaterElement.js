
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        NearestGreaterElem(N,arr)
    }
}
function NearestGreaterElem(N,arr){
    let ans=[]
    for(let i=0;i<N;i++){
        let left=i-1;
        let right=i+1
        let flag = false
        while(left>=0 || right<N){
            if(left>=0 && right<N){
                if(arr[left]>arr[i]){
                    ans.push(arr[left])
                    flag = true
                    break;
                }
                else if(arr[right]>arr[i]){
                    ans.push(arr[right])
                    flag = true
                    break;
                }
                else{
                    left--;
                    right++;
                }
            }
            else if(left>=0){
                if(arr[left]>arr[i]){
                    ans.push(arr[left])
                    flag = true
                    break;
                }
                else{
                    left--;
                }
            }
            else{
                if(arr[right]>arr[i]){
                    ans.push(arr[right])
                    flag = true
                    break;
                }
                else{
                    right++;
                }
            }
        }
        if(!flag){
            ans.push(-1)
        }
    }
    console.log(ans);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  5
  5 4 1 3 2`);
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