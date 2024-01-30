// ------day:21-scope-----

// {}->scope
//scope different in vs code and console(diff property)
//var kahi se bhi access ho jata hai isiliye usko use nhi krte hai
// var c=800
let a=900 //global scope
if(true){
    let a=20
const b=20
var c=30
console.log("INNER: ",a);
}
//only c is print because  of var 
console.log(a);
// console.log(b);
console.log(c);


// -----day:22-scope-----
console.log("----day:22-scope---");


function one(){
    const username="vishal"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //not print because its inner the function
    two()
}
one()

 if(true){
    const username="vishal"
    if(username==="vishal"){
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website); //not print because its inner the function
 }
//  console.log(username); //not print because its outside the function


//+++++++++++++++++ interesting +++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}


// console.log(addTwo(5)); //not work because we hold the fun in another varible
const addTwo=function(num){ //expression also  
    return num+2
}
// addTwo(6)
console.log(addTwo(5)); //here work
