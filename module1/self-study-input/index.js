// MDN Docs on input element:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

// MDN Docs on addEventListener:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Programmer's best friend:
// https://www.google.com/

//let message = document.querySelector("input").value
/*
let button = document.querySelector("#input-btn")
//console.log(message)

button.addEventListener('click', getMessage)

function getMessage() {
    let message = document.querySelector("input").value
    console.log(message)
    let messageDiv = document.createElement("div")
    messageDiv.innerText = message
    document.querySelector("body").append(messageDiv)
}
*/

function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}


var jeep = new Car("Jeep", "Cherokee", 1995)

console.log(jeep)