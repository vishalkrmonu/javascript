// ------day:9------
console.log("-----day:9----")

//primitive 

// 7type : String,NUmber ,Boolean, null, undefined,symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
console.log(score);

const id=Symbol('123')
const anotherId =Symbol('123')
console.log(anotherId);
console.log(id===anotherId);
// const bigNumber=23345754333n

//Reference (non-primitive)
//Array,Object,Functions

const heros =["shaktiman","naagraj","doga"];
let myObj={
    name:"vivek",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}

//typeof:id,anotherId,bigNumber 
// https://262.ecma-international.org/5.1/#sec-11.4.3
console.log(typeof anotherId);


// ------day:10------
console.log("-----day:10----");
// Stack(Primitive) :refrence:copy
// Heap(Non-Primitive): refrence:address

let myYoutubename="vishalkrmonu"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="vishal@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);
