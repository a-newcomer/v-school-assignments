
//get all the data from an API
/* 
axios.get("https://api.vschool.io/annn/todo/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


//Get one piece of data from an API - last # in url is ID for that item
axios.get("https://api.vschool.io/annn/todo/5e94db56f468d266b6c89175")
    .then(response => console.log(response.data.title))
    .catch( error => console.log(error))

*/
//Make a list of data appear on the webpage

axios.get("https://api.vschool.io/annn/todo/")
    .then(response => {
        const ol = document.getElementById("toDoList")
        for(let i = 0; i < response.data.length; i++) {
            const li = document.createElement("li")
            li.textContent = response.data[i].title
            ol.append(li)
        }
    })
    .catch(error => console.log(error))
/*
//White cat photo
//https://images.unsplash.com/photo-1585486064194-dcd935337198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80
//Photo by Qin Rong on Unsplash
//make a form, and put submit names in place of hard-coded messages to capture entries - use same var for body

const nextToDo = {
    title: "put money in Czech account",
    description: "What a hassle",
    imgUrl: "https://images.unsplash.com/photo-1585486064194-dcd935337198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
}
// flaw - everytime you refresh the page it posts the same message over again - need a forms
// axios.post("https://api.vschool.io/annn/todo/", nextToDo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//Use ID or look in documentation for how to delete
axios.delete("https://api.vschool.io/annn/todo/5e965edff468d266b6c8917d")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

//edit an entry - you just need to add the key pair that you want to update - and use the id 
let bodyUpdate = {
    title: "Put money in Czech account"
}

axios.put("https://api.vschool.io/annn/todo/5e965eabf468d266b6c8917c", bodyUpdate)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
   */