//use .reduce to multiply all number in arr
//acc is basically the total
//currVal is the array value we are using
//1 is the number we start with (mulitply we want 1 because we don't want to end up using 0 which will make products all 0)
const numbers = [2, 3, 4, 5];

const product = numbers.reduce((acc, currVal)=>{
    console.log(`acc ${acc}`)
    console.log(`currVal ${currVal}`)
    return acc*currVal
},1) 


//use .reduce method to concat the words in the word array
const words = ['Hello', ' ', 'World', '!'];

const concatWords = words.reduce((acc,currWord) =>{
    console.log(`acc ${acc}`)
    console.log(`currVal ${currWord}`)
    return acc+currWord

}, "")

//use reduce method to group objects into certain ages
//if acc[age] does not exist we want to create a new array for it
//store the infos into that array by pushing it
//2nd condition is {} because we are reducing to objects

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 }
];

const objectAges = people.reduce((acc, currVal) =>{
    const age = currVal.age
    if(!acc[age]){
        acc[age] = []
    }
    acc[age].push(currVal)
    return acc
},{})

//access objectAges using bracket notation not dot notation