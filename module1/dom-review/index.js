/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */
const menu = document.querySelector("ol")
menu.style.display = "flex"
menu.style.flexFlow = "row wrap"
let listItems = document.getElementsByClassName("list-items")
//listItems[0].style.fontFamily = "Times New Roman"
for(let i = 0; i < listItems.length; i++) {
     listItems[i].style.color = "#4400ff"
    //console.log("reading")
    listItems[i].style.listStyleType = "none"
}
let bonsMots = ["item 1", "item 2", "item 3"]

let uL = document.querySelectorAll(".navbar > li")
for(let i = 0; i < uL.length; i++) {
    uL[i].textContent = bonsMots[i]
    // console.log(uL[i])
}