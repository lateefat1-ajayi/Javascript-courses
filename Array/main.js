//Array is an example of non-primitive data type


//normal array
const cohorts = ["lateefat", "idris", "Feranmi", "Ridwon", "Dolapo", "Abdullah", "Damilare", "Kabeer", "muiz"]
console.log(cohorts);

const replaceEl = (cohorts[1] = "Abdullah")
console.log(replaceEl);
console.log(typeof replaceEl);

//Nested array
const nested = [[1, 2], [3, 4], [5, 6]]
console.log(nested);

const newArray = nested[0][1]

console.log(newArray);
console.log(nested.length);

//To add new element to the last index of an array
cohorts[9] = "olodo"
console.log(cohorts);
console.log(cohorts.length);

cohorts.forEach((names) => {
    console.log(names.toUpperCase());
})

const students = ["Yemi", "Soliu", "Zimbi", "Fatimoh", "Maryam", "Deborah"]
console.log(students);

//ARRAY METHOD

//------PUSH() METHOD------
//to add a new elemetnt to the end of an array

const pushed = students.push("bisola", "lateefat")
console.log(pushed); // to print new array  length

//POP METHOD
//It is used to remove the last element in an array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number);
const popped = number.pop() //To save the removed element in a variable
console.log(popped); //to view the removed element
console.log(number); //to view the remaining numbers


//SHIFT METHOD (inverse of pop)
//TO REMOVE THE FIRST ELEMENT OF AN ARRAY

const color = ["green", "red", "blue", "white"]
console.log(color);
const removeEL = color.shift() //to save the removed element in a variable
console.log(removeEL);
console.log(color);

//UNSHIFT METHOD
//It is used to add a new element to the beginning of a variable
const food = ["rice", "yam", "potato"]
console.log(food);
const newFood = food.unshift("beans")
console.log(newFood);
console.log(food);

//SPLICE METHOD
//It alllows us to add an element or value into an array,  it usually takes three paramaters
//1 the position of the new element
//2 the numbers of element you want to delete after the new element
//3 the new element you wish to add

const foods = ["amala", "fufu", "garri", "wheat", "barley"]
console.log(foods);
foods.splice(3, 0, "tuwo", "yam")
console.log(foods);

const wears = ["jeans", "tops", "hat", "shoes", "socks"]
console.log(wears);
wears.splice(2)
console.log(wears);

//SLICE METHOD
//RETURNS A NEW ARRAY THAT CONTAINS ELEMENT FROM A CERTAIN POINT (excluding elements at the position of second parameter input) 
//first params is where to start from
//second params is where to end but excluding elements at the index position
//(when not used, it slices the rest of the element)

const male = ["moshood", "umar", "fattah", "wareez", "kazaz"]
console.log(male)

const newString = "adeyemi"
console.log(newString.length);
const slicedString = newString.slice(1, 4);
console.log(slicedString)
const warriors = male.slice(1, 4);
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders);
//for using negative parameter

const stakeHolders2 = male.slice(-2) //start counting from element(-1)
console.log(stakeHolders2)




//INCLUDES METHOD
//Returns boolean value to check if it includes an element

const blean = male.includes("daudu");
console.log(blean) //false

const blean2 = male.includes("kazaz")
console.log(blean2)

//SORT METHOD

//It sorts the elements of an array and returns the sorted array in alphabetical order

male.sort()
console.log(male)

//INDEXOF METHOD

//It is used to search or find the index of the first occurence of a specified element in an array.
//It searches the array from the beginning to the end and returns the first occurence of the specied element, if the element is not found it'll return (-1)

const num = [1, 2, 3, 4, 9, 1, 2, 9, 8, 7, 12, 11, 1, 2]
console.log(num)
const index1 = num.indexOf(2)
console.log(index1)

const index2 = num.indexOf(5)
console.log(index2)

//LAST INDEX OF
//It starts searching from the end to the beginning

const lastIndex = num.lastIndexOf(4, num.length)
console.log(lastIndex)


//FOREACH Method
// is used to perform an action on each element in an array
const names = ["ademola", "Ajala", "alaba"]
//  names.forEach( function(){
//     console.log(names)
//  })

//  names.forEach(() => {
//     console.log(names)
//  })

names.forEach((value, i, arr) => {
    console.log(value)
    console.log(i)
    console.log(arr)
})

let totalValue = 0;
const trans = [42, 45, 26, 4, 13, 16];
trans.forEach((trn) => {
    console.log(totalValue, (totalValue += trn), trn)
})
console.log(totalValue)

names.forEach((name) => console.log(`congratulation ${name}, you'll be representing the team in uk`))


//MAP METHOD
//its is similar to for each method, it allocates memory in all data stores and return values

const investory = [
    { name: "rice", price: 50000 },
    { name: "beans", price: 500 },
    { name: "garri", price: 3000 },
    { name: "semo", price: 4000 },
    { name: "yam", price: 5000 }
]

const prices = investory.map((value) => {
    return value.price
})
console.log(prices)

const commodities = investory.map((value) => value.name
)
console.log(commodities)

//MAP METHOD
// it creates a new array amd apply function to each element without modifying the original array

const arr = [1, 2, 3, 4, 5, 6];

const multipliedVal = arr.map((El) => El * 2);
console.log(multipliedVal);

const words = ["hello", "world", "javascript"]

console.log(words.map((oh) => oh.toUpperCase()))

const pricesInUsd = [200, 120, 360, 90]
const xchangeRate = 1490

console.log(pricesInUsd.map((usd) =>
    usd * xchangeRate))

const users = [
    { name: "lateefah", age: 300 },
    { name: "abdullah", age: 950 },
    { name: "muiz", age: 1450 },
    { name: "kabeer", age: 1950 }
];

const nameOnly = users.map((value) => value.name)
console.log(nameOnly)



const products = [
    { name: "Laptop", price: 300 },
    { name: "desktop", price: 950 },
    { name: "mouse", price: 1450 },
    { name: "keyboard", price: 1950 }
];

const productWithId = products.map((product, index) => (
    {
        id: index + 1,
        ...product
    }
))
console.log(productWithId)
console.log(products)

const productId = productWithId.map((idNumbers) => idNumbers.id)
console.log(productId)

//create an array of numbers use map method to return the numbers less than six

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ans = nums.map((i) => {
    if (i < 6) {
        return i
    }
})

console.log(ans)

//FILTER 
// it creates an array and return the elements that meet the condition
// filter method has the same limitation as map method, i.e it does not modify the array elements

const evenNumber = nums.filter((i) => i % 2 === 0)
console.log(evenNumber)

const below = productWithId.filter((product) => product.price <= 1000)
console.log(below)

const lesstn7 = productWithId.filter((name) => name.name.length < 7)
console.log(lesstn7)

const newArr = [100, "pelumi", false, {}, null, undefined]

const filteredString = newArr.filter((data) => typeof data === "string")
console.log(filteredString)

//exercise

let equals = 0;
const priceOnly = productWithId.map((index) => index.price)
console.log(priceOnly)

priceOnly.forEach((hope) => {
    console.log(equals, (equals += hope), hope)
})
console.log(equals)

//FILTER EXAMPLE 2

const firstNames = ["Dolu", "Soliu", "feranmi", "abdullah"]

const upperCaseNames = firstNames.filter((name) => {
    if (name.charAt(0) === name.charAt(0).toUpperCase()) return name
})

console.log(upperCaseNames)


const pluralNames = firstNames.filter((name) => {
    if (name.charAt(0) === name.charAt(0).toUpperCase()) return name
}).map((element) => element + "s")
pluralNames.push("Idrees")
console.log({ pluralNames })
console.log(firstNames)


//FOREACH VS MAP

const userNames = [{ name: "soliu", age: 15 }, { name: "feranmi", age: 10 }]
//MAP
const newUserNames = userNames.map((age) => age.age + 5)
console.log({ newUserNames })
console.log({ userNames })

// const newUserName = userNames.map((name, index) => ( 
//     {
//     ...name, age: name.age + 5, height: name.age + 10, id: index + 1
// }
// ));

// console.log(newUserName)


//FOREACH
userNames.forEach((add) => add.age += 5)
console.log({ userNames })


//REDUCE METHOD

// syntax: array.reduce((*accumulator, *currentValue, currentIndex, array), initialValue)
// 1 sum of array elements
//2 flatten an arrray
//3 occurence of an element/item in an array
//4 find the maximum value
//5 grouping data by a property


//eg. 1: sum of array elements
const myNums = [1, 2, 3, 4, 5];

const sum = myNums.reduce((accumulator , currentValue) => (accumulator + currentValue), 0)
console.log({sum})

//eg. 2: flatten an array
const nestedArray = [[1,2], [3,4], [4,6]];

const flattenedArray = nestedArray.reduce((acc, currValue) => (acc.concat(currValue)), [])

console.log(flattenedArray);

const nonRepeatedResult = flattenedArray.reduce((acc, currentValue) => {
    if (!acc.includes(currentValue)) {
        acc.push(currentValue)
    }

    return acc
}, []);

console.log(nonRepeatedResult)



// to remove duplicate from the result, u can use reduce, filter and also for each method

const flatFilter = flattenedArray.filter((e, index, array) => array.indexOf(e) === index) 
console.log(flatFilter)


const nestedArray2 = [[1,2], [[3,4], [5,6]], [7,8]]

// const flattenedArray2 = nestedArray2.reduce((acc, currValue, currentIndex) => {
//     if(typeof currValue[0] === "object"){
//         const currConcated = currValue
//     }
// }, []) 

//eg. 3 occurence of an element/item in an array

const myFruits = [ "grape","banana", "banana", "orange"]

const count = myFruits.reduce((acc,curr) => {

    acc[curr] = (acc[curr] || 0) + 1;

    return acc

}, [])
console.log(count)

//eg. 4 find the maximum value
const maxExample = [ 100, 30, 3, 10, 4]
const max = maxExample.reduce((acc, curr) => curr > acc? curr : acc, maxExample[0])

console.log({max})