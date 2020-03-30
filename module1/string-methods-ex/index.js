/*
1) Make a function that will return any given string into all caps followed by the same string all lowercase.

capitalizeAndLowercase("Hello") // => "HELLOhello"


 let doBothCases = (string) => {
     console.log(string.toUpperCase() + string.toLowerCase())

 }
 doBothCases("twas brillig")

 2) Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5

let findMiddleIndex = (string) => {
    let midIndexNum = Math.floor(string.length / 2)
    console.log(midIndexNum)

}
findMiddleIndex("twas brillig and the slithy toves")

3) Make a function that uses slice() and the other functions you've written to return the first half of the string

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"


 let returnFirstHalf = (string) => {
     let indexOfhalf = Math.floor((string.length + 1) / 2)
     let firstHalf = string.slice(0, indexOfhalf)
     console.log(firstHalf)

 }
 returnFirstHalf("hellowor")

 4) Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"

 let halfCaps = (string) => {
    let indexOfhalf = Math.floor((string.length + 1) / 2)
    let firstHalf = string.slice(0, indexOfhalf)
    let secondHalf = string.slice(indexOfhalf)
    console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase())
 }
 halfCaps("Twas brillig and the slithy toves")

 code challenge: utilizes the .split() string method and .join() array method):

Make a function that takes any string and capitalizes any character that follows a space.

capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

Theory: split the string in an array of its words using .split()
        run the array through a for loop and slice off the first letter of each string, then concatenate the string back together, then do the .join("") array method to put the wrods togehter into a big string

let titleCaps = (string) => {

}
titleCaps("Twas brillig and the slithy toves")

 */
