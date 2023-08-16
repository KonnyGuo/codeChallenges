function factorialSolve(n){
    if(n == 0){
        return 0;
    }

    let sum = 1;
    for(let i = 1; i < n+1; i++){
        sum = sum * i;
    }

    return sum;
}

console.log(factorialSolve(4));
console.log(factorialSolve(5));

//runtime O(n)