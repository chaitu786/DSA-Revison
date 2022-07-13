
function runProgram(input){
    // input=input.trim().split("\n")
    let [i,j,k]=input.trim().split(' ').map(Number)
    var board = [];
    for (var n = 0; n < 10; n++) {
        let arr=[]
        for (var y = 0; y < 10; y++) {
           arr.push(0)
        }
        board.push(arr)
    }
    followTheKnight(k,i,j)
    var count=0

function followTheKnight(step,i,j){
    if(i<0 || j<0 || j>9 || i>9 ){
        return
    }
    if(step==0){
        board[i][j] = 1
        return 
    }
    followTheKnight(step - 1, i - 2, j + 1);
    followTheKnight(step - 1, i - 2, j - 1);
    followTheKnight(step - 1, i - 1, j + 2);
    followTheKnight(step - 1, i - 1, j - 2);
    followTheKnight(step - 1, i + 2, j + 1);
    followTheKnight(step - 1, i + 2, j - 1);
    followTheKnight(step - 1, i + 1, j - 2);
    followTheKnight(step - 1, i + 1, j + 2);
}


    for(let a=0;a<10;a++){
        for(let b=0;b<10;b++){
            if(board[a][b]==1){
                count++
            }
        }
    }
    console.log(count);

}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3 3 1`);
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