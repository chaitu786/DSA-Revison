
function runProgram(input){
    input=input.trim().split("\n")
    var [n,k]=input[0].split(" ").map(Number);
    var arr=input[1].split(" ").map(Number);
    var left=0;
    var right=arr.length-1;
    binary(k,left,right,arr);
    console.log(countOccurrences(arr,n,k,left,right))
}
function binary(k,left,right,arr){
    if(left>right){
        return -1
    }
   let mid=Math.floor((left+right)/2)
   if(arr[mid]==k){
    return mid
   }
   else if(arr[mid]<k){
    return binary(k,mid+1,right,arr)
   }
   else{
    return binary(k,left,mid-1,arr)
   }
}
function countOccurrences(arr,n,k,left,right){
    let val=binary(k,left,right,arr)
    if(val==-1){
        return 0
    }
    let count=1
    let lefts=val-1
    while(lefts>=0 && arr[lefts]==k){
        count++
        lefts--
    }
    let rights=val+1
    while(rights<n && arr[rights]==k){
        count++
        rights++
    }
    return count
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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