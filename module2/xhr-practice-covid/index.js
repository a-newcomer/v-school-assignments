let xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.covid19api.com/summary", true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showCoronaCases(data)
        //console.log(data.Global.TotalConfirmed)
    }
}
let showCoronaCases = (update) => {
    const div = document.getElementById("totalCases")
    const h2 = document.createElement("h2")
    h2.textContent = `Total worldwide covid-19 cases today:  ${update.Global.TotalConfirmed}`
    //document.querySelector("div").append(h2)
    div.append(h2)

    const ul = document.getElementById("covidList")
    //console.log(update.Countries[2].Country)
    let countries = update.Countries
    for(let i = 0; i < countries.length; i++){        
        const li = document.createElement("li")
        let textNode = document.createTextNode( `${update.Countries[i].Country}: ${update.Countries[i].TotalConfirmed} measured cases as of today.` )
        li.appendChild(textNode)
        ul.appendChild(li)
    }
       
       
  
   
   
    // const li = document.createElement("li")
    // let textNode = document.createTextNode("Today's worldwide covid-19 cases: " + update.Global.TotalConfirmed)
    // li.appendChild(textNode)
    // ul.appendChild(li)
}