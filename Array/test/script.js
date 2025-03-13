//num1
const names = ['Ali', 'Aisha', 'Omar', 'Fatima', 'Amir'];
//num2
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];


const newWords = words.reduce((acc, curr) =>{
    acc[curr] = (acc[curr] || 0) +1
    return acc
}, [])
console.log(newWords)


//num3
//food order process

function orderFood (getFood , callback){
    setTimeout(() => {
       console.log("ordering food") ;
       callback(null, {id: getFood, food : "rice"})
    }, 1000);
} 

function prepareFood (user , callback){
    setTimeout(() => {
       console.log("preparing food") ;
       callback(null, user)
    }, 2000);
} 

function deliverFood (user , callback){
    setTimeout(() => {
       console.log("deliver food") ;
       callback(null, {...user, delivery: ["water"]})
    }, 3000);
} 

function receiveFood (user , callback){
    setTimeout(() => {
       console.log("receiving food" , user) ;
       callback(null, {...user, i:{delivery: "water"}})
    }, 4000);
} 
function makePayment (user , callback){
    setTimeout(() => {
       console.log("making payment" , user) ;
       callback(null, "success!")
    }, 5000);
} 

orderFood(1, (error, two) => {
    if (error){
        console.error("error")
    }
    prepareFood(two, (error,three )=>{
    if(error){
        console.error("error")
    }
    deliverFood(three, (error, four) =>{
        if(error){
            console.error("error")
        }
        receiveFood(four, (error, five) =>{
            if(error){
                console.error("error")
            }
            makePayment(five, (error, six)=>{
                if(six){
                    console.log(six)
                }else{
                    console.log("error")
                }
            })
        });
    });

    });
});

//number4
const arrayy = [
    {name:"lateefat" ,score: 50 , status: "passed"},
    {name:"joe" ,score: 50 , status: "passed"},
]

// arr.forEach((name) => name.arr)

// console.log(arr)

const mapp = arrayy.map((name) => name.name)
console.log(mapp)
console.log(mapp.map((oh) => oh.toUpperCase()))

const filteredMap = arrayy.map((yes) => yes.status)
 console.log(filteredMap)
//number5
const students = {
    titi:{score: 50},
    taiwo: {score: 30}
}

const getStudentScores = (name) =>{
    return new Object((resolve, reject)=>{
        setTimeout(() => {
            if(students[name]){
                resolve(student[name])
            }else{
                reject("error, not found")
            }
        }, 1000);
    })
}
const calculateAverage = async () =>{

}


articles = [
    {
        title: "The Future of Web3",
        content: "Web3 is revolutionizing the internet by enabling decentralized applications and blockchain-based solutions.",
        author: "Alice Johnson"
    },
    {
        title: "Understanding JavaScript Closures",
        content: "Closures allow functions to access variables from an outer function even after the outer function has executed.",
        author: "David Smith"
    },
    {
        title: "AI in Healthcare",
        content: "Artificial Intelligence is transforming healthcare through improved diagnostics, personalized medicine, and robotic surgeries.",
        author: "Sophia Williams"
    }
];

const div = document.querySelector(".article")

div.innerHTML = articles.map( people =>`
    <div>
    <h3 class="one">title: ${people.title}</h3>
    <p class="one">content : ${people.content}</p>
    <p class="one">  author: ${people.author}</p>
     </div>
    <div>
    
    `)
  const one = document.querySelectorAll(".one")


  