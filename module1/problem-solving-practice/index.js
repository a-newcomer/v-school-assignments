/*
Write a function that takes an array of numbers and returns the largest (without using Math.max())

largest([3, 5, 2, 8, 1]) // => 8

compare first 2, save the largest, compare the next 2, etc until end of array, then returnthat number

const findLargestNum = (numsArray) => {
    let highestNum = 0
    for( let i = 0; i < numsArray.length; i++ ) {
        let thisIndex = numsArray[i]       
        if( thisIndex > highestNum) {
            highestNum = thisIndex
        } 
    }
    //return highestNum
    console.log(highestNum)
}

findLargestNum([142,3, 5, 2, 8, 1, 0])

2 - Write a function that takes an array of words and a character and returns each word that has that character present.

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]


let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"] // => ["C%4!", "Hey!"]
//do charCodeAt on the char
//take each string in the array, break that string into array, do charCodeAt on each character, compare to char, and if one of the chars matches, put it in the new array.
//return the new array

* * * * * * * FIX! * * * * ** - Why isn't the computer finding things in my for loop?

*/

let findCharacter = (array, char) =>{
    let newArrayWithChars = []
    let charsCode = char.charCodeAt(char[0])
    for(let i = 0; i < array.length; i++ ) {
        let string = array[i]
        //console.log(string)
        if (string.includes(char)) {
            newArrayWithChars.push(string)
        }
    }
   
    return newArrayWithChars
}

let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"] // => ["C%4!", "Hey!"]

console.log(findCharacter(lettersWithStrings, "!")) 
//console.log("hello")

/*
Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false

const findIfDivisible = (num1, num2) => {
    isDivisible = false
    if (num1 % num2 === 0) {
        isDivisible = true
    }
    //console.log(isDivisible)
    return isDivisible
}

console.log(findIfDivisible(4,2))

 * * * * * * BELOW ARE RPG TESTS * * * * * * * ****

let readlineSync = require('readline-sync')
class Person { 

    constructor(name, currentHealth = 10, loot, threatMessage = ""){
    this.name = name,
    this.currentHealth = currentHealth,
    this.loot = loot
    this.threatMessage = threatMessage
    //will I need an alive boolean property, or is health = 0 enough?
    }
    printName() {
        console.log(this.name)
    }
    changeHealth(healthPoints){
        this.currentHealth = this.currentHealth - (healthPoints)
        return this.currentHealth
    }
    listHealth() {
        console.log("Health points: " + this.currentHealth)
    }
    listLoot() {
        //make function here to list loot - use map?
        console.log(" your current loot:" + this.lootList)
    }
    addLoot(newLoot) {
        this.lootList.push(newLoot)
    }
    loseLoot() {
        let lostLoot = this.loot
        //calculateHealth (-currentHealth)//Do I need this, or should I call loseLoot function after health is <= 0?
        return lostLoot
    }
    threaten() {
        console.log(this.threatMessage)
    }
    //will I need a method that lists everything?
}
let enemyList = ["cheerleadingCap", "minions","queenBee"]

let queenBee = new Person("The Queen Bee", 10, "an invitation the coolest party", "Who's the new kid?")
let cheerleadingCap = new Person("The Cheerleading Captain", 10, " made the squad!", "You're such a spaz - you'll never make the team!")
let minions = new Person( "A group of the Queen Bee's minions", 10, "a place at the cool kids' lunch table","Ewww. Don't touch her, she's got cooties.")

let fight = (enemy, player, enemyIsAlive) => { 
    let damagePoints = (randomCalculator(10))
    let enemyHealth = enemy.changeHealth(damagePoints)
    if(enemyHealth > 0){
        console.log(`You have dealt the enemy ${damagePoints} damage points! She has ${enemyHealth} points left!`)
    
    } else {
        console.log(`She is vanquished! You have triumphed! You now have ${enemy.loot}.`)
        //player.lootList.push(enemy.loot)//will I have to make a different player object? I need a list here, and a string for the enemies
        //remove enemy from enemy list
        enemyIsAlive = false
    }
    
    return enemyIsAlive
}

//don't forget to move this and the other functions back over to the rpg page

let randomCalculator = (num) => {
    return Math.floor(Math.random()* num)
}
//console.log(randomCalculator(-10))

let createEnemy = (list) => {
    let enemy = list[randomCalculator(list.length)]
    if(enemy === "cheerleadingCap"){
    let cheerleadingCap = new Person("The Cheerleading Captain", 10, "made the squad!", "You're such a spaz - you'll never make the team!")
    enemy = cheerleadingCap
    } else if(enemy === "minions"){
        let minions = new Person( "A group of the Queen Bee's minions", 10, "a place at the cool kids' lunch table","Ewww. Don't touch her, she's got cooties.")
        enemy = minions
    } else {
        let queenBee = new Person("The Queen Bee", 10, "an invitation the coolest party", "Who's the new kid?")
        enemy = queenBee
    }
    return enemy
}
//console.log(createEnemy(enemyList))

let meetEnemy = () => {
    let enemy = createEnemy(enemyList)
    let enemyIsAlive = true
    console.log(`\nOh No! ${enemy.name} is standing in front of you. It looks like you won't be able to get to class in peace.`)
    console.log(`\nWhat's she shouting to the entire hall? "` + enemy.threatMessage + `"\n\nOMG! How embarrassing! `)
    //build out what happens when player meets enemy - double-check that even this inside loop will go back to "walk"
    while(enemyIsAlive) {
        let fightOrFly = readlineSync.question('\nAre you going to react to this humilation and fight back, or are you going to try to slink by and get to class? Hit r or s ',{
            trueValue: ['r', 'R', 'react'],
            falseValue: ['s', 'S', 'slink', 'slink by']
        })
        console.log(fightOrFly)
        if(fightOrFly) {
            fight(enemy)
            console.log(`Is she alive? `+ enemyIsAlive)
        } else {
            console.log("you chose to flee. But can you escape in peace?")
        }
    }
}
console.log(meetEnemy())
*/