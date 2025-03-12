//Object : key, values and methods

const carA = {

    model: 2013,
    color: "black",
    brand: "toyota",
    price: 2000,
    horsePower: 900

}
console.log(carA)

console.log(carA["model"])
//OR
// console.log(carA.model)
console.log(carA.color)
console.log(carA.brand)
console.log(carA.price)
console.log(carA.horsePower)

//example 2

const cars = {
    firstCar: carA,

    secondCar: {
        model: 2014,
        color: "pink",
        brand: "nissan",
        price: 20000,
        horsePower: 1000
    }
};
const carAprice = cars.firstCar.price

//const carAprice = cars["firstCar"]["price"]

console.log({ carAprice })

//object with array

const cohort6 = {
    male: {
        names: ["Abdullah", "Muiz", "Ridwan", "Idrees"]
    },
    female: { name: "lateefah" }
}
const firstStudent = cohort6.male.names[0]
console.log({ firstStudent })

const dltAfrica = [
    {
        cohorts:
        {
            cohort1: {
                names: ["Biodun", "Tolu", "Anike", "Shola"], hobbies: {
                    Biodun: "Football",
                    Tolu: "Eating",
                    Anike: "Dancing",
                    Shola: "Running"
                }
            }
        }
    },

    {
        tutors:{
                names: ["Anate", "SoliuA", "SoliuM", "Abdullah"], 
                hobbies: {
                    Anate: "Football",
                    SoliuA: "Eating",
                    SoliuM: "Dancing",
                    Abdullah: "Running"
                }
            }
    },

]
const sholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola
console.log({sholaHobby})

const soliuAhobby = dltAfrica[1].tutors.hobbies.SoliuA
console.log({soliuAhobby})

// student and tutor

const studentAndTutor = {[dltAfrica[1].tutors.names[0]] : dltAfrica[0].cohorts.cohort1.names[2],}

console.log(studentAndTutor)

//object methods

// const dynamicKey = "date"

const carB = {
    name: "big daddy",
    brand: "Toyota",
    year: 2013,
    updateYear: function(newYear){
        this.year = newYear
    }
}
console.log(carB.year)

//When trying to update a value
carB.updateYear(3040)
console.log(carB.year)

const student = {
   name: "olu",
   age: 20,
   favNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10],
   favsum : function(){
  return  this.favNumbers.reduce((acc, currVal) => (acc + currVal), 0 
   )
   }
}
console.log(student.favsum())

const player = {
    firstName: "Silva",
    lastName: "Tiago",
    age : 38,
    team: {
        clubName: "chealsea", location: "england", manager: "Eric"
    },

    jerseyNumber: 6
}

console.log(player)
console.log(player["team"]["manager"])
console.log(player.team.clubName)
//TO UPDATE LOCATION
player.team.location = "South Africa"
console.log(player.team.location )

//BUILT IN METHOD

const myObject = {
    myMethod1 : () => {},//arrow function
    mymethod2 : function() {}, //function declaration
    mymethod3(){} //function expression
}

const dog = {
    name : "bingo",
    age : 10,
    bark: () => {
        console.log("woof")
    }
}
console.log(dog.name)
dog.bark();

//OBJECT METHODS
//OBJECT.KEYS()
//OBJECT.VALUES()
//OBJECT.ENTRIES() it creates a nested array of the key and value pairs of an object
//OBJECT.FREEZE() // prevent modification of existing properties and prevents properties from being added or removed
//OBJECT.SEAL() it prevents new properties from being added or removed from an object

//object.KEYS()

const employees = {
    lead: "mrSoliu",
    secretary:"ridwon",
    sales: "dolapo",
    accountant: "lateefat"
}
const employeeInfo = Object.keys(employees)
console.log(employeeInfo)

const employeeInf = Object.values(employees)
console.log(employeeInf)

const session = {
    id: 1,
    date: "10-march-2025",
    device: "mobile",
    browser : "chrome"
}

const sessionValue = Object.entries(session)
console.log(sessionValue)

const operatingSystem = {
    name: "linus",
    version: 1.0,
    license : "open source"
}

const opsystem = Object.entries(operatingSystem)
console.log(opsystem)

const user = {
    username : "olu",
    password : 1234
}
const userInfo = Object.freeze(user)
console.log(userInfo)

const user1 = {
    name: "bolu",
    age: 20
}
const userSeal = Object.seal(user1)
userSeal.name = "titi"
console.log(userSeal)

