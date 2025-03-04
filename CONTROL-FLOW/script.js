console.log("hello world!")
//control flows --> determines how programmes are executed based on conditions and iteration.

//conditionals -- if, else-if, else, ternary operator.

if ("condition") {
    //code to excecute if condition is met
}

let age = 30;

if (age === 25) {
    console.log("age is greater than 25")
} else if( age < 25){
    console.log("age is lesser than 25")
} else {
    console.log("age is 30")
}


let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("you are not logged in")
} else {
    console.log("you are logged in..")
}

//classwork
let balance =500;

let withdrawalAmount = 1000;

if ( withdrawalAmount > balance) {
    console.log("insufficient funds")
} else if (withdrawalAmount == balance){
    console.log("equal")
} else if (withdrawalAmount < balance){
    console.log("sufficient funds")
}

//cls2

let usersAge = 18;

if (usersAge > 18){
    console.log("eligible")
} else if( usersAge < 18) {
    console.log("non-eligible")
} else{
    console.log("you can vote")
}

//exercise

let purchaseAmount = 100;
let discount;

if (purchaseAmount >= 250) {
    discount = 10
} else if (purchaseAmount >= 150) {
    discount = 5 
} else if (purchaseAmount = 100) {
    discount = 1.5
} else {
    discount = 0
}

console.log(`you got a discount of ${discount}`)

//TERNARY OPERATOR is a shorthand for if , else and else-if.
//condition? expresion_if_true : expression_if_false.


//example

let threshold = 40;

threshold > 40? console.log("marry") :
console.log("minor");

//example2

const number = 9;

const  result = number % 2 == 0 ?
"even" : "odd"
console.log(result)

//exercise

let temperature = 180

temperature > 170 ? console.log("hot day") : console.log("sunny") ;

//const entry = temperature > 170 ? "its a hot day" : "its sunny"
//console.log(entry)


//Switch statement is used when they are multiple possible values for a variable

let day = "tuesday"

switch(day){
    case "monday":
    console.log("today is bright");
    break; 
    case "friday":
    console.log("Jumat");
    break;
    case "tuesday":
    console.log("today is tuesday"); 
    break;   
    default:
    console.log("it is a normal");   
}

//food order example

let order = "pizza"

switch (order) {
    case "burger":
    console.log("this is burger");
    break;

    case "pizza":
        console.log("you ordered a pizza")
    break;

    case "doughnut":
    console.log("you ordered a doughnut")
    break;

    default:
        console.log("invalid order, please select from the menu")
}

//exercise
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
    dayName = "saturday";
    break;

    case 2:
    dayName = "sunday";
    break;  
            
    case 3:
    dayName = "monday";
    break;
    
    case 4:
    dayName = "tuesday";
    break;

    case 5:
    dayName = "wednesday";
    break;

    case 6:
    dayName = "thurday";
    break;

    case 7:
    dayName = "friday";
    break;

    default:
    dayName = "none";
}

console.log(`day ${dayNumber} is ${dayName}`)

//exercise2

const role = "admin"

switch (role) {
    
    case "admin":
    console.log("welcome admin");
    break;

    case "viewer":
    console.log("welcome viewer");
    break;

    case "editor":
    console.log("welcome editor");
    break;

    default:
    console.log("unknown role, please contact support.");
}

//LOOPS are used to execute a block of code multiple times.

//eg1

// for(initialization; condition; update){
//     //code execute
// }

for(let i = 0; i < 10; i++) {
    console.log("iteration", i)
}

//eg2

let table = 5;
for (let i = 1; i <= 10; i++ ) {
    console.log(`${table} * ${i} = ${table * i}`)
}
//eg3
let i, x= '';
for (i = 0; i <=5; i++){
    x += i;
    console.log(x);
}

//example4


for(let k = 0; k <= 10; k += 2 ){
    console.log("odd number", k)
}

// for(let w = 1; w <= 5; w++ ){
//     if (w === 3) {
//         continue
//     }
//     console.log(w)
//  } 

// let fruit = ["apple", "mango", "kiwi", "tomato"]
// for(let i = 1; i< fruit.length; i++ ){
//     console.log(fruit[i])
//  } 


let myname = "lateefat" 
for( let f = 0 ; f< myname.length; f++){
    console.log(myname[f])
}

//FOR ...IN LOOP

let user = {name:"bisi", age:19, city: "osun"}; 

for(key in user){
    console.log( key + ":", user[key])
}

let colors = ["yellow", "green", "blue", "pink"];
for(let color of colors){
    console.log( color)
}

//WHILE LOOP

// while("condition") {
//     //code to execute
// }

// let P = 1;
// while(P <= 7){
//     console.log(P)
//     P--
// }

let happy = ["apple", "mango", "kiwi", "tomato"]
let J = 0;
while(J < happy.length) {
    console.log(happy[J]);
    J++
}

//forEach
const students = ["abeeb", "muheez", "hakeem", "abu"]
students.forEach( (student, i) => {
    console,log(`index ${i} : ${student}`)
}

)
 