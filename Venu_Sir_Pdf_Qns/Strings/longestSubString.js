let str="thisracecarisgood"
let max=-Infinity
for(let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        let bag=""

        for(let k=i;k<=j;k++){
            bag=bag+str[i]
        }
        let count=0
        for(let x=0;x<bag.length;x++){
            if(bag[x]==bag[bag.length-1-x]){
                count++
            }
        }
        if(count==bag.length && bag.length>max){
            max=bag.length
        }
    }
}
console.log(max,"ko");