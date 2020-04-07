/*
1) Make an array of numbers that are doubles of the first array


let doubleNumbers = (arr)=>{
    let mappedArray = []
    arr.map((item)=>{
        let mappedItem =  item * 2
        mappedArray.push(mappedItem)
    })
    return mappedArray
  }
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  2) Take an array of numbers and make them strings
 function stringItUp(arr){
    let stringified = []
    arr.map(item => {
        let newString = item.toString()
        stringified.push(newString)
    })
    return stringified
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  3) Capitalize each of an array of names
 function capitalizeNames(arr){
     let captialized = []
    arr.map(item =>{
        let lower = item.toLowerCase()
        let capFirst = lower.replace(lower[0], lower[0].toUpperCase())
        captialized.push(capFirst)
    })
    return captialized
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  4) Make an array of strings of the names

 function namesOnly(arr){
     let extractedNames = []
    arr.map(item => {
        extractedNames.push(item.name)
    })
    return extractedNames
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  5) Make an array of strings of the names saying whether or not they can go to The Matrix
   function makeStrings(arr){
    let matrixAges = []
    arr.map(item => {
        let matrixGoer
        if(item.age >= 18) {
            matrixGoer = item.name + " can go to The Matrix."
        } else {
            matrixGoer = item.name + " is under age!"
        }
        matrixAges.push(matrixGoer)        
    })
    return matrixAges
  }
  function makeStrings(arr){
    let matrixAges = []
    arr.map(item => {
        let matrixAge = item.age >= 18? `${item.name} can go`: `${item.name} is too young!`
        matrixAges.push(matrixAge)  
    })
    return matrixAges
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

6) Make an array of the names in h1s, and the ages in h2s
    */
   function readyToPutInTheDOM(arr){
       domReadyArray = []
       arr.map(item => {
           let element = `<h1>Name: ${item.name}</h1><h2>Age: ${item.age}</h2>`
            domReadyArray.push(element)
       })
       return domReadyArray
  }

  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]