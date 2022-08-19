let str="caithanyaiyy"
let N=str.length
let ans=[]
for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
        if(str[i]==str[j]){
            if(!ans.includes(str[i])){
                ans.push(str[i])
            }
        }
    }
    
}
console.log(ans.join(" "));