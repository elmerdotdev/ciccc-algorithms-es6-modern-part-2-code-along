// FIND - returns the first element that matches the condition
const students = [
  { id: 1, firstName: "John", age: 20 },
  { id: 2, firstName: "Jane", age: 30 },
  { id: 3, firstName: "Joe", age: 20 }, // <-- MATCH, stop query
  { id: 4, firstName: "Mary", age: 18 } // ignore
]

const result = students.find(student => {
  return student.id === 3
})

console.log(result) // { id: 3, firstName: "Joe", age: 20 }