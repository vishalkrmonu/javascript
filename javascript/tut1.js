//day4:varible

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
