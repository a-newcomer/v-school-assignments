// "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
//make an array out of the description - split the string on the words, convert to array
//from that array, create a new array with copies of the repeated words
//iterate over array checking for matching words, and if there's a match, move that word to a new array
//remove the repeated words from the new array
// return the new array

function InscrToArray(pirateInscription) {
    return pirateInscription.trim().split(" ");
}
