// EVERY - return true if all elements pass the condition
const group = [
  { firstName: "John", age: 19 }, // <!-- NOT ADULT
  { firstName: "Jane", age: 23 },
  { firstName: "Mary", age: 21 }
]

const isEveryoneAdult = group.every(patron => patron.age >= 21)

if (isEveryoneAdult) {
  console.log("Group can enter the bar.")
} else {
  console.log("Someone is not an adult.")
}