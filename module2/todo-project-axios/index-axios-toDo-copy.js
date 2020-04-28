let getData = () => {
    axios.get("https://api.vschool.io/annn/todo/")
    .then(resp => {
        listData(resp.data)
    })
    .catch(err => console.log(err))
}
let listData = (data) => {
    console.log(data)
        //get the place to attach the list items(each toDo item) outside the loop
        const ol = document.getElementById("toDoList")
        //start a loop to show each list item
        for( let i = 0; i < data.length; i++ ) {
             letli = document.createElement("li")
            const h3 = document.createElement("h3")
            h3.textContent = data[i].title
            li.appendChild(h3)
            li.className = "toDoHolder"

            if(data[i].imgUrl){
                li.style.backgroundImage = `url('${data[i].imgUrl}')`
            } else {
                li.style.backgroundImage = "url('white-cat-baroque-flowers-qin-rong-unsplash.jpg')"
            }
            //photo server address "ur l('white-cat-baroque-flowers-qin-rong-unsplash.jpg')"
            
            const desc = document.createElement("p")
            desc.textContent = data[i].description
            li.appendChild(desc)
            if (data[i].completed) {
                h3.className = "strikethrough"
                desc.className = "strikethrough"
            }
            //attach the list item to its place on the page, using the var created outside the loop
            ol.append(li)

            //add an inner form including a "completed" checkbox, "remove" button & styling
            let buttonBox = document.createElement("form")
            buttonBox.setAttribute("type", "form")
            buttonBox.setAttribute("name", "buttonBox")
            buttonBox.className = "buttonBox"
            let doneLabel = document.createElement("div")
            doneLabel.className = "doneLabel"
            doneLabel.textContent = "Completed"
            let checkBox = document.createElement("input")
            checkBox.setAttribute("type", "checkbox")
            checkBox.setAttribute("name", "done")
            checkBox.className = "checkDone"
            let removeBtn = document.createElement("button")
            removeBtn.className = "removeBtn"
            removeBtn.textContent = "Remove Item"
            buttonBox.appendChild(doneLabel)
            doneLabel.appendChild(checkBox)
            buttonBox.appendChild(removeBtn)
            removeBtn.addEventListener("click", (e) => {
                e.preventDefault()
                deleteTodo(data[i])
                ol.removeChild(li)
            })
            checkBox.addEventListener("change", (e) => {
                //e.target.checked = false
                //h3.classList.remove("strikethrough")
                //desc.classList.remove("strikethrough")
                markDone(data[i], e)        
                if(data[i].completed === true) { 
                    h3.className = "strikethrough"
                    desc.className = "strikethrough"
                } //else {
                //     checkBox.checked = false
                //     h3.classList.remove("strikethrough")
                //     desc.classList.remove("strikethrough")
                // }
            })
            //deleteTodo(data[i])

            //attach the buttons to the rest of the list item
            li.appendChild(buttonBox)

        }
}
getData()

let clearList = () => {
    const list = document.getElementById("toDoList")
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    } 
}
let deleteTodo = (item) => {
    console.log(`item id: ${item._id}`)
    axios.delete("https://api.vschool.io/annn/todo/" + item._id)
    .then(
        console.log("item deleted")
    )
    .catch(err => console.log(err))
}
let markDone = (item, e) => {
    console.log ("database value of completed " + item.completed)
    console.log("dom checkbox " + e.target.checked)                    
    const checkMark = {
        completed: e.target.checked
    }
    axios.put("https://api.vschool.io/annn/todo/" + item._id, checkMark)
    .then( resp => {
        console.log("After checked " + checkMark.completed)
        if(checkMark.completed === true){
            e.target.parentNode.parentNode.parentNode.children[0].className = "strikethrough"
            e.target.parentNode.parentNode.parentNode.children[1].className = "strikethrough"
        } else {
            e.target.parentNode.parentNode.parentNode.children[0].className = "red"
            e.target.parentNode.parentNode.parentNode.children[1].className = "red"
            }
        }
    )
    .catch(err => console.log(err))

}


// add a new to do from the form basics

const toDoForm = document.toDoForm

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault()
//we need to clean off the page
clearList()
//get the values from the submission form
    const postBody = {
        title: toDoForm.title.value,
        description: toDoForm.description.value,
        imgUrl: toDoForm.imageURL.value
        }
//make sure the form doesn't resubmit on page refesh, etc
    toDoForm.title.value = ""
    toDoForm.description.value = ""
    toDoForm.imageURL.value = ""

//post, i.e. send the values(captured in the "postBody" var) to the API
    axios.post("https://api.vschool.io/annn/todo/", postBody)
            .then(resp => {
                console.log(resp.data)
                getData()
            })
            .catch(err => console.log(err))
})
//why won't the new item appear w/out refreshing if I put getData() here?

//Can I just add the put function here to change the checkbox?
