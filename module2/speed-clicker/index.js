

let mainBox = document.getElementById("main")
let clearButton = document.querySelector("button")
let counterBox = document.getElementById("counter")
let count
if(localStorage.getItem("count")=== null){
    count = 0
} else {
    count = localStorage.getItem("count") 
} 
counterBox.textContent = count
mainBox.addEventListener("click", ()=>{
    count++
    localStorage.setItem("count", count)
    counterBox.textContent = count
})
clearButton.addEventListener("click", ()=>{
    count = 0
    localStorage.setItem("count", count)
    counterBox.textContent = count
})