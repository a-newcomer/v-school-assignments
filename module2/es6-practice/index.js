/*
const name = "John"
const age = 101

let runForLoop = (pets) => {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//ARROW FUNCTIONS

const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = (arr) => {
    return arr.filter((person) =>{
        return person.friendly
    })
}

let doMathSum = (a, b) => {return a + b}


let produceProduct = (a, b) => { return a * b }

// Arrow functions - Task 4

Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

Hi Kat Stark, how does it feel to be 40?

const firstName = "Kat"
const lastName = "Stark"
const age = 40

console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

Task 5
Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
let filterForDogs = (arr) => {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }

 let filterForDogs2 = (arr) => arr.filter(animal => animal.type === "dog" ? true:false)

 console.log(filterForDogs(animals))
 console.log(filterForDogs2(animals))

// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

//  Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

const name = "Janice"
const state = "Hawaii"

console.log(`
Hi ${name}!

Welcome to ${state}.

I hope you enjoy your stay. Please ask the president of ${state} if you need anything.`)

ES6 EXERCISES PART 2


function collectAnimals(...animals) {  
    return animals.map((animal => animal))
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "fruit fly"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit", "tater", "cuke"]))
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrit", "tater", "cuke"]
//      }


DESTRUCTURE THE OBJECT IN THE PARAMETER

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(vacation){
      const {location, duration} = vacation
    return `We're going to have a good time in ${location} for ${duration}`
  }
console.log(parseSentence(vacation))

function returnFirst(items){
    const [firstItem] = items //change this line to be es6
    return firstItem
}
console.log(returnFirst(["item 1", "item 2", "item 3"]))

Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))


Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

WHY DOES THIS WORK, BUT DOESN'T WORK IF I PUT THE EXPLICIT STARTING VALUE array?

let combineAnimals = (...arrays) => {  
    let allAnimals = arrays.reduce( (finalArray, array) => {
        return [...finalArray, ...array]
    },[])

    return allAnimals
}

// let combineAnimals = (...arrays) => {
//     const [array1, array2, array3] = arrays
//     return [...array1, ...array2, ...array3] 
// }

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackalope", "cockatrice"];
const mysteriousAnimals = ["platypus","slime mold", "snow leopard"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//BLACK DIAMOND PROBLEMS:


let product = (...numbers) =>{  

    return numbers.reduce((acc, number) =>{
      return acc * number;
    }, 1)
  }

  console.log( product(2,2,2,2,1) )
  
  USE AT LEAST REST AND SPREAD OPERATIORS TO MAKE THE BELOW MORE ESsixy

  function unshift1(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(array);
  }

  let unshift = (array, ...items) => [...items, ...array]
 

  console.log( unshift([1, 2, 3], "paperclip", "camera", "bobbypin", "toothpick", "mug") )

  USE DESTRUCTURING & OBJECT LITERALS TO COMPLETE THE CODE
  
*/
let populatePeople = (names) => {
    return names.map(function(name){
        name = name.split(" ");
        let [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
})
}



console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]