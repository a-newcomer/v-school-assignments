//create headline
let header = document.getElementById("header")
let h1 = document.createElement("h1")
header.append(h1)
h1.textContent = "Javascript Made this!"
header.style.padding = "30px"
header.style.textAlign = "center"
header.innerHTML += "<h3 id='hThree'><span id='spanH3'>Ann Newcomer </span>Wrote the Javascript</h3>"
document.getElementById('spanH3').style.color = "bisque"

//change messages
let funMessages = ["I have something wonerful to tell you", "What's that?", "Come closer and I'll whisper it!", "That's nice enough in itself."]

let messages = document.getElementsByClassName("message")
//console.log(messages)
for(let i = 0; i < messages.length; i++) {
    messages[i].textContent = funMessages[i]
}

//clear out messages with button-click

function clearText() {
    for(let i = 0; i < messages.length; i++) {
        messages[i].textContent = " "
    }
}

let clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', clearText)

//change message color from drop-down

function changeThemeColor() {
    if(document.querySelector('option').value == 'theme-one') {
        console.log("theme 1 has been selected")
        // document.getElementsByClassName("left").style.backgroundColor = "pink"
        // document.getElementsByClassName("right").style.backgroundColor = "lightblue"
    } else if (document.querySelector('option').value == 'theme-two'){
        console.log("theme 2 has been selected")
        // document.getElementsByClassName("left").style.backgroundColor = "burlywood"
        // document.getElementsByClassName("right").style.backgroundColor = "#ccc"
    }
}
let themeDropDown = document.querySelector("select")

themeDropDown.addEventListener("change", changeThemeColor)