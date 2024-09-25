// SORT - sort elements in asc or desc order
// if positive, do a swap
// if negative, no swap
const numbers = [5, 3, 1000, 9, 8, 3500, 2, 4]
numbers.sort((a, b) => a - b)
console.log(numbers) // ascending order
numbers.sort((a, b) => b - a)
console.log(numbers) // descending order

const fruits = ["Banana", "apple", "Orange", "durian"]
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(fruits) // ascending order
fruits.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
console.log(fruits) // descending order
