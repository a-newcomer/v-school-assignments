/* 
Write a for loop that counts to one hundred. 
Every number evenly divisible by 3 will be replaced by fizz. Every number evenly divisible by 5 will be replaced by buzz. And every number evenly divisible by both 3 and 5 will be replaced with FizzBuzz.
1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, FizzBuzz, ..... 98, fizz, buzz. 
Hint: don't use an array
*/

//solve problem - breaks if out of order possible solution - using a variable to hold the numver or word, so it woud print both fizz and buzz???

for(i = 1; i <= 100; i++) {
    //console.log(i)
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    }else {
        console.log(i)
    }
} 