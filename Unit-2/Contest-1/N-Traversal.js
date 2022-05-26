function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[1]
    let line=2
    let arr=[]
    for(i=0;i<N;i++){
       
        let arr1=input[line++].split(" ").map(Number)
        arr.push(arr1)
        
    }
    var bag=""
    for(a=N-1;a>=0;a--){
        bag=bag+arr[a][0]+" "
    }
    for(b=1;b<N;b++){
        bag=bag+arr[b][b]+' '
    }
    for(c=N-2;c>=0;c--){
        bag=bag+arr[c][N-1]+" "
    }
    console.log(bag)
}

if (process.env.USERNAME === "Chaithanya") {
  runProgram(`
1
3
1 2 3
4 5 6
7 8 9`);
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