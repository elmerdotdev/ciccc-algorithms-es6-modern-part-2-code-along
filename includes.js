// INCLUDES - returns true if element exist in array, false otherwise
const fruitsArr = ["apple", "orange", "mango"]

function fruitPunch(fruits) {
  if (!fruits.includes("apple")) {
    return "No punch for you" // exit if apple does not exist
  }
  
  return `Your fruit punch consists of ${fruits.join(', ')}.`
}

console.log(fruitPunch(fruitsArr))