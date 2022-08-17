masaiPalSubString("thisracecarisgood")

function masaiPalSubString(str){
    let max=-Infinity
    let N=str.length
    for(let i=0;i<str.length;i++){
        for(let j=i;j<N;j++){
            let bag=""
            let count=0
            for(let k=i;k<=j;k++){
                bag=bag+str[k]
            }
            // console.log(bag);
            for(let a=0;a<bag.length;a++){
                if(bag[a]===bag[bag.length-1-a]){
                    count++
                }
            }
            if(count==bag.length && count>max){
                max=count
            }
        }
    }
    console.log(max);
}