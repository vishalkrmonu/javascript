//primitive

// 7type : String,NUmber ,Boolean, null, undefined,symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
console.log(score);

const id=Symbol('123')
console.log(id);
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