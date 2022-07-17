
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    MaxOccEl(N,arr)
}
function MaxOccEl(N,arr){
    let obj={}
    for(let i=0;i<N;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]]+=1
        }
    }
    let max=-Infinity
    var x
    for(key in obj){
        if(obj[key]>max){
            max=obj[key]
            x=key
        }
    }
    console.log(x);

    // method-2
    // let max=-Infinity
    // let num
    // for(let i=0;i<N;i++){
    //     var count=0
    //     for(let j=0;j<N;j++){
    //         if(arr[i]==arr[j]){
    //             count++
    //         }
    //     }
    //     if(count>max){
    //         max=count
    //         num=arr[i]
    //     }
    // }
    // console.log(num);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  0 2 0 6 9`);
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