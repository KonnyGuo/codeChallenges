// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Brute Force Solution:
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  // Sorting the array
  nums.sort((a, b) => a - b);

  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // If the current number is consecutive
      if (nums[i] === nums[i - 1] + 1) {
        currentStreak++;
      } else {
        // Update the longest streak and reset current streak
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }

  return Math.max(longestStreak, currentStreak);
};

// Optimized Solution:
// numSet.has(num - 1): This checks whether num - 1 is present in the set. If num - 1 is in the set, it means there is a smaller number, and num is not the start of a sequence. If it's not in the set, then num is the start of a sequence.
// For example, let's say our set is {1, 2, 4, 5, 6}:

// For num = 1, num - 1 = 0 is not in the set, so it's the start of a potential sequence.
// For num = 2, num - 1 = 1 is in the set, so it's not the start.
// For num = 4, num - 1 = 3 is not in the set, so it's the start of a potential sequence.
// This condition helps identify the starting point of a sequence, and then we can iterate to find the length of that sequence.
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  // Creating a set for quick lookups
  const numSet = new Set(nums);
  let longestStreak = 1;

  for (let num of numSet) {
    // If the number is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Counting the length of the consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Updating the longest streak
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
// Comments and Explanation:

// Brute Force Solution:

// Time Complexity: O(n log n) due to sorting.
// Space Complexity: O(1) as no extra space is used.
// Optimized Solution:

// Time Complexity: O(n) as each element is visited once.
// Space Complexity: O(n) for the set.
