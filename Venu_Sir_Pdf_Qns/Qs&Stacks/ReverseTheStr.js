let str="Reddy"
let N=str.length
let stack=[]
let stack2=[]
for(let i=0;i<N;i++){
    stack.push(str[i])
}
let bag=""
for(let i=0;i<N;i++){
  let char=stack.pop()
  bag=bag+char
}
return (bag)