// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  if(arr.length === 0){
    return []
  }
  
  if(n > arr.length){
    n = arr.length
  }
  // Your code here
  let arrSol = []
  for(let i = 0; i < n; i++){
    arrSol.push(arr[i])
  }
  
  return arrSol
}