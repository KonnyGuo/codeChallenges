// https://leetcode.com/problems/sort-an-array/description/

function quickSort(arr){
    //identify pivot (first, last, median, random all works)
    //everything that is smaller than pivot to left array and larger to right array
    //repeat process for individual left and right array till you get length 1
    //concatinate all arrays
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let arrLeft = [];
    let arrRight = [];
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            arrLeft.push(arr[i])
        } else {
            arrRight.push(arr[i])
        }
    }
    //spread operator ... lets you concat array values together, it can also be use for merging and copying
    /**
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const concatenatedArray = [...array1, ...array2];
        console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
     */
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
}

list = [2, -6, 20, 51, 9, 21, 11, -3]

//runtime worst O(n^2), average O(nlogn)
// space complexity O(nlogn)
/**
    On average, the space complexity of QuickSort is O(log n). This is because the algorithm typically uses a recursive approach, dividing the array into smaller sub-arrays until it reaches the base case (sub-arrays of size 0 or 1). At any given point, the number of recursive calls on the stack is limited to the logarithm of the input size, resulting in a space complexity of O(log n).

    In the worst case, the space complexity can be O(n) when the recursion depth becomes equal to the number of elements in the array. This can happen if the partitioning consistently creates highly imbalanced partitions, leading to a large number of recursive calls on the stack.

    It's worth noting that there are variations of the QuickSort algorithm, such as randomized or median-of-three pivot selection, that aim to mitigate the worst-case time complexity and improve performance in practice. These variations can change the average and worst-case behavior of QuickSort.
 */