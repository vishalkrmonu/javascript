
// # javascript and classes
// ## OOP
// ## Object
// -collection of properties and methods
// -toLowerCase

// ## why use OOP

// ## parts of OOP
// Object literal

// -contructor function
// -prototype
// -classes
// -Instances(new,this)

// ## 4 pillers
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Object literal
const user ={
    username: "vishal",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this); //sara info de dega
    }
}
// console.log(this); //jab global use krte hai tb empty output aayega is code me
// console.log(user.username);
// console.log(user.getUserDetails());



// -contructor function
//  new :it is constructor function(new thing lane ke liye)
//       empty create or  new object generate or create
  
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn = isLoggedIn

this.greeting =function(){
    console.log(`welcome ${this.username}`);
}

    return this
}

const userOne=new User("vishal",12,true)
const userTwo=new User("monu",11,false)
// console.log(userOne);
console.log(userOne.constructor); //just like encapsulation
console.log(userTwo);
