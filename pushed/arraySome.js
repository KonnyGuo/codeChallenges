//use .some to check if numbers contain a positive

const numbers = [1, -3, 5, -8, 9, 2, -4];

const checkNum = numbers.some((element) =>{
    return element%2===0
})

//use .some to check if product has price <300

const products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1000 },
  { id: 3, name: 'Tablet', price: 300 }
];

const check300 = products.some((element) =>{
    return element.price < 300;
})

//use .some to check if array is empty

const emptyArray = [];

const checkArray = emptyArray.some((element) => {
    return true;
})

