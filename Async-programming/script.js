console.log("good morning")
//CALLBACK --> functions passed as params to another function

//example 1

function car (name,callback){
    console.log("the model is " + name);
    callback();
}

function callCar() {
    console.log("move on!")
}
car("bmw", callCar)

//example2, set timeout we want the execution to be done after a period of time, it uses millliseconds, 2s is 2000

function greet(name){
    setTimeout(() =>{
        console.log("Hello " + name );
    }, 1000)
}

greet("feranmi")

//eg3

function fetchData (callback){
    setTimeout(() =>{
        callback("data received")
    },1000)
}

fetchData((data) => {
    console.log(data);
})

let numbers = [1, 2, 3, 4, 5, 6]

numbers.map((num) => {
    console.log(num * 2)
})

//clwk

function greetUser (name, greeting){
   console.log("hello " + name);
   greeting();
}

function welcome(){
    console.log("welcome back!");
}

greetUser("lateefat", welcome)


//CALLBACK HELL

//user from the data base
//validate the password
//fetch user permissions
//feth user profile data
//send a response if everything is successful

function getUser(userId, callback){
    setTimeout(() => {
        console.log("user fetched from the data base");
        callback(null, {id: userId, username: "leakyBass"})
    }, 1000);
   
}

function validatePassword(user , callback){
    setTimeout(() => {
        console.log("password validated. ");
        callback(null, user)
    }, 1000);
}

function fetchUserperm(user, callback){
    setTimeout(() =>{
        console.log("permission received");
        callback(null, {...user, permission: ["read" , "write"]})
    }, 1000);
}

function fetchUserProfile(user, callback){
    setTimeout(() => {
        console.log("user's profile retrieved");
        callback(null, {...user, profile:{age: 20, email: "lakybass19@gmail.com"} })
    }, 1000);
}

function userResponse(user, callback){
    setTimeout(() => {
        console.log("response for the user ", user);
        callback(null, "success!")
    }, 1000);
} 

//call back hell starts here

getUser(1, (error, user) => {
    if(error){
        console.error(error)
    }
    validatePassword(user, (error, validUser)=>{
        if (error){
            console.error(error)
        }
        fetchUserperm(validUser, (error, yes) =>
        {
            if (error){
                console.error(error)
            }
            fetchUserProfile(yes, (error, no) =>{
                if (error){
                    console.error(error)
                }
                userResponse(no, (error, success) =>{
                    if(success){
                        console.log(success)
                    }else{
                        console.error(error)
                    }
                });
            });
        });
    });
});

//promise represents a value that may be available now, in the future, or never. It helps avoid callback hell by providing .then and .catch method

const promise = new Promise((resolve, reject) =>{
    let success = true;
    if(success){
        resolve("promise resolved successfully")
    }else{
        reject("i don't want it")
    }
})

promise.then((result) => console.log(result))
.catch((error) => console.log(error))

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time))
}
delay(2000).then(() => console.log("executed after 2 seconds")) 

//CHAINING PROMISE
function firstTask(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("first task")
            resolve();
        }, 3000);
    })
}
function secocndTask(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("second task")
            resolve();
        }, 3000);
    })
}
firstTask().then(secocndTask).then(() => console.log("task completed"))





