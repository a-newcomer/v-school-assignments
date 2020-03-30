/*
function forception(people, alphabet){
    // your code here
}
// Output: 
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function forception(people, alphabet){

    let result = []
    for(let i = 0; i < people.length; i++){
         result[i] = people[i] + ": "
         //console.log(result)
        for(let j = 0; j < alphabet.length; j++) {
            //Why cant I go result[i][j]= 
            //why is this returning a string????
            //result[i] += alphabet[j] + " " //<=functioning code
            let letter = []
            //console.log(typeof letter)
            letter = alphabet[j] + " "
            //console.log(typeof letter)
            result[i] += letter
            //console.log(result[i])
        }        
        //console.log(result)

     }
     //console.log(result)
    console.log(result.join("").split(" "))
    //Why won't it "return" the result??????
    //return result.join("").split(" ")
}
let people = ["Jon", "Jacob", "Jingle", "Heimer","Schmidt"]
let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
forception(people, alpha)
*/
function forception(people, alphabet){
    let result = ""
    for(let i = 0; i < people.length; i++){
        result += people[i] + ": "
        //console.log(result)
        for(let j = 0; j < alphabet.length; j++) {
            //Why cant I go result[i][j]= 
            //why is this returning a string????
            //result[i] += alphabet[j] + " " //<=functioning code
            //console.log(typeof letter)
            const letter = alphabet[j] + " "
            //console.log(typeof letter)
            result += letter
            //console.log(result[i])
        }        
        //console.log(result)
    }
    //console.log(result)
    console.log(typeof result)
    //Why won't it "return" the result??????
    //return result.join("").split(" ")
}
let people = ["Jon", "Jacob", "Jingle", "Heimer","Schmidt"]
let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
forception(people, alpha)