// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//.includes and .indexOf works on both arrays/strings
//.includes returns boolean while indexOf returns first instance of case (-1 for false)
// using filter to return all values that are not included in the other array

//O(n*m)
function arrayDiff(a, b) {
  return a.filter((e) => {
    return !b.includes(e)
  })
  
}
//better runtime O(n+m) 
function arrayDiff(a, b) {
  const Dictionary = b.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});
  
  console.log(Dictionary);
  
  return a.filter((element) => !Dictionary[element]);
}