//using .filter to get even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((item) =>{
    return item%2===0;
})

//use .filter to return arrays that contains letter a or A

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

const contains = names.filter((item) => {
    return item.includes("a") || item.includes("A")
})

//use .filter to get index of element that is equal to index
//remember .indexOf only returns first occurance of when element was found
//this means that if there is repeats then it would be found earlier
const nums = [1, 2, 3, 4, 3, 2, 1, 5];

const uniqueNumber = nums.filter((element, index, array) =>{
    return array.indexOf(element) === index;
})

