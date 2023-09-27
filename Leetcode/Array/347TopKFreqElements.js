// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Brute Force Approach:
var topKFrequent = function (nums, k) {
  const frequencyMap = new Map();

  // Count the frequency of each element
  //    For each number num in nums, it checks if num is already a key in the map. If it is, it increments the count by 1; otherwise, it sets the count to 1. The || 0 part ensures that if get(num) returns undefined (meaning num is not in the map yet), it defaults to 0.
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Sort elements by frequency in descending order
  // The b[1] - a[1] in the sort function is a comparison function that sorts the entries in descending order based on their frequency.

  // a[1] and b[1] refer to the second element of each entry, which is the frequency of the corresponding number.
  const sortedByFrequency = [...frequencyMap.entries()].sort(
    (a, b) => b[1] - a[1]
  );

  // Take the top k elements
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortedByFrequency[i][0]);
  }

  return result;
};
// Explanation:

// Create a frequency map to count the occurrences of each element.
// Convert the map entries to an array and sort it by frequency in descending order.
// Take the top k elements from the sorted array.
// Runtime: O(n log n) due to the sorting step.

// Optimized Approach:
var topKFrequent = function (nums, k) {
  const frequencyMap = new Map();

  // Count the frequency of each element
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Use a max heap to efficiently find the top k elements
  const heap = Array.from(frequencyMap.entries());
  heap.sort((a, b) => b[1] - a[1]);

  return heap.slice(0, k).map((entry) => entry[0]);
};
// Explanation:

// Create a frequency map to count the occurrences of each element.
// Use a max heap to efficiently find the top k elements.
// Convert the heap entries to an array and return the result.
// Runtime: O(n + k log n), where n is the number of elements in the array. The max heap operation has a time complexity of O(n), and sorting the heap has a time complexity of O(k log n).
