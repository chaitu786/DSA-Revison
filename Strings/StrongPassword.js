
function runProgram(input){
    input=input.trim().split("\n")
    let password=input[0].trim()
    CheckPassword(password)
}
// print the count of how many charactes you need add to make stronger
function CheckPassword(password){
    let lower_case = {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        e: "e",
        f: "f",
        g: "g",
        h: "h",
        i: "i",
        j: "j",
        k: "k",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "p",
        q: "q",
        r: "r",
        s: "s",
        t: "t",
        u: "u",
        v: "v",
        w: "w",
        x: "x",
        y: "y",
        z: "z",
    }
    let specialChar = "!@#$%^&*()-+"
    let numbers={
        1:"1",
        2:"2",
        3:"3",
        4:"4",
        5:"5",
        6:"6",
        7:"7",
        8:"8",
        9:"9",
        0:"0",
    }
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
    let special =false
    let upper=false
    let lower=false
    let num=false
    let count=0
    for(let i=0;i<password.length;i++){
        if(!special){
            for( let j=0;j<specialChar.length;j++){
                if(password[i]===specialChar[j]){
                    special=true
                    break
                }
            }
        }
    }
    for(let i=0;i<password.length;i++){
        if(!upper){
            if(Letters[password[i]]){
                upper=true
            }
        }
        if(!lower){
            if(lower_case[password[i]]){
                lower=true
            }
        }
        if(!num){
            if(numbers[password[i]]){
                num=true
            }
        }
    }
    if(!special){
        password+="!"
        count++
    }
    if(!num){
        password+="1"
        count++
    }
    if(!upper){
        password+="A"
        count++
    }
    if(!lower){
        password+="a"
        count++
    }
    if(password.length<6){
        let x = 6 - password.length
        count+=x
    }
    console.log(special,num,upper,lower,count,password)

}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`Ax.`);
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