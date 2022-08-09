function runProgram(input){
    input=input.trim().split("\n")
    let str1=input[0].trim().split("")
    let str2=input[1].trim().split("")
    // console.log(str1,str2)
    MakeAnagram(str1,str2)
}
function MakeAnagram(str1,str2){
    let obj={}
    let str1_count=0
    let str2_count=0
    for(let i=0;i<str1.length;i++){
        if(!obj[str1[i]]){
            obj[str1[i]]=1
        }
        else{
            obj[str1[i]]+=1
        }
    }
    
    for(let j=0;j<str2.length;j++){
        if(obj[str2[j]]){
            str1_count++
            obj[str2[j]]=obj[str2[j]]-1
        }
        else{
            str2_count++
        }
    }
    // console.log(obj)
    let diff=str1.length-str1_count
    final_removes=diff+str2_count
    console.log(final_removes)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`cde
  abc`);
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
