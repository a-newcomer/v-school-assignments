const travelForm = document.travelForm

travelForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let fName = travelForm.fName.value
    let lName = travelForm.lName.value

    let age = travelForm.age.value
    let gender = travelForm.gender.value
    let chosenDumplings = []
    for(let i = 0; i < travelForm.foodPreference.length; i++) {
        if(travelForm.foodPreference[i].checked) {
            chosenDumplings.push(travelForm.foodPreference[i].value)
        }
    }
    let city = travelForm.city.value
    alert("First name: "+ fName + "\nLast name: " + lName + "\nAge: " + age + "\nGender: " + gender + "\nFood preference: " + chosenDumplings + "\nDestination: " + city)
    console.log(`first name: ${fName}`)
})