//use .map to double the numbers in the original array

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) =>{
    return num*2;
})

//use .map to get an array only containing age or name
const students = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 28 }
];

const getName = students.map((getName) => {
    return getName.name;
})

//use .map to generate new array containing objects
const nums = [1, 2, 3, 4, 5];

const newObject = nums.map((element) =>{
    return {value: element, isEven: element%2===0}
})
