// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Brute Force Solution:

// Brute Force Solution
var productExceptSelf_bruteforce = function (nums) {
  const n = nums.length;
  const result = [];

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    let product = 1;

    // Calculate the product of all elements except the current one
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    // Push the product to the result array
    result.push(product);
  }

  return result;
};
// Explanation:
// O(n^2 )
// For each element in the array, calculate the product of all other elements.
// Time Complexity: O(n^2) - Nested loops.

// Optimized Solution:
var productExceptSelf_optimized = function (nums) {
  const n = nums.length;

  // Arrays to store the prefix and suffix products
  const prefixProducts = [];
  const suffixProducts = [];

  let product = 1;

  // Calculate prefix products
  for (let i = 0; i < n; i++) {
    prefixProducts[i] = product;
    product *= nums[i];
  }

  product = 1;

  // Calculate suffix products
  for (let i = n - 1; i >= 0; i--) {
    suffixProducts[i] = product;
    product *= nums[i];
  }

  const result = [];

  // Calculate the final product for each element
  for (let i = 0; i < n; i++) {
    result[i] = prefixProducts[i] * suffixProducts[i];
  }

  return result;
};
// Explanation:
// O(n);

// Use two arrays (leftProducts and rightProducts) to store the product of elements to the left and right of each element.
// The final product is the product of the corresponding left and right products.
// Time Complexity: O(n) - Traverse the array three times.
// These solutions avoid the use of the division operation and meet the O(n) time complexity requirement.
