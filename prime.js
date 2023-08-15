function prime(n){

    if(n <= 1){
        return false;
    }

    for(let i = 2; i < n; i++){
        if(n%i === 0){
            return false;
        }
    }

    return true;
}

// console.log(prime(4));
// console.log(prime(13));
// console.log(prime(2));
// console.log(prime(859));

//runtime O(n)

//a number a be determine to be prime if all the factors is checked up to its square root. Ex: 24, we 
//sqrt 24 and get 4.95 meaning that we only need to check up to 4

function primeOptimized(n){

    if(n <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }

    return true;
}

console.log(primeOptimized(4));
console.log(primeOptimized(13));
console.log(primeOptimized(2));
console.log(primeOptimized(859));

//runtime O(sqrt(n))