// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"



function shortcut (string) {
  let arr = ['a','e','i','o','u']
  //split makes str an array
  let str = string.split("")
  let ans = str.filter((e) =>{
    return !arr.includes(e);
  })
  
  return ans.join("")
  
}

//using regex

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}