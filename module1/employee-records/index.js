/*problems: what kind of an employee list do you want generated?
How come the list I generated below is a list inside a list? and how come changing the double array into a string just make the log print [object Object] three times?
*/
employees = []

function Employee(name, jobTitle, salary, status = "full time") {
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary,
    this.status = status
    // this.printEmployeeform = function() {
    //     console.log("name: " + this.name + ", job title: " + this.jobTitle + ", salary: " + this.salary + ", status: " + this.status)
    // }
}
let delia = new Employee("Delia", "the boss", "70,000" )
let kochka = new Employee("Kochka", "feline mascot", "catfood plus scraps", "Part Time")
let bob = new Employee("Bob Ziroll", "admissions director", "unknown", "Contract")

Employee.prototype.printform = function() {
       console.log("name: " + this.name + ", job title: " + this.jobTitle + ", salary: " + this.salary + ", status: " + this.status)
}
/*
console.log(kochka)

delia.printform()
kochka.printform()
bob.printform()

console.log(Object.values(delia) + Object.values(kochka) + Object.values(bob))
*/

let employeeList = (...employee) => {
    let employees = [] 
    for(let i = 0; i < Object.length; i++) {
        //employees.push(Object.values(employee))
        //employees.push(employee)//these two give me an array in an array
        //why the hell does the below work? I expected it to override the earlier arrays and give me only the last one
        //employees = Object.values(employee)
        employees = [...employee]
    }
    console.log(employees)
}

employeeList(kochka, delia, bob)

// let employees = [...kochka, ...delia, ...bob]
// console.log(employees)
