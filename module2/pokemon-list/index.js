const xhr = new XMLHttpRequest

xhr.open("GET","https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        getPoke(data)
        //console.log(data.objects[0].pokemon)
    }
}

let getPoke = (pokemon) => {
    const ul = document.getElementById("pokeList")
    const pokemonName = pokemon.objects[0].pokemon
    for(let i = 0; i < pokemonName.length; i++) {
    let li = document.createElement("li")
    let textNode = document.createTextNode(`${pokemonName[i].name}`)
    li.appendChild(textNode)
    ul.appendChild(li)
    }
}