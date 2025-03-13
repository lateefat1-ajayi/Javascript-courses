//JAVASCRIPT FUNCTIONS


// // function declaration
// function myNames(){
//     return "hello world"
// }

// //fuction expression
// const myWorld = function(){
//      return "hello world"
// }

// //Arrow function
// const myName = () =>{
//      return "hello world"
// }

function add(a,b){
    return a+b;
}
console.log(add(1,2))

function jamb (age){
    if(age > 30){
        return "too old to register"
    } else if(age < 30 && age > 18){
        return "qualified to register"
    }else{
        return "too young"
    }
}
console.log(jamb (19))


// function day(k) {
//   return "sunny day " 
    
// }
// console.log(day("monday"))

function day(temp) {
 switch (temp){
    case "monday":
    return "cloudless day";
    
    case "tuesday":
    return "rainy day";

    case "wednesday":
    return "cloudy day";

    case "thursday":
    return "it is a sunny day";
    
    case "friday":
    return "happy day";

    default:
        return"rest"
 }
}
console.log(day("thursday"))


const checknumber = (num) => {
    if(num > 0){
        return "positive"
    } else if (num < 0){
        return "negative"
    }else{
        return "zero"
    }
}

console.log(checknumber(0))
console.log(checknumber(4))
console.log(checknumber(-4))

const isEven = (num) => num % 2 === 0? "even" : "odd"
console.log(isEven(4))


const login = (username, password, isAdmin) => {
    if (!username || !password) return
     "please fil the required fields";
    if (isAdmin) return "admin login successful";
    return username === "user" && password === "pass123"? "user login successful": "invalid credentials";
}
console.log(login("user", "pass123", false) )

//write a function that handles registration

const register = (firstname, password, country, dateofbirth) => {
    if (!firstname || !password) return "please fill required fields";

    if(password.length < 6) return "minimum of 6 characters";

    return firstname === "lateefat" && password === "pass123" ? "user already exists" : `${firstname} successfully registered`;
}
console.log(register("lateefat", "pass123", "nigeria", "19-06-2025") )



//SCOPE

//GLOBAL SCOPE

let globalVar = "i am global"
function showVar(){
    console.log(globalVar)
}
showVar()

//local scope

function howVar(){
    let localVar = "i am not local"
    console.log(localVar)
}
howVar()

//lexical scope

function outterFunc (){
    let outerVar = "i am outerr";

    function innerFunc(){
        function innermost(){
            console.log(outerVar)
        }
        innermost()
    }

    innerFunc()
}

outterFunc ()


//exercise correction

function getName(name){
    function greet (){
        console.log(`good day ${name}`)
    }
    greet()
}
getName("girl")