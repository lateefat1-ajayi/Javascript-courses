// Javascript Variables, Data Types, and Operators

//variable keywords : const and let

let a = 10;

console.log(a)

a = 25
console.log(a)

const myNumber = 30;
console.log(myNumber)

let b = 3;
let c = 4;
let me;

me = b;
b = c;
c = me;

console.log(`b: ${b}, c: ${c}`)


//Javascript Data types: Primitive and Non-primitive data types

let studentNames = ["Dolapo", "ridwon", "muheez","feranmi" ]; //non-primitve 
//Primitive data types

let primitive = 10;  //primitive
let anotherPrimitive = primitive

primitive = 30;

console.log({ primitive, anotherPrimitive})

//non-primitive data types

let newStudentNames = studentNames;

//studentNames = ["soliu", "abdullahi"];

//console.log({studentNames, newStudentNames})
studentNames[0] = "Amodu"
console.log({studentNames, newStudentNames})



//Javascript operators

//logical operators
const num1 = 10;

const name1 = 5;

const trueValue = num1 || name1 ? true : false
// const trueValue = num1 && name1 ? true : false

//console.log(`${trueValue}`)

//comparison operator
let num2 = 10;
num2++
const num3 = 10;

const result = num2 == num3 ? "yes" : "no"

console.log(num2)