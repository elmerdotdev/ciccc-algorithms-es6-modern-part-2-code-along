// SOME - returns true if at least one element matches the condition
const guests = [
  { firstName: "John", age: 7 },
  { firstName: "Jane", age: 23 }, // <!-- ADULT
  { firstName: "Mary", age: 11 }
]

const isThereAnAdult = guests.some(guest => guest.age >= 18) // true

if (isThereAnAdult) {
  console.log("They can enter the theme park.")
} else {
  console.log("Deny access to theme park.")
}