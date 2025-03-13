const mixedString = "Hi, What is your name?";
const lowerCase = mixedString.toLowerCase()
const upperCase = mixedString.toUpperCase()
console.log(lowerCase)
console.log(upperCase)



//index of, lastindex of, includes, startswith, endswith, splice, split, trim,reverse and join, repeat,
const exampleString = "I love cats, cats are small ";

// const result = exampleString.indexOf(result)
console.log(exampleString.indexOf("cat"))

console.log(exampleString.lastIndexOf("cat"))

console.log(exampleString.includes("you"))

console.log(exampleString.startsWith("I"))

console.log(exampleString.endsWith("small"))

console.log(exampleString.slice("0" , "5"))

console.log(exampleString.split("are"))

console.log(exampleString.trim())

console.log(exampleString.repeat("2"))
// // const exampleString2 = "I love cats, cats are small";

// // console.log(exampleString2.join(""))


// //SELF TRIALS

// const fruits = ["apple", "orange", "pineapple", "pear"]

// fruits.forEach((jane) => {
//     console.log(jane.toUpperCase())
// })

// let answer = 0;
// let addSum = [1, 2, 3, 4]

// addSum.forEach((me) => {
//     console.log(answer, (answer += me), me)
// })
// console.log(answer);

// let answer2 = 0;
// let addSum2 = [1, 2, 3, 4]

// const newAns = addSum2.reduce((acc, curr) => (acc + curr), 0)

// console.log(newAns)

// const gadgets = [{name: "iphone", price: 2000}, {name: "macbook", price: 2300}]
// console.log(gadgets)
// const gadgetsMap = gadgets.map((value)=> value.name)

// console.log(gadgetsMap)
// const cap = gadgetsMap.map((oh) => oh.toUpperCase())

// console.log(cap)

// const gadgetsMap2 = gadgets.map((value)=> value.price)
// console.log(gadgetsMap2)

// const lssthn7 = gadgets.filter((val) => val.name.length < 7)
// console.log(lssthn7)
// const lssthn2 = gadgets.filter((val) => val.price <= 2000)
// console.log(lssthn2)



// const nestedArr = [[1,2], [3,4], [5,6]]

// const newNestedArr = nestedArr.reduce((acc, curr) => (acc.concat(curr)), [])

// console.log(newNestedArr)

// const lessthn4 = newNestedArr.map((x) =>{
//     if(x < 4){
//         return x
//     }
// })
// console.log(lessthn4)


// const numb = [1,2,3,4,5,6,7,8,9,10]

// for(i = 1; i<numb.length; i+= 2 ){
//     console.log(numb[i])
// }

// for(i =0; i< numb.length; i++){
//     console.log(numb[i])
// }

// for(i= 0; i< numb.length; i++){
//     if (i=== 3){
//         break;
//     }
//     console.log(numb[i])
// }



// let table = 3;

// for(i= 1; i<= 10; i++){
//     console.log(` ${i} * ${table} = ${i * table}`)
// }


// const player = {
//     firstName: "Silva",
//     lastName: "Tiago",
//     age : 38,
//     team: {
//         clubName: "chealsea", location: "england", manager: "Eric"
//     },

//     jerseyNumber: 6}

// const pll = player.team.clubName;

// console.log(pll)

// player.team.location = "south africa"

// const pll2 = player.team.location;

// console.log(pll2)


// const button = document.getElementById('button')
// function greet(name){
//     alert("hi," + name + "!")
// }



// document.getElementById('button').addEventListener("click",() => greet("lateefat"))

// const login = function (username, password){
//     if(!username || ! password)
//         return "please fill out required fields"
//    if(password.length < 5) return "password can not be less than five"

//    return username === "lateefat" && password === "0123latee"? "user exists" : "invalid details"
// }

// console.log(login("lateefat", "0123latee"))


// const arrayy = ["me " , "you "]
// const newArrayy = arrayy.join("they ")
// console.log(newArrayy)


