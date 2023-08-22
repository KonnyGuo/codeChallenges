function fib(n){
    //create an array of fib for index 0 and 1
    let fib = [0,1];
    let sum = 0;
    
    //do the calculation and return the n
    for(let i = 2; i < n+1; i++){
        fib[i] = fib[i-2] + fib[i-1];
    }

    return fib[n];
}

// console.log(fib(2));
// console.log(fib(4));
console.log(fib(7));

//runtime O(n)