// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// Brute Force Approach:
var sortArray = function (nums) {
  // Define the merge function
  // left and right are arrays
  const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Concatenate the remaining elements from left and right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  // Define the mergeSort function
  const mergeSort = (array) => {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (array.length <= 1) {
      return array;
    }

    // Find the middle index of the array
    const middle = Math.floor(array.length / 2);

    // Split the array into left and right halves
    // inclusive and exclusive beginning/end for slice method
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively apply mergeSort to the left and right halves
    return merge(mergeSort(left), mergeSort(right));
  };

  // Call the mergeSort function on the input array
  return mergeSort(nums);
};

// Explanation:

//  O(n log n)

// merge function: Takes two sorted arrays (left and right) and merges them into a single sorted array (result).

// mergeSort function:

// Base case: If the array has 1 or 0 elements, it is considered sorted, so it is returned as is.
// Divide: Find the middle index of the array.
// Conquer: Recursively apply mergeSort to the left and right halves of the array.
// Combine: Merge the sorted left and right halves using the merge function.
// The merge sort algorithm follows the divide-and-conquer strategy, dividing the array into smaller parts until reaching subarrays of size 1, then merging them back together in a sorted manner. This ensures that the smaller arrays are sorted, and the merging step combines them into a larger sorted array. The process continues until the entire array is sorted.

var sortArray = function (nums) {
  const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    return result
      .concat(leftArr.slice(leftIndex))
      .concat(rightArr.slice(rightIndex));
  };

  const mergeSort = (array) => {
    if (array.length <= 1) {
      return array;
    }

    let middle = Math.floor(array.length / 2);

    let arrayLeft = array.slice(0, middle);
    let arrayRight = array.slice(middle);

    return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
  };

  return mergeSort(nums);
};

// known as divide and conquer as well
