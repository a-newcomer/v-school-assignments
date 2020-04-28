let readlineSync = require('readline-sync')
/*

game components needed:
boolean game active/game over
boolean for meeting the enemy - enemy alive?
meetEnemy() - do I need this function? Do I choose the enemy here? or can I use the above boolean - or will this function return the enemy alive boolean?
attack() - player attacks first, damage to enemy calculated, health points added or enemy killed and player gets inventory, enemy removed from enemy array, witty death message printed
    enemy attacks second, player damage calculated, player dead or choice to walk or fight offered again 
walk() - do I need this function or will this be part of the first loop?
player object = {
    name, health, loot
}
enemy array of objects = [enemies = { name, health, loot, death message,(I don't think I need an alive boolean here, since 0 health means dead)}]
calculateChances() with percentage as parameter for enemy appearance and running - returns parcentage
damage() random for calculating random damage to enemy and self during attack, also generating health points(?) - returns random number between life and death points

PSUEDOCODE FUNCTIONS
//give engaging message and ask user name
while gameOver = false
give user choice of walk or inventory - explain "type w....or type "i" to see a list
function walk() {
    if (w) {
        message: go peacefully or attack?
        if(peacefully){
            random 33.33%
            if(peace 2/3 chance){
                player walks on, gets walk choice again
            } else (1/3 chance){ enemy appears() message: attack or run?
                if(attack){ - enemy damage calculated (calculate health function, random, min to max()?) - if health below zero, give inventory to player, remove enemy from array, then enemy attacks back
                } else if run - 50% (random)chance of escaping - message - "whew, you made it" walk()
                            - or enemy attack, with player damage - if player health hits 0 - death message, game over
                    enemy attacks(can I just do one attack function, or will I need one for player and one for enemy?)
            }
        } else attackEnemy() see above, 
        then enemy attacks back, see above

    } if "i" inventory, print a list of the treasure accumulated by player from the enemy, the player's name and health points
}

*/

console.log('\n Welcome to the coolest in the school game! You are the new girl - for now, a nobody. Your mission, should you choose to accept it, is to get down the hall to class safely, and if possible to emerge triumphant as the coolest kid in the school. Can you make it past the popular girls unscathed, or even use them to climb to the top of the junior-high pecking order?. . .')
let name = readlineSync.question("\n Let's start by letting people know that you're not a nobody. \nYou have a name - what is it? ")

//* * * * * * START OF GAME! * * * * * * *

let getToClass = (name) => {
//make a constructor class for my characters, although the base will is only used for enemies
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
    // loseLoot() {
    //     let lostLoot = this.loot
    //     return lostLoot
    // }
    threaten() {
        console.log(` "` + this.threatMessage + `"`)
    }
}//end of Person class


//Player constructor - an extension of the Person class, needed because of the different way loot works for the player - the player needs a list of loot, not a single piece of it
class Player extends Person {
    
    constructor(name, currentHealth, lootList){
        //you have to list the properites you're taking from the parent class like the below
        super(name, currentHealth)
        //then you can add any special properties - in this case, I need an array for the loot
        this.lootList = lootList
        }
        this.lootList.push(loot)
        //return this.lootList
    }
    listLoot(lootList) {      
        console.log("\nYour current place in the pecking order: ")
        let isLoot = (this.lootList.length > 0) ? "You have" + this.lootList.map( (loot)=>{return loot} ): "\nYou haven't climbed a single rung of the pecking order."
        console.log(isLoot)
        console.log("\nYour current energy: " + this.currentHealth)
    }
}
//I made this list to randomly choose an enemy and then get rid of her when I'm done
let enemyList = ["queenBee", "cheerleadingCap", "minions"]

    let player = new Player(name, 10, [])

    let gameActive = true
    //this little function is used to feed in a number and calculate chances for all sorts of things in the program
    let randomCalculator = (num) => {
        return Math.floor(Math.random()* num)
    }

    let fight = (enemy, player, enemyIsAlive) => { 
        //console.log(player.name)
        let damagePoints = (randomCalculator(10))
        let enemyHealth = enemy.changeHealth(damagePoints)
        //console.log(`enemyHealth`,enemyHealth)
        //console.log(`enemy.currentHealth`, enemy.currentHealth)
        if(enemyHealth > 0){
            console.log(`\n You react!\nYou have dealt the enemy ${damagePoints} damage points! They have ${enemyHealth} points left!`)        
        } else {
            console.log(`\n\nYou won that battle!\n\n ${enemy.name} is finally vanquished! You now have ${enemy.loot}.`)
            player.addLoot(enemy.loot)
            //player.currentHealth = player.currentHealth + 10
            //player.listLoot(player.lootList)
            //remove enemy from enemy list - write function for this
            enemyIsAlive = false
        }
        return enemyIsAlive
    }
    let enemyAttacks = (enemy, player) => {
        let damagePoints = randomCalculator(10)
        let playerHealth = player.changeHealth(damagePoints)
        //console.log(`playerHealth`, playerHealth)
        //console.log(`player.currentHealth`, player.currentHealth)

        //I have to set the conditional to both healths, since otherwise I get wacky results during round two in the UI
        //this case is what happens if both player and enemy are alive
        if(playerHealth > 0 && enemy.currentHealth > 0) {
            console.log(`\nAttack! \n They have dealt you ${damagePoints} damage points! You have ${playerHealth} points left!`)
        //This is the case for when the player is killed, but enemy is not
        } else if(playerHealth <= 0 && enemy.currentHealth > 0) {
            console.log(`\n${enemy.name} has dealt you the death blow! How will you ever outlive the embarrassment? \nYou'll never be able to show your face in class.\n GAME OVER`)
            gameActive = false
        //or else leave the loop if the enemy gets killed
        } else {
            enemyIsAlive = false
        }
        //there's still a minor flaw - the game continues if enemy blasts you first and then you blast her, too. Now it counts as you winning the battle, and it allows youto continue, where the next enemy thinks she's killed you. Could put an end to that using a condtional in meetEnemy function below the attack call
        //console.log(`game active?`, gameActive)
    }

    let createEnemy = (list) => {
        //below randomly chooses an enemy from that separate enemy list I made
        let enemyAtIndex = list[randomCalculator(list.length)]
        //and then instantiates an enemy according to which one was chosen
        if(enemyAtIndex  === "cheerleadingCap"){
        let cheerleadingCap = new Person("The Cheerleading Captain", 10, " made the squad!", "You're such a spaz - you'll never make the team!")
        enemy = cheerleadingCap
        } else if(enemyAtIndex  === "minions"){
            let minions = new Person( "A group of the Queen Bee's minions", 10, " a place at the cool kids' lunch table","Ewww. Don't touch her, she's got cooties.")
            enemy = minions
        } else if (enemyAtIndex  === "queenBee"){
            let queenBee = new Person("The Queen Bee herself", 10, " an invitation the coolest party", "Who's the new kid?")
            enemy = queenBee
        //If the enemy list is emtpy && there are no enemies still alive in the system that the player has slunk away from, then the player wins
        } else if(enemy.currentHealth <= 0){
            console.log(`\nYou have vanquished all your foes, racked up a list of popluarity points and made it class on time!\n\n * * * * * YOU WIN! * * * * * * *`)
        //I may have changed the game so no enemies can lurk in the system after createEnemy has been called, but just in case, here's the message:    
        } else {
            console.log("You're almost there, but not all your foes have been vanquished yet!")
        }
        //this then takes the chosen enemy off the enemy list
        enemyList.splice(enemyList.indexOf(enemyAtIndex), 1)
        return enemy
    }

    let meetEnemy = () => {
        //gameActive = true
        let enemy = createEnemy(enemyList)
        //if enemy.currentHealth < 0, write function to get rid of extra sentance in the UI
        if(enemy.currentHealth <= 0) {
            enemyIsAlive = false
        } else {
            //create a boolean so I can use a while loop and player will get bumped out when needed
            enemyIsAlive = true
            console.log(`\nOh No! ${enemy.name} is standing in front of you. \nIt looks like you won't be able to get to class in peace.`)
            console.log(`\nWhat's she shouting to the entire hall? "` + enemy.threatMessage + `"\n\nOMG! How embarrassing! `)
            while(enemyIsAlive && gameActive) {
                
                let fightOrFly = readlineSync.question('\nAre you going to react to this humilation and fight back, or are you going to try to slink by and get to class? Hit r or s ',{
                    trueValue: ['r', 'R', 'react'],
                    falseValue: ['s', 'S', 'slink', 'slink by']
                })
                //test for fight value - true = react to enemy provocation
                if(fightOrFly===true) {
                    enemyIsAlive = fight(enemy, player, enemyIsAlive)
                    //console.log(`Is she alive? `, enemyIsAlive)
                    enemyAttacks(enemy, player)
                } else { //it must be slink away attempt false = slink
                    console.log("You chose to flee. But can you escape in peace?")
                    let flightSuccess = randomCalculator(2)
                    if(flightSuccess > 0) {
                        console.log("\nWhew! You escaped this time! You can continue down the hall towards class.\n\nNo glory in that though, is there?")
                        break
                    } else {
                        console.log(`Too Late! Your attempt to avoid notice is in vain.`)
                        console.log(`${enemy.name} is making a beeline towards you.`)
                        enemyAttacks(enemy, player)
                        if(player.currentHealth > 0){
                        console.log(`\nThere's nothing to do but react to that.`)
                        fight(enemy,player, enemyList, enemyIsAlive)
                        } else {
                            gameActive = false
                        }
                    }
                }
            }
        }
    }
    //main body of game - with boolean 'gameActive' to bump player out of loop in the right place
    while( gameActive ) {

        let walkOrCheck = readlineSync.question('\nSo, ' + name + ', do you want to walk or check your status/place in the pecking order? w or c? ',{
        trueValue: ['w', 'W', 'walk'],
        falseValue: ['c', 'C', 'check', 'i', 'check status']
      });
      //console.log('walkOrCheck: '+ walkOrCheck)

        if (walkOrCheck === true) {
            meetEnemy()
            //console.log('gameActive: ' + gameActive)             
        } else if (walkOrCheck === false){
            "\n" + player.listLoot(player.lootList)
            //console.log('gameActive: ' + gameActive)
        } else {
            //just to catch any other key presses
            console.log("\nYou must hit w or c")
            //console.log('gameActive: ' + gameActive)
        }
        //console.log('Outside if - gameActive: ' + gameActive)
    }//gameActive loop
            //console.log(' Outside gameActive loop gA: ' + gameActive)
}//outer loop/startLoop

console.log(getToClass(name))

//* * * * * * END OF GAME * * * ** * *
