
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(' ').map(Number)
    Sort(N,arr)
}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function Sort(N,arr){
    // for(let i=0;i<N;i++){
    //     for(let j=0;j<N-i-1;j++){
    //         if(arr[j]>arr[j+1]){
    //             swap(arr,j,j+1)
    //         }
    //     }
    // }
    let left=0
    let right=N-1
    let i=0

    while(i<=right){
        if(arr[i]==0){
            swap(arr[i++],arr[left++])
        }
        else if(arr[i]===2){
            swap(arr[i],arr[right--])
        }
        else{
            i++
        }
    }
    console.log(arr.join(" "))
}

if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  0 2 1 2 0`);
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