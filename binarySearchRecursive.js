function binarySearchRecursive(arr, target){
    if(arr.length === 0){
        return -1;
    }

    return solveR(arr, target, 0, arr.length-1);
}
function solveR (arr, target, left, right) {
    if(left > right){
        return -1
    }

    let middle = Math.floor((left+right)/ 2)
    if(arr[middle] === target){
        return middle
    }
    if(arr[middle] > target){
        return solveR(arr,target,left,middle-1);
    }else{
        return solveR(arr,target,middle+1,right);
    }
}

function solveUsingFunctioninFunction(nums, target) {
    if(nums.length === 0){
        return -1;
    }

    let solveR = (arr, target, left, right) => {
         if(left > right){
            return -1
        }

        let middle = Math.floor((left+right)/ 2)
        if(arr[middle] === target){
            return middle
        }
        if(arr[middle] > target){
            return solveR(arr,target,left,middle-1);
        }else{
            return solveR(arr,target,middle+1,right);
        }
    }
    
    return solveR(nums, target, 0, nums.length-1);
};

//runtime O(logn)
//space complexity O(logn) The space complexity of binary search implemented recursively is O(log n), where 'n' represents the number of elements in the sorted array.

// In the recursive implementation of binary search, each recursive call adds a new stack frame to the call stack to keep track of the function arguments, local variables, and return address. The number of recursive calls made in the worst-case scenario is proportional to the logarithm (base 2) of the number of elements in the array.

// Each recursive call typically requires a constant amount of space for storing function arguments and local variables. However, since the number of recursive calls is logarithmic, the space complexity of binary search implemented recursively is O(log n).