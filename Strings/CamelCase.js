
function runProgram(input){
    input=input.trim().split("\n")
    let str=input[0].trim()
    // let Letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let Letters = {
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        E: "E",
        F: "F",
        G: "G",
        H: "H",
        I: "I",
        J: "J",
        K: "K",
        L: "L",
        M: "M",
        N: "N",
        O: "O",
        P: "P",
        Q: "Q",
        R: "R",
        S: "S",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Z",
    }
    camelCase(str,Letters)
}
const camelCase=(str,Letters)=>{
    let count=0
    for(let i=0;i<str.length;i++){
        if(Letters[str[i]]){
            count++
        }
    }
    console.log(count+1)
}
// Tc-O(N)
// function camelCase(str,Letters){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<Letters.length;j++){
//             if(str[i]===Letters[j]){
//                 count++
//             }
//         }
//     }
//     console.log(count+1)
// }
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`saveChangesInTheEditor`);
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