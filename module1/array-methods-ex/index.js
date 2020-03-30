/*

Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
/*
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

*/
vegetables.pop()
fruit.shift()
//console.log(fruit.indexOf("orange"))
let newItem = fruit.indexOf("orange")
fruit.push(newItem)

//console.log(vegetables.length)
let newVeg = vegetables.length
vegetables.push(newVeg)
let produce = fruit.concat(vegetables)
console.log("produce: ", produce);
let food = produce.splice(4,2)

console.log("food: ", food);
console.log("produce: ", produce);
let newproduce = produce.reverse()
console.log(newproduce)
let produce3 = newproduce.join(", ")
console.log("produce3: ", produce3)
//console.log("produce: ", produce);

//console.log("fruit: ", fruit);
//console.log("vegetables: ", vegetables);