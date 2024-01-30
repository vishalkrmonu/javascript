// ----day:19-function------

function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,5);
// addTwoNumbers(3,"7"); 
// addTwoNumbers(3,null);

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result

    return number1+number2;
}
const result=addTwoNumbers(3,5)
console.log("result: ",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vishal"));
console.log(loginUserMessage( ));


// -----day20:function-----
console.log("-----day:20-function------");

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,5000));


const user={
    username:"vishal",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
