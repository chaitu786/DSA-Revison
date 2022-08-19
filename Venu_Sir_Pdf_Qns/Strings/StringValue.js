let str="aba"
// let ltrs="abcdefghijklmnopqrstuvwxyz"
// let sum=0
// for(let i=0;i<str.length;i++){
//     for(let j=0;j<ltrs.length;j++){
//         if(str[i]==ltrs[j]){
//             sum=sum+j+1
//         }
//     }
// }
// console.log(sum);

let obj={a:1,
b:2,
c:3,
d:4,
e:5,
f:6,
g:7,
i:8,
j:9,
k:10,
l:11,
m:12,
n:13,
o:14,
p:15,
q:16,
r:17,
s:18,
t:19,
u:20,
v:21,
w:22,
x:23,
y:24,z:25}
let sum=0
for(i=0;i<str.length;i++){
    if(obj[str[i]]){
        sum+=obj[str[i]]
    }
}
console.log(sum);
