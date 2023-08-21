//use include array method to find if 3 is in the array numbers

const numbers = [1, 2, 3, 4, 5];

let has3 = numbers.includes(3)

//check if there is a 3 from index 2 (true)
//if we start at index 3 (false)

let has3Index3 = numbers.includes(3, 2)