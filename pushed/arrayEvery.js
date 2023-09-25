//use every method to check if array contains all student over 20 years old

const students = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 28 }
];
 
const overAge20 = students.every((element) =>{
    return element.age > 20
})

//use every method to check if values array contains only string
const values = [1, 'hello', true, 42, null];


const checkString = values.every((element) =>{
    return typeof(element) === "string"
})

//use every method to check if stringOnly array contains only string

const stringOnly = ["world", "hello", "world"]

const checkStringOnly = stringOnly.every((element) =>{
    return typeof(element) === "string"
})