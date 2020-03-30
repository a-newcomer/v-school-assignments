
/* What am I doing here?
1 - add item to input
2 - click button, item gets saved to list (create array for this)
3 - item appears below in a list, with a "remove" button next to it, that you can click and it removes the item from the array. This btuuon would be inside the loop - maybe in an if statement? Or do I need a list of objects ot deal with this? each object would have the item and whehter it was deleted or not. Object would be better with check marks and cross-out - pr. not needed for plain delete
flaw - I can add and empty item

*/
const form = document.addItem

form.addEventListener("submit", (e) => {
    
    event.preventDefault()
    let list = document.getElementById("list")
    let item = form.title.value
    let li = document.createElement('li')
    let itemDiv = document.createElement('div')
    let removeBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    //li.innerHTML = "<div>" + item + "</div>"
    itemDiv.textContent = item
    list.append(li)
    form.title.value = ""
    li.append(itemDiv)
    removeBtn.textContent = "remove item"
    editBtn.textContent = "edit item"
    li.append(removeBtn)
    li.append(editBtn)
    removeBtn.addEventListener("click", (e) => {
        li.remove()
    })
    //This is supposed to create a new input box, and the value of the li is supposed to appear in it. Simultaneously, the button value is supposed to change to "save item" When typed into and the new "save" button is hit, the item should update and the input box disappear. 
    editBtn.addEventListener("click", (e) => {
        event.preventDefault()
    
        /*
        editBtn.textContent = "save"
        editBtn.className = "green"
        let editable = document.createElement("input")
        editable.value = item
        li.append(editable)
        let newItem = editable.value
        itemDiv.textContent = newItem
        */
       let editable = document.createElement("input")
       let edited = document.createElement("input")

        if(editBtn.textContent === "edit item") {
            editBtn.className = "green"
            li.append(editable)
            editable.value = item
            const saveButton = document.createElement("btn")
            saveButton.className = "green"
            saveButton.addEventListener("click", (e) => {
                itemDiv.textContent = item
                editBtn.textContent = "edit item"
                    editBtn.className = ""
            })
            //console.log("Item " + item)
            saveButton.textContent = "save"
            li.append(saveButton)
        } else if(editBtn.textContent === "save") {
            //console.dir(editable)
            //console.log(editable)
           //need to populate this with the content of editable, then on click save it to the div and return the button to its original state

            //editable.value = newItem
            console.log("new Item" + newItem)
            itemDiv.textContent = newItem
            editBtn.textContent = "edit item"
                editBtn.className = ""
            //editBtn.textContent = "edit item"
            //editable.remove()
        }else {
            console.log("this is the third option")
        }
        
        })
        //
    })
    
    

