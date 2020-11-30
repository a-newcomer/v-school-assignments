//do .includes()

const { strict } = require("assert")

/*
const item = "thing"

const array1 = ["this", "that", "theOther"]
const array2 = ["this", "that", "theOther","thing", "another"]

let isIncluded = ( item, array) =>{
    let isThere = false
    for(i = 0; i < array.length; i++) {
        if(array[i] === item) {
            isThere = true
            break
        }
        console.log(array[i])
    }
    return isThere
}
console.log(isIncluded(item, array2))

//now use this to find duplicates in the same array
*/
function FindIntersection(strArr) {
    const [str1, str2] = strArr
    //this is the same as const str1 = strArr[0], etc
    const arr1 = str1.split(",")
    const arr2 = str2.split(",")
    let strArray = arr1.filter(item => {return arr2.includes(item)})
    
    return strArray
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]))

 //Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//Output: 1,4,13

// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10