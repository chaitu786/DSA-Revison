function power(a,n){
  
    if(n==0) return 1;
     
     let value = power(a,n/2)
   
     if(n%2==0){
       return value*value
     }
     
     return value*value*a  
}
console.log(power(4,6));