// reverse a string
/*const anagram = "A man a plan a canal Panama"

const reverseString = (str) => {
    let strArr = str.split("").reverse().join("").toString()
    console.log("First Array: "+strArr)

} 
reverseString(anagram)
*/
/*
strictly increasing sequence with one non-conformng number only

Input: sequence: [1, 3, 2, 1]
Expected Output: false

Input: sequence: [1, 3, 2]
Expected Output: true

Input: sequence: [1, 2, 1, 2]
Expected Output: false

Input: sequence: [3, 6, 5, 8, 10, 20, 15]
Expected Output: false
edge cases [1,2,1,2], [10, 1,2,3,4],[1,1,2,3,4,4,5]
approach - try first finding and removing the odd number from the array, then running the array again to see if there's another out-of-sequence number
*/

function testAlmostRisingSequence(array) {
    //set up a boolean to test
    let almostRisingSequence = true
    //give us a benchmark to test against later
    let errorIndex = null
    //run through the array and test for non-rising number if there
    for(i=0; i<array.length; i++) {
        if(array[i] >= array[i + 1]){
        console.log("element ",array[i]," at index " ,i)
        errorIndex = i
        }
    }
    //remove the last non-rising number
    if(errorIndex !== null){
    array.splice(errorIndex, 1)
    }
    //just in case the sequence didn't have any non-rising numbers
    if (errorIndex === null) {
        almostRisingSequence = true
    }
    //run through the array a second and final time to test for second error
    for(i=0; i<array.length; i++) {
        if(array[i] >= array[i + 1]) {
            almostRisingSequence = false
        }
    }
    return almostRisingSequence
}
console.log(testAlmostRisingSequence([1, 3, 2, 1]))
