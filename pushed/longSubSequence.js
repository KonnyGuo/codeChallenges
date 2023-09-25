// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


var longestConsecutive = function(nums) {
    if(nums.length===0){
        return 0;
    } else if(nums.length===1){
        return 1;
    }
    nums.sort((a,b) => {
        return a-b;
    })
    let count= 0;
    let temp = 1;

    //after sorting array we want to keep track of count and temp
    //once the sequence is broken, we reset temp in case another sequence happens
    //if that sequence is better, we are comparing temp with count and the higher value will be new count
    for(let i = 0; i < nums.length; i++){
        if(nums[i]+1 === nums[i+1]){
            temp++;
            count = Math.max(count,temp);
        } else if(nums[i] === nums[i+1]){
            count = Math.max(count,temp);
        } else {
            temp = 1;
            count = Math.max(count,temp);
        }
    }

    return count
};

// Intuition:
// The problem requires finding the length of the longest consecutive sequence of numbers in the given array. We can sort the array and then traverse it to find the longest consecutive sequence.

// Approach:
// Sort the given array.
// Initialize two variables: count and temp. count will store the length of the longest consecutive sequence found so far, and temp will store the length of the current consecutive sequence.
// Traverse the sorted array from the first element to the second last element:
// If the current element is one less than the next element, increment temp.
// If the current element is equal to the next element, do nothing.
// If the current element is not one less than the next element, reset temp to 1.
// After each iteration, update count with the maximum value of count and temp.
// Return count.
// Complexity
// Time complexity: Sorting the array takes O(n log n) time. The for loop takes O(n) time. Therefore, the overall time complexity of the function is O(n log n + n) which simplifies to O(n log n).

// Space complexity: We are not using any additional data structure that grows with the size of the input. Therefore, the space complexity of the function is O(1).