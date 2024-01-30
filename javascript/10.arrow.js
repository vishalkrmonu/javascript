const user = {
    username: "vishal",
    price: 999,
    welcomeMessage: function () {
        //this-for current value means koi bad me change krega toh nya wala value show hoga
        console.log(`${this.username} , welcome to website`);
    // console.log(this);
    }
}
user.welcomeMessage()
user.username="sam" //new value add
user.welcomeMessage() //this keyword ke vajah se nya wala name show hoga

console.log(this); //not work because global nhi hai this 

//browser ke andar object ka name window hai globally hai

// function chai(){
//     let username="vishal"
//     console.log(this.username); //to much term inside the "this" keyword
// }
// chai()


// const chai=function(){
//         let username="vishal"
//     console.log(this.username); 
// }

   //-----arrow function-------
const chai=() => { 
        let username="vishal"
    console.log(this); 
}
// chai()


//method 1
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


//method 2
// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2)
// console.log(addTwo(3,4));


const addTwo=(num1,num2) => ({username:"vishal"})
console.log(addTwo(3,4));

// const myArray=[2,5,3,7,8]
// myArray.forEach()

