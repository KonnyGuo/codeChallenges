//use forEach method to iterate array and print each item out

const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit) =>{
    console.log(fruit)
})

//use forEach to iterate over number array and exponent the number by base 2
//store in arr
const numbers = [1, 2, 3, 4, 5];

arr = []

numbers.forEach((num) =>{
    let double = Math.pow(num,2);
    arr.push(double);
})

//use forEach to interate over animal array and uppercase each animal
const animals = ['cat', 'dog', 'elephant'];

const newAnimals = animals.forEach((animal, index, array) =>{
    array[index] = animal.toUpperCase()
})
