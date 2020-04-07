let additionForm = document.additionForm
let subtractionForm = document.subtractionForm
let multiplicatonForm = document.multiplicatonForm

let add = (num1, num2) => {
    sum = parseInt(num1) + parseInt(num2);
    return sum;
}
let subtract = (num1, num2) => {
    diff = parseInt(num1) - parseInt(num2);
    return diff;
}
let multiply = (num1, num2) => {
    product = parseInt(num1) * parseInt(num2);
    return product;
}
//How to do this properly?
// let makeElements = (thisForm, myInput1, myInput2, myFunction, symbol) => {
//     const oldResult = document.getElementById("result")
//     if(oldResult) {
//         oldResult.remove()
//     }
//     let h2 = document.createElement("h2")
//     h2.id = "result"
//     thisForm.append(h2)
//     const input1 = thisForm.myInput1.value
//     const input2 = thisForm.myInput2.value
//     thisForm.myInput1.value = ""
//     thisForm.myInput2.value = ""
//     //alert(addInput1 + " " + addInput2)
//     let result = myFunction(input1, input2)
//     return myInput1 + " " + Symbol + " " + result
// }


additionForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const oldResult = document.getElementById("result")
    if(oldResult) {
        oldResult.remove()
    }
    let h2 = document.createElement("h2")
    h2.id = "result"
    additionForm.append(h2)
    const addInput1 = additionForm.addNum1.value
    const addInput2 = additionForm.addNum2.value
    additionForm.addNum1.value = ""
    additionForm.addNum2.value = ""
    //alert(addInput1 + " " + addInput2)
    let result = add( addInput1, addInput2 )
        if(addInput1 && addInput2){
    h2.textContent = addInput1 + " + " + addInput2 + " = " + result
    } else {
        h2.textContent = "not a valid entry"
    }
})

subtractionForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const oldResult = document.getElementById("result")
    if(oldResult) {
        oldResult.remove()
    }
    let h2 = document.createElement("h2")
    h2.id = "result"
    subtractionForm.append(h2)
    const input1 = subtractionForm.subtractNum1.value
    const input2 = subtractionForm.subtractNum2.value
    subtractionForm.subtractNum1.value = ""
    subtractionForm.subtractNum2.value = ""
    let result = subtract(input1,input2)
    if(input1 && input2){
        h2.textContent = input1 + " - " + input2 + " = " + result
    } else {
        h2.textContent = "not a valid entry"
    }
})

multiplicatonForm.addEventListener("submit", (e) => {
    e.preventDefault()
    //Get rid of the old result before we do a new one
    const oldResult = document.getElementById("result")
    if(oldResult) {
        oldResult.remove()
    }
    let h2 = document.createElement("h2")
    //attach an id so I can remove the element later
    h2.id = "result"
    multiplicatonForm.append(h2)
    const input1 = multiplicatonForm.multNum1.value
    const input2 = multiplicatonForm.multNum2.value
    multiplicatonForm.multNum1.value = ""
    multiplicatonForm.multNum2.value = ""
    let result = multiply(input1,input2)
    if(input1 && input2){
        h2.textContent = input1 + " x " + input2 + " = " + result
    } else {
        h2.textContent = "not a valid entry"
    }
})