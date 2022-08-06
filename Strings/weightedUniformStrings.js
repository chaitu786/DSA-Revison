
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].trim()
    let tc=+input[1].trim()
    let line=2
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        uniformStr(str,N)
    }
}
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
}
function uniformStr(s, queries){
    let values={}
    for(let i=0;i<s.length;i++){
        let count=obj[s[i]]
        values[count]=1
        if(s[i+1] && s[i]==s[i+1]){
            let j=i+1
            while(s[j]===s[i]){
                count+=obj[s[i]]
                values[count]=1
                j++
            }
            i=j-1
        }
    }
    let res=[]
    for(let k=0;k<queries.length;k++){
        if(values[queries[k]]){
            res.push("Yes")
        }
        else{
            res.push("No")
        }
    }
    console.log(res)
    return res
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`abccddde
  6
  1
  3
  12
  5
  9
  10`);
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