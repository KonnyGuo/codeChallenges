// https://leetcode.com/problems/valid-anagram/description/

// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    SArr = s.split("")
    tArr = t.split("")
    sortedSArr = SArr.sort().join("")
    sortedTArr = tArr.sort().join("")
    if(sortedSArr === sortedTArr) {
        return true
    }
    return false
};