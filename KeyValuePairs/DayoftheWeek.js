
function runProgram(input){
    input=input.trim().split("\n")
    let week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let day=input[0].trim()
    let num=+input[1]
    DayInWeek(week,day,num)
}
function DayInWeek(week,day,num){
    let reminder=num%7
    for(let i=0;i<week.length;i++){
       if(day==week[i]){
        if((i+reminder>6)){
            i=i-7
        }
        else{
            console.log(week[i+reminder])
            return
        }
       }
       
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`Wednesday
8`);
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