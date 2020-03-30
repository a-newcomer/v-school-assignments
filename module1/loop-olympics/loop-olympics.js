
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// //push every other fruit to an array
// var someFruit = []
//  for(var i = 0; i < fruit.length; i+=2) {
    
//     someFruit.push(fruit[i])
// }


// console.log(someFruit)

// var seq = []
// for(var i = 0; i < 10; i++) {
//   seq.push(i)
// }
// console.log(seq)

// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]

// var halfTheNames = []
// var halfTheJobs = []

// for( var i = 0; i < peopleArray.length; i += 2) {
//   halfTheNames.push(peopleArray[i].name)
//   halfTheJobs.push(peopleArray[i + 1].occupation)

// }
// console.log(halfTheNames + " \n " + halfTheJobs)

//GOLD 1

/*
Create an array like this one with a for loop

[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]


very cool function that makes grid taken from "coding train p5.js 9.15" and amended a little to fit the assignment

function makeMatrix (rows, cols) {
    let matrix = new Array(rows) 
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols)
        for(let j = 0; j < cols; j++) {
            matrix[i][j] = 0
        }
    } 
    console.log(matrix)
}
makeMatrix(3,3)

zeroMatrix = []
for(let i = 0; i < 3; i++) {
    zeroMatrix[i] = []
    for(let j = 0; j < 3; j++){
        zeroMatrix[i][j] = 0
    }
    console.log(zeroMatrix[i])
}

console.log(zeroMatrix)

//GOLD 2


Create an array like this one with a for loop
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]


numMatrix = []
    for(let i = 0; i < 3; i++) {
        numMatrix[i] = []
        for( let j = 0; j<3; j++) {
            numMatrix[i][j] = i
        }
    }
console.log(numMatrix)

//GOLD 3

Create an array like this one with a for loop
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]


numMatrix2= []
    for(let i = 0; i < 3; i++) {
        numMatrix2[i] = []
        for( let j = 0; j<3; j++) {
            numMatrix2[i][j] = j
        }
    }
    console.log(numMatrix2)


//GOLD 4


Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...] 
           
 */

xMatrix = []
for(let i = 0; i < 3; i++) {
    xMatrix[i] = []
    for(let j = 0; j < 3; j++){
        xMatrix[i][j] = "x"
    }
    console.log(xMatrix[i])
}

console.log(xMatrix)
//This could be easily changed into the above function