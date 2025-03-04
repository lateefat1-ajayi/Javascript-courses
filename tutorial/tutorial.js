//use if and else to


let purchaseAmount = 100;
let discount;

if (purchaseAmount >= 300){
    discount = 10;
    console.log("discount is 10%")
} else if (purchaseAmount >= 200){
    discount = 5;
    console.log("discount is 5%")
}else if (purchaseAmount >= 100){
    discount = 2;
    console.log("discount is 2%")
}else{
    console.log("no discount")
}
//ternary operator

let number = 15
let result = number % 3 === 0 && number % 5 === 0 ? "fizzbuzz" : number % 3 === 0? "fizz" : number % 5 === 0 ? "buzz" : number;
console.log(result)

for( i = 10; i <= 20; i++){
    console.log(i)
    
}

// let digit = 3
// for (i = 1; i <= 50; i += 5){
//     console.log(`${digit * i}`)
// }

let myname = "lateefat"
for (let i = 0; i < myname.length; i++ ){
    console.log(myname[i])
}


let numInput = 1;
let day;

switch (numInput){
    case 1:
    day = "sunday";
    break;

    case 2:
    day = "monday";
    break;

    case 3:
    day = "wednesday";
    break;

    case 4:
    day = "thursday";
    break;

    case 5:
    day = "friday";
    break;

    default:
    day = "no day"
}
console.log(day)

//for loop to print the first 10 even numbers

for(i = 1; i<= 10; i++){
    console.log(i * 2)
}