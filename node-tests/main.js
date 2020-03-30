const readlineSync = require('readline-sync')
let favColor = readlineSync.question("What is your favorite color? ")
console.log(favColor)
console.log("Oh, I love the color " + favColor+ " too")