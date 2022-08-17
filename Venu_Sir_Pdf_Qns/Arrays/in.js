function evenSumRows (index,N, M, arr) {

    if (index == N) {
    
    return;
    
    }
    
    // complete the rest of the function
    
    var sum = 0;
    
    for (var i = 0; i<M;i++) {
    
    if (arr[i] [index]%2!==0){
    
    sum += arr[i][index];
    
    }
}
    
    console.log(sum);
    evenSumRows (index+1, N, M, arr);
}
    
    var N = 3;
    
    var M = 3;
    
    var arr = [[1,2,3],[4,5,6],[7,8,9]]
    
    evenSumRows (0,N, M, arr);