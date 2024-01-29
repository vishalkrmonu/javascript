//day4:varible
console.log("----day4-----");
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
const accountId = 144455
let accountEmail = "vishal@gmail.com"
var accountPassword = "1234"
accountCity = "patna"
let accountState;

//accountId 2 //not allowed

accountEmail = "monu@gmail.com"
accountPassword = "65433"
accountCity = "bhilai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// node javascript/day4.js => for run in terminal




//day5:DataType
console.log("----day5-----");

"use strict";  //treat all js code as newer version

// alert(3+3); //we are using nodejs, not browser
console.log(3
    +
    3); //code ko achha dikhne ke liye hi likha kro
console.log("vishal")

let name = "vishal" //for string declare
let age = 18 //for number
let isloggedin = false  //for boolean


//primitive datatype
//number =>2 to power 53
//bigint => big type of number
//string => ""
//boolean => true/false
//null => standalone value(empty)
//undefined => not a asign value
//symbol

//object
console.log(typeof "vishal");
console.log(typeof null)  //object
console.log(typeof undefined) //undefined


// day6:conversion Operation
console.log("----day6-----");

// let score = "33abc"
// let score = 33;
let score = null

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) //convert in number
console.log(typeof valueInNumber)  //type of data
console.log(valueInNumber) //output:NaN

//"33"=>33
//"33abc"=>NaN
// true => 1;false=>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true;0=>false
// "" => false(for empty)
// "vishal"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// day7:opertor
console.log("----day7-----");
let value=3
let negvalue=-value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="hello"
let str2=" vishal"
let str3=str1+str2
console.log(str3);

console.log("1" +2);
console.log(1 +"2");
console.log("1" +2+2);
console.log(1+2+"2");
console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
// https://tc39.es/ecma262/multipage/abstract-operations



//day8:comparision
console.log("----day8-----");

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2" >1);
// console.log("02" >1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
console.log("2" ===2);