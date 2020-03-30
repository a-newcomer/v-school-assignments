//Write a function that takes a string, and returns a string with just the vowels.

//vowelsOnly("hello world") //=> "eoo"



let findVowels = (phrase) => {
    //do I need to make "phrase" into a string?
    let vowelArray = []
    let letters = phrase.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        //if letter in letters is found in vowels, put it in vowelArray
        if (vowels.includes(letter)){
        vowelArray.push(letter)
        }
    }

    return vowelArray.toString();
}
console.log(findVowels("supercalifragilousexpialidoucious"))