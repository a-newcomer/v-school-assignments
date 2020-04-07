/*
var input = "xxx";

try {
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}

//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
  try {
    if(isNaN(x) || isNaN(y) || typeof x != "number"|| typeof y != "number") {
    throw "Error:Both parameters must be numbers."
    } else {
      return x + y
    }
  } catch(err) {
    console.log(err + "If it were to be run, the computer would produce " + x + y + ", which would throw the whole program off.")
  }finally {
    console.log("This is the 'finally' block.")
  }
}
console.log(sum( 3,"7"))
//console.log(typeof 3)

2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};

function login(username, password){
    try {
        if(username === user.username && password === user.password) {
            console.log("You're in!")
        } else {
            throw "Are you up no good? That was the wrong password."
        }
    } catch(err) {
        console.log(err)
    } finally{
        console.log("QQQ Software is the best!")
    }
     
}
console.log(login("sam", "123abd"))


*/
