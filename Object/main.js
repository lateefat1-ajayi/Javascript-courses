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