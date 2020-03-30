// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var computers = []
// for(let i = 0; i < officeItems.length; i++) {
//     if(officeItems[i]=== "computer") {
//         computers.push(officeItems[i])
//     }
// }

// console.log("There are " + computers.length + " computers in the officeItems array.")

//#2
/*
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. "  + (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"? "She's": "He's") + " able to go.")
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. " + (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"? "She's": "He's") + " not able to go.")
      }
    }
*/
[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"

function lightSwitch(numsArray) {
     let sum = numsArray.reduce((a, b) => a + b, 0)
     //console.log(sum)
     if(sum % 2 === 1) {
         console.log("the light is on")
     } else {
        console.log("the light is off")
     }
}
lightSwitch([9, 3, 4, 2])    

