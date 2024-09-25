// HOF - Higher Order Functions

const students = [
  { id: 1, firstName: 'John', lastName: 'Smith', age: 20, tuition: 40000 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25, tuition: 50000 },
  { id: 3, firstName: 'Joe', lastName: 'Arthur', age: 23, tuition: 30000 }
]

// forEach - iterate the array, no return
students.forEach((student, i) => {
  // console.log(`${i}: ${student.firstName} ${student.lastName}`)
})

// map - apply a callback func to each element and return an array
const updatedStudents = students.map(student => {
  if (student.id === 2) {
    return {
      ...student,
      age: 22
    }
  } else {
    return student // return the same object
  }
})
// console.log(updatedStudents)

// filter - returns an array with elements that meet the condition
const notAdults = students.filter(student => student.age < 21)
const adults = students.filter(student => student.age >= 21)
// console.log(adults)

// reduce - accumulates and returns the total value from every iteration
const totalTuition = students.reduce((total, currentStudent) => {
  return total + currentStudent.tuition
}, 0)
console.log(totalTuition)