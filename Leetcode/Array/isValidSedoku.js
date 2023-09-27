// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */

// Brute Force Solution:

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku_bruteforce = function (board) {
  const isValid = (arr) => {
    const set = new Set();
    for (const num of arr) {
      if (num !== "." && set.has(num)) {
        return false;
      }
      set.add(num);
    }
    return true;
  };

  // Check rows
  for (let i = 0; i < 9; i++) {
    if (!isValid(board[i])) {
      return false;
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!isValid(column)) {
      return false;
    }
  }

  // Check 3x3 sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subBox = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          subBox.push(board[k][l]);
        }
      }
      if (!isValid(subBox)) {
        return false;
      }
    }
  }

  return true;
};

// Explanation:

// The isValid function checks if a given array has duplicate elements.
// We iterate through each row, column, and sub-box to check their validity.
// Time Complexity:
// O(1) - The board is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const isValid = (arr) => {
    const set = new Set();
    for (const val of arr) {
      if (val !== ".") {
        if (set.has(val)) {
          return false;
        }
        set.add(val);
      }
    }
    return true;
  };

  // Check rows and columns
  for (let i = 0; i < 9; i++) {
    if (!isValid(board[i]) || !isValid(board.map((row) => row[i]))) {
      return false;
    }
  }

  // Check 3x3 sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subBox = [];
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          subBox.push(board[i + x][j + y]);
        }
      }
      if (!isValid(subBox)) {
        return false;
      }
    }
  }

  return true;
};

// Explanation:

// The time complexity of the corrected solution is O(1) because the board size is fixed (always 9x9), and the loops iterate a constant number of times.

// The space complexity is also O(1).

// I defined a helper function isValid to check if a given array (row, column, or sub-box) is valid.
// I used this helper function to check the validity of each row, column, and 3x3 sub-box.
// The loops iterate over the rows, columns, and sub-boxes, and for each, it checks their validity.
// This should now correctly validate the Sudoku board.
