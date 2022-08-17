function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let [N,K]=input[line++].trim().split(" ").map(Number);
        K=K%N;
        let arr=input[line++].trim().split(" ").map(Number);
        Rotatarray(arr,N,K);
    }
}
function swap(arr,N,K){
    while(N<K){                  
        temp=arr[N];
        arr[N]=arr[K];
        arr[K]=temp;
        N++;
        K--;
    }
    return arr;
}
function Rotatarray(arr1,N,K){
    let i=swap(arr1,0,N-1);
    let j=swap(i,0,K-1);
    let k=swap(j,K,N-1);
    console.log(k.join(" "))
}
if (process.env.USER === "") {
  runProgram(``);
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
