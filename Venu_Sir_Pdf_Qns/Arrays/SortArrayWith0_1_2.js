
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    SortTheNum(N,arr)
}
function SortTheNum(N,a){
    let left=0
    let right=N-1
    let mid=0
    let temp=0
    while(left<=right){
        if(a[mid] == 0)
        {
            left++; 
            mid++; 
        }
        else if(a[mid] == 1)
        {
            mid++; 
        }
        else
        {
            temp = a[mid]; 
            a[mid] = a[right]; 
            a[right] = temp; 
            right--;
        }
    }

    console.log(a.join(" "))
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