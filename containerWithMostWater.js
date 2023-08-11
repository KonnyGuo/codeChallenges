// https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
    //have a pointer at start and end of array
    //compute value into a variable called area
    //compare that to maxArea and use Math.max to see which one is kept
    //if height[left] < height[right], we know that the area cannot be better than original one so we incrememnt
    //else we decrement so that we hit while case at some point
    while(left<right){
        area = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, area)
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return maxArea
};




// Intuition:
// The problem requires us to find the maximum area between two lines on the x-axis given the height of the lines as an array. Since the area of a rectangle is determined by the minimum of the heights of the two lines and the distance between them, we can use a two-pointer approach to optimize the solution. We can initialize the left and right pointers to the beginning and end of the array, respectively, and then move the pointer with the smaller height towards the center while updating the maximum area.

// Approach:
// Initialize the left and right pointers to the beginning and end of the array, respectively.
// Initialize the max_area variable to 0.
// While left < right:
// a. Calculate the area between the lines at height[left] and height[right] using min(height[left], height[right]) * (right - left).
// b. Update the max_area variable with the maximum of max_area and area.
// c. If height[left] < height[right], increment the left pointer.
// Otherwise, decrement the right pointer.
// Return the max_area variable.
// Complexity:
// Time Complexity: O(n)
// The two-pointer approach iterates through the array once, giving us a time complexity of O(n).

// Space Complexity: O(1)
// The solution uses a constant amount of extra space, giving us a space complexity of O(1).