// JOIN - concatenate all elements into one string
const words = ["It", "is", "raining", "today", "at", 11, "am."]

console.log(words.join()) // It,is,raining,today,at,11,am.
console.log(words.join("-")) // It-is-raining-today-at-11-am.
console.log(words.join(" ")) // It is raining today at 11-am.
console.log(words.join("")) // Itisrainingtodayat11am.