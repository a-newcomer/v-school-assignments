const form = document['form']
//submit event
form.addEventListener("submit", function(e){
    e.preventDefault()
    const inputText1 = form.inputText1.value
    form.inputText1.value = ""
    const inputText2 = form.inputText2.value
    form.inputText2.value = ""
    //alert(`the first box was ${inputText1}\nthe second was ${inputText2}`)
    /*
    3 steps - create element to hold value
            -add value to element
            -append element to place in page
    */
   const h1 = document.createElement('h1')
   h1.textContent = inputText1 + " " + inputText2
   form.append(h1)
   document.querySelector('form').appendChild(h1)
})