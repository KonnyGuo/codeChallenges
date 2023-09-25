function factorialRecursive(n) {
    
    if(n < 2 && n > 0){
        return 1;
    }

    //ex: 5! = 5* 4!
    return n * factorialRecursive(n-1);
}

//recursive O(n)