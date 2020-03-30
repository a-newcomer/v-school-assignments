var readline = require('readline-sync');

/*

For this exercise, you will be implementing a Caeser cipher using Javascript. Your program will receive two inputs:

1 -The text to be encoded
2 - The number of positions to shift each letter (to the right)

You only have to shift letters that are part of the 26-letter alphabet. Any other characters (such as spaces) should be printed as they were received. The shift value will always be on the interval [0, 26].

How to approach this?
change the phrase into an array. put it into capitals to reduce the unicode charaters we have to deal with
find the index of each of the alphabet letters on the alphabet list, checking for spaces or anthing that isn't between 65 and 90( char 32) and leaving them the same 
CharCodeAt for unicode charcters will work
add the shift number to the index number - do formula to go back to beginning of alphabet. either put a limit on shift numbers, or do modulo 26 of the number as the shift #.
convert back to an alphabet letter
make back into a string

*/

var inputText = readline.question('What phrase would you like to encrypt? ').toUpperCase();
var rawShift = parseInt(readline.question('How many letters would you like to shift? ') ) 

let encryptWithShift = function(inputText, rawShift) {
    let inputArray = inputText.toUpperCase().split(" ")
    let outputArray = []
    const shift = rawShift % 26
    for(let i = 0; i < inputArray.length; i++ ) {
        //do not need to double loop here - code needs refactoring so the input text is split into one array(sinply split it on the empty string, not a space!), not split on words - wasted effort
        let word = inputArray[i]
        //console.log(word)
        let encodedWord = []
        for(let j = 0; j < word.length; j++ ) {
            let letterIndex = word.charCodeAt(j)
            if (letterIndex > 65 && letterIndex < 90) {
                if( (letterIndex + shift) > 90){
                    //Code will break if we put in a negative shift. Test. Fix.
                letterIndex = (letterIndex + shift) - 26
                //console.log("letterIndex big = " + letterIndex)
                } else {
                    //Below: regular case - shift the letter along the unicode captial alphbetic index
                    letterIndex = letterIndex + shift
                    //console.log("letterIndex regular case = " + letterIndex)
                }
            // } 
            encodedWord.push(String.fromCharCode(letterIndex))
                //console.log(encodedWord)
        } else {
            //Below: if the char code is outside the alphabet, leave it as it is     
                letterIndex = word.charCodeAt(j)
                //console.log("letterIndex if outside alphabet = " + letterIndex)  
                encodedWord.push(String.fromCharCode(letterIndex))
            }
    }
    outputArray.push(encodedWord.join(""))  

}
return outputArray.join(" ")
}

//let inputText = "Hello world"
console.log( encryptWithShift(inputText, rawShift))