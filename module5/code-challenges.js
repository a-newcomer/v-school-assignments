//do .includes()

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