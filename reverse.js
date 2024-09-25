// REVERSE - reverses the order of the elements in your array
const numbers = [1, 2, 3, 4, 5]
const copyNums = [...numbers] // this creates a shallow copy
copyNums.reverse()

console.log('COPIED:', copyNums)
console.log('ORIGINAL:', numbers)