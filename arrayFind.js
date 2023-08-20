
//use find method to return someone over age of 21

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 }
];

const findAge = people.find((element) =>{
    return element.age > 22;
})

//use find to get first index occurance of orange

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];

const findFruitIndex = fruits.find((element, index, array)=> {
    return element === "banana"
})

//use find to get price over 900

const products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1000 },
  { id: 3, name: 'Tablet', price: 300 }
];

const overPriced = products.find((element) =>{
    return element.price > 900
})