// ----day:40--promise

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise consumed");
})

// method2:bina promise ko store kiye 
//jab resolve likhte hai tb automatic then se connnect ho jata hai
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


//method 3
//resolve me jo bhi parameter pass kroge vo mil jata hai
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "vishal", email: "vishalkrmonu@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


// method 4: error method -".then" bar bar use kr skte ho 
const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"vishal",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is  either resolved or rejected"))



//method5: promise is object(async use)
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try{
    const response =await promiseFive
    console.log(response);
   }catch(error){
console.log(error);
   }
}
consumePromiseFive()


// method1
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data =await response.json()
//      console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


//method2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
