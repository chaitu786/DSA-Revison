
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let Lbag=input[1].trim().split(" ").map(Number)
    let Hbag=input[2].trim().split(" ").map(Number)
    masaiAirLine(Lbag,Hbag,N)
}
function masaiAirLine(Lbag,Hbag,N){
    for(let i=0;i<N;i++){
        if(Lbag[i]<=15 && Hbag[i]<=7){
            console.log("Boarding");
        }
        else{
            console.log("stop");
        }
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
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