
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let str=input[1].trim()
    let rotates=+input[2]
    let UpperCase = ["A", "B", "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    caesarCipher(N,str,rotates,LowerCase,UpperCase)
}
function caesarCipher(N,str,rotates,LowerCase,UpperCase){
    let bag=""
    rotates=rotates%26
    for(let i=0;i<N;i++){
        let flag1=UpperCase.includes(str[i])
        let flag2=LowerCase.includes(str[i])
        if(flag1){
            let index;
            for(let j=0;j<UpperCase.length;j++){
                if(str[i]===UpperCase[j]){
                    index=j
                    break
                }
            }
            index+=rotates
            index=index%26
            bag=bag+UpperCase[index]
        }
        else if(flag2){
            let index;
            for(let j=0;j<LowerCase.length;j++){
                if(str[i]===LowerCase[j]){
                    index=j
                    break
                }
            }
            index+=rotates
            index=index%26
            bag=bag+LowerCase[index]
        }
        else{
            bag+=str[i]
        }
    }
    console.log(bag)
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`11
  middle-Outz
  2`);
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