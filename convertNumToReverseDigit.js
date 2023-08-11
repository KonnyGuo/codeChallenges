// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //code here
  let stringN = n.toString()
  let num = stringN.split("").reverse().join("")
  let arr = []
  for(let i =0; i < num.length; i++){
    arr.push(Number(num.charAt(i)))
  }
  
  return arr
  
}

function digitize(n) {
  return String(n)          // Convert the number to a string
    .split('')              // Split the string into an array of characters (digits)
    .reverse()              // Reverse the order of the array
    .map(Number);           // Convert each character back to a number
}