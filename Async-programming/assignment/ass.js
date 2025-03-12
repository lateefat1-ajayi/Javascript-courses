// function getUser(userId){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("user fetched from the data base");
//             resolve( {id: userId, username: "Jane Doe"})
//         }, 1000);
//     });
// }

// function validatePassword(user) {
//     return new Promise( resolve => {
//     setTimeout(() => {
//         console.log("Password validated");
//         resolve( user);
//     }, 1000);
// });
// }


// function fetchUserPerm(user) { 
//     return new Promise( resolve => {
//     setTimeout(() => {
//         console.log("Permissions fetched");
        
//         resolve( { ...user, permissions: ["read", "write"] } );
//     }, 1000);
// });
// }


// function fetchUserProfile(user) {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             console.log("User profile fetched");
//             resolve( { ...user, profile: { age: 30, email: "jane@example.com" } });
//         }, 1000);
//     });
// }


// function userResponse(user) {
//     return new Promise (resolve =>{
//         setTimeout(() => {
//             console.log("Response sent to user:", user);
//             resolve( "Success!");
//         }, 1000);
//     });
// }

// getUser(1).then(validatePassword).then(fetchUserPerm).then(fetchUserProfile).then(userResponse).then((done) => console.log(done)).catch((error) => console.error(error))

// console.log("this is me")


function addition(b,c){
    return b + c;
}
console.log(addition(5,3))


function greet(){
    console.log("hey you there!")
}
greet()

function one (hi){
    console.log("hey " + hi + "!")
}
one("user")


const h2 = document.getElementById("htwo")
h2.style.color = "hotpink"

const button = document.getElementById("button")


// button.addEventListener("click", () =>{
//     document.getElementById("htwo").textContent = "E shock you?!"
// })

button.addEventListener("click", () =>{
    if(h2.textContent === "convert callback to promise"){
        h2.textContent = "e shock you?"
    } else{
        h2.textContent = "convert callback to promise "
    }
})

const dive = document.getElementById("dive")
 dive.addEventListener("mouseover", () =>{
        dive.style.backgroundColor = "deeppink"
 })

 const fruits = ["banana", "orange", "apple", "watermelon"]

 fruits.forEach(() => {
    fruits.toUpp
 })

console.log(fruits)








