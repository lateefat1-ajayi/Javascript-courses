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


const registerUser = new Promise((resolve, reject) => {
    let success = 1;
    setTimeout(() => {
        if(success > 0){
            resolve("operation successful")
         }else{
             reject("operation failed")
         }
    }, 2000);
})

registerUser.then((positive) => {
    console.log({resolve : positive})
}).catch((negative) =>{
    console.log({reject: negative})
}).finally(() =>{
    console.log("the operation is complete")
})


//ASYNC/AWAIT SIMPLIFIES THE ASYNCHRONOUS HANDLING PROCESS

//creating a promise

const fetchMyData = () =>{

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("data fetched")
        }, 2000);
    })
}

const handleFetchedData = async () =>{
    const data = await fetchMyData();
    console.log({result : data})
}

handleFetchedData();

//example2
const cohort = {name:"muiz", height: "77", skin:"fair"}

const fetchCohortData = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(cohort)
        }, 3000);
    })
}

const processCohortData = (data) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(data)
        }, 4000);
    })
}

const saveCohortData = (processedData) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(processedData)
        }, 5000);
    })
}


const handleCohortData = async () =>{
    console.log("starting point");


    const data = await fetchCohortData()
    console.log({step1 : data})

    let processData
    const getProcessedData = await processCohortData(data);

    if (getProcessedData){
        const numHeight = Number(getProcessedData.height)
        const newResult = {...getProcessedData, height:numHeight}

        processData = newResult
    }

    console.log({step2 : processData});

    const savedData = await saveCohortData(processData);
    console.log({step3 : savedData})


}
 
handleCohortData()


//error handling in async/await
const fetchUser = () =>{
    return new Promise((resolve)=> {

        setTimeout(() => {
            resolve("user fetched")
        }, 5000);
    })
}

const fetchPost = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("posts fetched successfully")
        }, 5000);
    })
}

//async/await part
const handleUserAndPost= async () => {

    try {
        console.log("fetching user and posts")
        const [user, posts] = await Promise.all([fetchUser(), fetchPost()])

        //or
        //const user = await fetchUser();
        //const posts = await fetchPost()

        console.log(`user : ${user}`)
        console.log(`posts : ${posts}`)

    } catch (error) {
        console.log(`Error : ${error}`)
    }
}
handleUserAndPost();

//classwork
//instructions

const userInfo = 
{ 1: { id: 1,name:"lateefat", age:18},
  2: { id: 2,name:"titi", age:20}
}

const fetchingUserData = (userId) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {

            if(userInfo[userId]){
                resolve(userInfo[userId])
            }else{
                reject("user info not found")
            }
        }, 2000);
    })
}

const userTask =
 {1 : ["reading"],
  2 : ["writing"]}
    

const fetchingUserTask = (userId) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
          


            if(userInfo[userId] && userTask[userId]){
                resolve(userTask[userId])
            }else{
                reject("user task cannot load")
            }
        }, 2000);
    })
}


//try and catch
const finalResult = async (userId) =>{

    try {
        console.log("loading results...")

        const info = await fetchingUserData(userId)
        console.log({info})

        console.log(`fetching ${info?.name}'s task`);


        const task = await fetchingUserTask(userId)
        console.log(`${info?.name}'s has this task: ${task}`)


    
    } catch (error) {

        console.log(`error : ${error}`)

    }finally{
        console.log("operation completed")
    }
}
finalResult(1)