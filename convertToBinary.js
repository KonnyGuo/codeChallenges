// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

//toString(2) converts num into string binary so 5 would be 101
//binary starts from power of 2 from most left


function toBinary(n){
  return Number(n.toString(2))
}


function toBinary(n){
  return +(n.toString(2))
}