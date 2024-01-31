//-----day26:control flow--------
//if
const isUserLoggedIn = true
if (2 != 6) {
    console.log("excuted");
}

// < ,> ,<=, >= ,==,!=, ===,!==

// const temp=41
// if(temp===41){
//     console.log("less then 50 temp");
// }
// else{
//     console.log("more tham 50 temp");
// }
// console.log("excuted");


// const score=200
// if(score>100){
//     let power="fly" //error milna chahiye var use krne se error nhi aayega vo globally use ho jata hai
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000
// if(balance>500) console.log("test"), console.log("test2"); achha tarika nhi hota aishe likhne ka
if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// ------switch-----
console.log("-----switch problem starts----");
//syntax
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

const months = "feb"
switch (months) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feburary");
        break;
    default:
        console.log("default case matchs");
        break;
}

// ------truthy.js-----
console.log("-----truthy.js problem starts----");



// const userEmail="vishal@gmail.com"
const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}


// false value
// false:0,-0,BigInt 0n ,"",undefined,NaN

//truthy value
// "0",'false'," ",[],{},function(){}

if (userEmail.length === 0) {
    console.log('Array is empty');
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// false==0 ->true
// false=='' ->true
// 0=='' ->true


//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 1
val1 = null ?? 10 ?? 20
console.log(val1);


//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80");