const readlineSync = require('readline-sync')
//create variables to catch the two numbers i'll need
//create a third varable for the operation - 
//do a limited answer thing to make sure the user doesn't do anything whacky
//write 4 functions for the operations, using the given variables
//write an if statement - or a case statement - to put the variables into the chosen function, 
//using the third variable as the switch point
//show the user the answer
//what if the user adds something other than a number in the first 2 spaces, or tries to divide by zero?

//without a function:

// let add = (num1, num2) => {
//     sum = num1 + num2;
//     return sum;
// }
// let subtract = (num1, num2) => {
//     diff = num1 - num2;
//     return diff;
// }
// let multiply = (num1, num2) => {
//     product = num1 * num2;
//     return product;
// }
// let divide = (num1, num2) => {
//     quotient = num1 / num2;
//     return quotient;
// }

// let num1 = readlineSync.question("What is your first number? ")
// console.log( "OK, so your first number is " + num1 + ".")
// let num2 = readlineSync.question("what is your second number? ")
// console.log( "OK, so your first number is " + num1 + ", and your second number is " + num2 + ".") 
// let operation = readlineSync.question("Please choose whether you want to add, subtract, multiply or divide those numbers. ", {limit: ["add", "subtract", "multiply", "divide"]})
// console.log(operation) 

// if(operation === "add") {
//     result = add(num1, num2)
// } else if (operation === "subtract"){
//     result = subtract(num1, num2)
// } else if (operation === "multiply"){
//     result = multiply(num1, num2)
// } else {
//     result = divide(num1, num2)
// }

// As a big function that includes everything

let nodeCalculate = () => {

    let add = (num1, num2) => {
        sum = num1 + num2;
        return sum;
    }
    let subtract = (num1, num2) => {
        diff = num1 - num2;
        return diff;
    }
    let multiply = (num1, num2) => {
        product = num1 * num2;
        return product;
    }
    let divide = (num1, num2) => {
        quotient = num1 / num2;
        return quotient;
    }

    let num1 = readlineSync.question("What is your first number? ")
    console.log( "OK, so your first number is " + num1 + ".")
    let num2 = readlineSync.question("what is your second number? ")
    console.log( "OK, so your first number is " + num1 + ", and your second number is " + num2 + ".") 
    let operation = readlineSync.question("Please choose whether you want to add, subtract, multiply or divide those numbers. ", {limit: ["add", "subtract", "multiply", "divide"]})
    console.log(operation) 

    //Trying an "if" statement

    // if(operation === "add") {
    //     result = add(num1, num2)
    // } else if (operation === "subtract"){
    //     result = subtract(num1, num2)
    // } else if (operation === "multiply"){
    //     result = multiply(num1, num2)
    // } else {
    //     result = divide(num1, num2)
    // }
    // return result;
    
//Trying a "switch" to do the job

    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2)
            break;
        case "divide":
            result = divide(num1, num2)   
    }
    return result;

}

console.log(" Your result is: " + nodeCalculate() + ".")
