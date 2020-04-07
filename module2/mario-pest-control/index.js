const marioForm = document.invoice
const cheepPrice = 11
const goombaPrice = 5
const baBombPrice = 7

let rowTotal = (numOfPests, pestPrice)=> {
    let baddieTypeTotal = numOfPests * pestPrice
    return baddieTypeTotal
}

marioForm.addEventListener("submit",(e)=>{ 
    e.preventDefault()
    let numOfCheeps = marioForm.cheepCheepAmount.value
    let cheepTotal = rowTotal(numOfCheeps, cheepPrice)
    //alert(cheepTotal)
    let cheepBox = document.getElementById("cheepTotalBox")
    cheepBox.textContent = cheepTotal + " Coins"

    let numOfgoombas = marioForm.goombaAmount.value
    let goombaTotal = rowTotal(numOfgoombas,goombaPrice)
    let goombaBox = document.getElementById("goombaTotalBox")
    goombaBox.textContent = goombaTotal + " Coins"

    let numOfBaBombs = marioForm.baBombAmount.value
    let baBombTotal = rowTotal(numOfBaBombs, baBombPrice)
    let baBombBox = document.getElementById("baBombTotalBox")
    baBombBox.textContent = baBombTotal + " Coins"

    let sumTotal = cheepTotal + goombaTotal + baBombTotal
    let totalBox = document.getElementById("totalPrice")
    totalBox.textContent = sumTotal + " Coins"




})



