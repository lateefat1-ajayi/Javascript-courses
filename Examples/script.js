// //Equality operators
// //strict equality

// console.log(5 === "5")
// console.log(5 === 5)
// console.log(true === 1)
// console.log(null === undefined)
// // console.log([] === 0)
// // console.log([1, 2, 3] === [1, 2, 3])
// // console.log({} === {})

// let obj1 = {name: "lateefa"};
// let obj2 = {name: "lateefa"};
// console.log(typeof obj2)
// console.log( obj1 === obj2)

// let array1 = [1, 2]
// let array2 = [1, 2]
// console.log(array1 === array2)
// console.log(typeof array1)


// //loose equality

// console.log(5 == "5");
// console.log(5 == 5);
// console.log(true == 1)
// console.log(null == undefined);
// console.log([] == 1);
// console.log([1] == 1);
// console.log("latee" == "lateefat")
// console.log([1,2] == "1,2")

// let aray1 = [1, 2]
// let aray2 = [1, 2]
// console.log(aray1 == aray2);

// // let table = 5
// // for(let y = 0; y<= 10; y++){
// //     console.log( table*y )
// // }

//number1
let numbers1 = [2, 3, 5, 7, 9];
    for( let i = 0; i < numbers1.length;  i++ ) {
        console.log(numbers1[i] **2)
    }

//number2

let arr = [1, 2, 3, 5, 6, 7];
    for(let i = 0; i < arr.length; i++){
    if (i=== 3){
        break;
    }
    console.log(arr[i])
    }

//number3
let colors = ["red", "green", "blue"];
    
    for(let value of colors){
        console.log(value)
    }

//number5
 let digit = 2;

let result = digit > 0 ? console.log("positive") : console.log("negative")


