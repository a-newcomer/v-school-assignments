//SETUP
    //require readline-sync
    //show message "you are locked in a room which you must escape
    //use isGameActive boolean, and hasKey boolean
                //if I want to escape the loop, I set isGameActive to false
                //when I get the key, I set the hasKey to true, and use it as a condition inside the door loop
    //END OF SETUP

//START OF GAME LOOP
   
  
    // QUESTION - what do you want to do?"
        //use key-in-select to offer choices

    //CHOICES
        //if the user puts hand in hole, they die - message of death, 
            //isGameActive set to false
        //if they choose the key, they get a message that they have the key, 
            //with a question about what they want to do next
            //plus, hasKey is switched to true
        // if they choose open the door, they get two messages depending on 
            //whether hasKey is true or false
            // false: sorry, the door is locked, what do you want to do next
            //true: you have opened the door - you are free! Game is over too. 
//END OF GAME LOOP
 

//attempted to do this with a function, so as to be able to change the options after the key has been retrieved, but it got too complicated - still, might be fun to try later - I gave it a "list" parameter and ran two arrays through it - it returned "choice" variable.
//to work on- alter the list after the key is picked up to remove that option, also, log some kind of response if you click on the key or door twice
let readlineSync = require("readline-sync");


let userName = readlineSync.question("May I have your name, adventurer? ")
console.log("\n\nGreetings " + userName + 
".\n\nIn your search for treasure, you find yourself locked in a room. " + 
"\nIs there treasure here? \nIf you don't find it or get out, " + 
"other adventurers may find the treasure first. What do you want to do? \n\nChoose an option according to its number. ")

let hasKey = false
let isGameActive = true

const options = ['try to open the door','reach for treasure in the dark hole in the wall',
'pick up the old key you have found']

//START OF GAME LOOP
while (isGameActive) {
    const choice = readlineSync.keyInSelect(options,
        " ")
    if(choice === 0) {
        if(hasKey){
            console.log("\nThe key has opened the door!You have escaped the room. You win!") 
            isGameActive = false
        } else {
            console.log("\nThe door is locked! You are stuck until you find the key. What do you want to do next? ")
        }
    } else if(choice === 2) {
        console.log( '\nYou have the key.\nWhat do you want to do next? ')
        hasKey = true;
    } else if (choice === 1) {
        console.log("\nYou Greedy fool! You have reached into a poisoned hole. You will die in agony. Game over.")
        isGameActive = false
    } else {
        console.log("\nYou have chosen to quit the game without testing yourself. Your loss.")
        isGameActive = false
    }
   
}