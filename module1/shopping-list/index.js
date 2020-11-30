//Start by naming the form
const form = document.addItem

form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    //name our elements to make life easier
    let list = document.getElementById("list")
    let item = form.title.value
    let li = document.createElement('li')
    let itemDiv = document.createElement('div')
    let removeBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    //take the input from the form & add an element to the shopping list
    itemDiv.textContent = item
    list.append(li)
    //empty out the form input again
    form.title.value = ""
    li.append(itemDiv)
    //add two buttons to each list element
    removeBtn.textContent = "remove item"
    editBtn.textContent = "edit item"
    li.append(removeBtn)
    li.append(editBtn)
    //what the remove button does
    removeBtn.addEventListener("click", (e) => {
        li.remove()
    }) 
    //highlight the edit button green
    editBtn.className = "green"
    //This creates a new input box to ba able to edit each list item
    editBtn.addEventListener("click", (e) => {
        e.preventDefault()
        //create an input form for editing
        let editable = document.createElement("input")
        li.append(editable)
        editBtn.remove()
        //make sure the value of the item from the list appears in the input
        editable.value = item
        //create a save button
        const saveButton = document.createElement("btn")
        saveButton.className = "green"
        saveButton.addEventListener("click", (e) => {
          //catch the new value of the edited item from the input form
          let newItem = editable.value
          //add it up to the item in the list
          itemDiv.textContent = newItem
          //get rid of highlighting on the editbutton
          editBtn.className = ""

          })
        //keeping on creating the save button
        saveButton.textContent = "save"
        li.append(saveButton)
        //console.log(e.target)
        //the only thing the save button has to do it get rid of itself - the item appears in the list by itself
        saveButton.addEventListener("click", (e) => {
        saveButton.remove()
        editable.remove()
        })
    })
        
})
//Still to do - get rid of flaws - adding empty item to list, being able to add multiple save input boxes.