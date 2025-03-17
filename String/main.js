console.log("welcome to string in details")
//length method

let item = "DLT Africa!";

const length = item.length;
console.log(length);

const index = item.charAt(0);
console.log(index);

const firstOccurence = item.indexOf("Africa");
console.log(firstOccurence);

//extract part of a string between two index

const extractE1 = item.substring(1, 5);
console.log(extractE1);

const extractE2 = item.slice(0, 7);
console.log(extractE2);

//to track space
const split = item.split(" ");
console.log(split);

const join = split.join(" ")
console.log(join);

const upper = item.toUpperCase();
console.log(upper);

const lower = upper.toLowerCase();
console.log(lower);

const checkAvailability = item.includes("Africa");
console.log(checkAvailability);

const starting = item.startsWith("DLT");
console.log(starting);

const ending = item.endsWith("europe");
console.log(ending);

const email = "   yourname@gmail.com  ";
console.log(email);

const trimmedEmail = email.trim();
console.log(trimmedEmail);

const repeat = item.repeat(2);
console.log(repeat);

const replace = item.replace("!", " ");
console.log(replace);

const lastIndex = item.lastIndexOf("c");
console.log(lastIndex);

const concat = item.concat(trimmedEmail);
console.log(concat);

const example = 1 + "1";
console.log(example)

//END OF STRING METHOD!

//Value and refrence in js
//Primitive are [passed by value]

let a = 6;
let b = a;

console.log(b)
console.log(a)
b = 10;
console.log(b);

let firstName = "Oluwaferanmi";
let fullName = firstName;

console.log(fullName);

fullName = "Oluwaferanmi Alaba"
console.log(fullName)

//Non-primitive are [passed by reference].
let firstExample = {age: 12}
let exampleTwo = firstExample;
exampleTwo.age = 20;

console.log(firstExample)
console.log(exampleTwo)

//SPREAD OPERATORS allows you to unpack iterables like array string and maps etc and objects into individual elements or key value pairs. they allow you to copy an array 

const arr = [1, 2, 10, 405];
const arrClone = [...arr];
console.log(arrClone)
arrClone.push(4)
console.log(arr)

//spread operator can be used to merge two arrays together

let arr1 = [1, 2];
let arr2 = [3, 4];

const merged = [...arr1, ...arr2];
console.log(merged);

let object1 = {name: "olu", hobby: "reading"}
let object2 = {age: 12}
const mergedObj = {...object1, ...object2}
console.log(mergedObj)

function sum (a,b,c){
    return a+b+c;
}
const values = [12, 12, 12];
const result = sum(...values);

console.log(result);

//DESTRUCTURING

let person = {name: "Alhaji agba", age: 102, status:"Dead"};
const {name, age} = person;
console.log(name)

let fruit = ["Apple", "Banana", "cherry", "Date", "Egg plant"];
const [first, second , third] = fruit;

console.log(second);