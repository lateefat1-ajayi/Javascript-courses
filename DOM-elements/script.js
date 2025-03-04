// //accessing elements


// //classname

// const body = document.getElementsByClassName("body")

// console.log(body)

// //Id

// const header = document.getElementById("header")
// console.log(header)

// //tagname

// const hOne = document.getElementsByTagName("h1")
// console.log(hOne)


// //query selector
// //two types of query selector
// // Query selector all and Queryselector

// const lateefat = document.querySelector(".body")
// console.log(lateefat)


// const all = document.querySelectorAll("h1")
// console.log(all)

//DOM manipulation

//textcontent
//innerhtml
//styling
//adding & removing classes
//events listener

//TEXT CONTENT

const header = document.getElementById("header")

header.textContent = "hello universe"

const paragraph = document.querySelector("p")

paragraph.textContent = "i am a chosen"


//INNER HTML

const container = document.querySelector('div')

container.innerHTML = `<h1> I read</h1>
<p> and play</p>`

//STYLING

container.style.backgroundColor = "black"
container.style.color = "white"

//ADDING AND REMOVING CLASSES

const h6 = document.querySelector('h6')

h6.textContent = "lmao"

//ADDING  A CLASS TO H6

h6.classList.add("subheader")

//Removing a class

paragraph.classList.remove("body")

const ajayi = document.getElementsByClassName("body")
console.log(ajayi)



//ADDING EVENT LISTENER

//CLICK EVENT

// document.querySelector("button").addEventListener("click", function(){
//    const message = document.getElementById("message")
//    if (message.textContent === "hello!"){
//     message.textContent = "button clicked"
//    } else{
//     message.textContent = "hello!"
//    }
// })

document.querySelector("button").addEventListener("click", function(){ document.getElementById("message").textContent = "button clicked!"})

//MOUSE EVENT

document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById("box").style.backgroundColor = "yellow"
})
document.getElementById("box").addEventListener("mouseout", function(){
    document.getElementById("box").style.backgroundColor = "black"
})

document.getElementById("textInput").addEventListener("keyup", function(event){
    document.getElementById("output").textContent = 'you pressed:' + event.key
})

function greet(name){
    alert("hello," + name + "!");
}

document.getElementById("greetBtn").addEventListener("click", () => greet("Lateefat"))

const newBox = document.createElement("div")
newBox.textContent = " yay its a monday"
 document.body.appendChild(newBox)