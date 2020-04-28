//mthis is the intervsl id - might want to change var name
let i
class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        this.name = namePicked
    }
    gotHit() {
        if(this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else {
            this.status = "Dead"
            //clearInterval()
        }
        return this.status
        
    }
    gotPowerup() {
        if(this.status === "Small") {
            this.status = "Big"
            this.hasStar = false
        } else if (this.status === "Big") {
            this.status = "Powered Up"
            this.hasStar = false
        } else if (this.status === "Powered Up" && this.hasStar === false) {
            this.hasStar = true
            this.addCoin() 
        } else {
            this.hasStar = false
        }
        
    }
    addCoin() {
        this.totalCoins = this.totalCoins + 1
    }
    print() {
        
        console.log(`\n            Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}`
        )       
        if(this.status === "Dead") {
            console.log(`            Your final score was ${this.totalCoins}`)
            clearInterval(i)
        }
        if(this.status === "Powered Up" && this.hasStar === true && this.addCoin >= 1) {      
            console.log(`            You've got a Star!`)
        }

    }
}


let mario = new Player("Mario", 0, "Powered Up", false)

let randomRange = () => {    
    let randomNum =  Math.ceil(Math.random() * 3)
        if(randomNum === 1) {
            mario.gotPowerup()          
            } else if(randomNum === 2) {
                mario.addCoin() 
            } else {
                mario.gotHit() 
            }
            return mario.print() 
    }
    i = setInterval(randomRange, 1000)
