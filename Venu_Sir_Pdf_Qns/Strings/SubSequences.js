
let str="abcd"
let N=str.length
let index=0
let bag=""
subSeq(str,N,index,bag)
function subSeq(str,N,index,bag){
    if(bag.length>0){
        console.log(bag);
    }
    if(index==str.length){
        return 
    }
    else{
        for(let i=index;i<N;i++){
            bag+=str[i]
            subSeq(str,N,i+1,bag)
            bag=bag.slice(0,-1)
        }

    }
}
