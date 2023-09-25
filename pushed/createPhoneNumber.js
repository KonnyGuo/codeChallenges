// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let addParens = false
  let addParens2 = false
  let result = ""
  for(let i = 0; i < numbers.length; i++){
    if(i < 3){
      if(addParens === false){
        result = "("
        addParens = true;
      }
      result = result + numbers[i]
    } else {
      if(addParens2 === false){
        result = result + ") "
        addParens2 = true
      }
      result = result + numbers[i]
      if(i === 5){
        result = result+"-"
      }
    }
  }
  
  return result
}

// format = format.replace('x', numbers[i]);
// format: The original string that you want to modify.
// 'x': The substring you want to search for and replace.
// numbers[i]: The value that will replace the first occurrence of 'x'.
// In the context of your createPhoneNumber function, this line of code replaces the first occurrence of 'x' in the format string with the current number from the numbers array.

// Keep in mind that .replace() returns a new string with the replacement made. The original string remains unchanged. If you want to perform multiple replacements, you would need to chain multiple .replace() calls or use regular expressions with the global flag /g.
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}